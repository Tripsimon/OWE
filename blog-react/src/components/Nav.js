//Importy
import React,{ useState, useEffect } from "react";
import Logo from '../images/blogosLogoCroped.png'
import userIcon from '../images/userIcon.png'
import { store } from "../app/store"
import {Container, Navbar,  Nav as _Nav} from "react-bootstrap"

//React code
const Nav = () => {     
    
    //Stav přihlášení
    const isLoged = () => {
        let storeState = store.getState();
        let _user = storeState.loged.user;
        return !(_user && Object.keys(_user) == 0)
    }
    
    useEffect(() => { 
        //Nastavení přihlíšení                       
        setLoged(isLoged());     

        //Odhlášení store
        const unSubscribe = store.subscribe(() => setLoged(isLoged()))
        return () => unSubscribe();
    })    

    //Stav přihlášení
    const [loged, setLoged] = useState(false);

    return ( 
        //React bootsrap styl
        <Navbar style={NavbarStyle} expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src={Logo} alt='Blogos logo'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <_Nav className="me-auto">
              <_Nav.Link href="/about">O projektu</_Nav.Link>
              <_Nav.Link href="/blog">Blog</_Nav.Link>

              {!loged && 
              <_Nav.Link href='/login' > Log-In</_Nav.Link>
              }

                { loged &&
                    <_Nav.Link href='/chat' activeclassname='is-active'>
                        Chat
                    </_Nav.Link>
                }

              <_Nav.Link href='/users' > Uživatelé</_Nav.Link>


                { loged && 
                    <_Nav.Link href='/user' activeclassname='is-active'>
                        <img src={userIcon} style={{height: 30 + 'px'}} alt="user icon"></img>
                    </_Nav.Link> 
                }
              
            </_Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

//Změna barvy pozadí navbaru
const NavbarStyle = {    
    backgroundColor: 'rgba(90, 75, 110, 0.6)',

};

//export
export default Nav;