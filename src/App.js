import './App.css';
import TextHeader from "./Components/TextHeader";
import React from "react";
import {Container} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import CustomizedCarousel from "./Components/CustomizedCarousel";
import information from "./Data/information";
import ContactUs from "./Components/ContactUs";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Container>
            <Row className="justify-content-md-center">
                <TextHeader/>
            </Row>
            <div className="portfolio mt-40">
                <Row>
                    <Col>
                        <div className="section-title mb-2">קצת מהגלריה שלנו</div>
                    </Col>
                </Row>
                <Row className="carousel-row">
                    <Col xl={{span: 10, offset: 1}} md={{span: 8, offset: 2}}>
                        <CustomizedCarousel
                            cards={information.carouselItems(information.carouselItemsContent)}
                            margin="0 auto"
                            offset={2}
                            showArrows={false}
                        />
                    </Col>
                </Row>
            </div>
            <BrowserRouter>
                <ContactUs/>
            </BrowserRouter>
        </Container>
    </div>
  );
}

export default App;
