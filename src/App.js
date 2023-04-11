import './App.css';
import TextHeader from "./Components/TextHeader";
import React from "react";
import {Container} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import ContactUs from "./Components/ContactUs";
import {BrowserRouter} from "react-router-dom";
import CustomizedCarousel from "./Components/CustomizedCarousel";
import information from "./Data/information";


function App() {
  return (
      <div className="App">
          <Container className="full-width-container">
              <Row className="justify-content-md-center">
                  <TextHeader/>
              </Row>
          </Container>
              <div className="portfolio mt-40">
                  <Row>
                      <Col>
                          <div className="section-title mb-2">קצת מהגלריה שלנו</div>
                      </Col>
                  </Row>
                  <Container fluid className="full-width-container" >
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
                  </Container>
              </div>

          {/*<Row className="portfolio mt-40">*/}
          {/*        קצת מהגלריה שלנו*/}
          {/*        /!*<Row className="carousel-row">*!/*/}
          {/*        /!*    <Gallery/>*!/*/}
          {/*        /!*</Row>*!/*/}
          {/*        <Container>*/}
          {/*            <Row className="carousel-row">*/}
          {/*                <Col xl={{span: 10, offset: 1}} md={{span: 8, offset: 2}}>*/}
          {/*                    <CustomizedCarousel*/}
          {/*                        cards={information.carouselItems(information.carouselItemsContent)}*/}
          {/*                        margin="0 auto"*/}
          {/*                        offset={2}*/}
          {/*                        showArrows={false}*/}
          {/*                    />*/}
          {/*                </Col>*/}
          {/*            </Row>*/}
          {/*        </Container>*/}
          {/*    </Row>*/}
              <Container className="full-width-container">
                  <BrowserRouter>
                      <ContactUs/>
                  </BrowserRouter>
              </Container>
      </div>
  );
}

export default App;
