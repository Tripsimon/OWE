//Importy
import React from "react";
import {Carousel, Container, Card, Button} from "react-bootstrap"

//Komponenta
const Home = () => {
    return(
        //Obsah domovské stránky
        <Container>
            <Carousel className="mt-2" variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height: 500 + 'px'}}
                    src="https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/5a2d9/hero.webp"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Začněte blogovat třeba hned !</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height: 500 + 'px'}}
                    src="https://images.ctfassets.net/lzny33ho1g45/how-to-use-personal-hotspot-p-img/c50608cddbacbab405c22008b7a1394f/file.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Ozvěte se světu</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height: 500 + 'px'}}
                    src="https://artfiles.alphacoders.com/783/thumb-1920-78332.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Card className="mt-2">
                <Card.Header>Použíjte náš blog</Card.Header>
                <Card.Body>
                    <Card.Title>Připojte se k online světu dnes hned !</Card.Title>
                    <Card.Text>
                        Duis pulvinar. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Quisque porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Aliquam erat volutpat. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Donec iaculis gravida nulla. Maecenas libero. Pellentesque ipsum.
                    </Card.Text>
                    <Button href="/blog" variant="primary">Blog</Button>
                </Card.Body>
            </Card>

            <Card className="mt-2">
                <Card.Header>Registrujte se třeba hned !</Card.Header>
                <Card.Body>
                    <Card.Title>Vyberte si své informace, a jste in</Card.Title>
                    <Card.Text>
                        Duis pulvinar. Fusce aliquam vestibulum ipsum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Quisque porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Aliquam erat volutpat. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Donec iaculis gravida nulla. Maecenas libero. Pellentesque ipsum.
                    </Card.Text>
                    <Button href="/register" variant="primary">Register</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

//Export
export default Home;