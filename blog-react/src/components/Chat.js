//Importy
import { useEffect, useState } from 'react';
import firebase, { firestore } from '../app/FirebaseApp'
import MessageBox from '../containers/MessageBox';
import { store } from "../app/store"
import ChatInput from '../containers/ChatInput';

//Firestore
const chatappRef = firestore.collection('chatapp');

//Komponenta
function Chat() { 
  //Stavy
  const [user, setUser] = useState({});      
  const [messages, setMessages] = useState([]);    

  useEffect(() => {
    //Přihlášení
    setUser(store.getState().loged.user); 

    chatappRef
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        let _messages = [];

        snapshot.docs.forEach(e => _messages.push( {id: e.id, ...e.data()} ));

        setMessages(_messages);
      })
  }, [])
  
  //Odeslání zprávy
  const sendMessage = async (msg) => {  
    await chatappRef.add({
      sender: user.name,            
      createdAt: firebase.firebase.firestore.FieldValue.serverTimestamp(),      
      content:msg,      
    });        
  }
  
  //Komponenta chatovací místosti
  function ChatRoom(){           
    return(
      <div className='overlay'>
        <div className='chatRoom'>
            <MessageBox messages={messages} currentUser={user.name}/>                  
            <ChatInput sendMessage={sendMessage}/>
        </div>
      </div>
    )
  }

  //Overlay
  return (
    <div className="Chat">            
      <ChatRoom messages={messages} sendMessage={sendMessage}/>      
    </div>
  );
}

//Export
export default Chat;
