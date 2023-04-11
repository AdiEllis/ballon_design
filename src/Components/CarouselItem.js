import React from "react";
import Card from "react-bootstrap/Card";



const  CarouselItem = ({carouselItem}) => {
    return (
        <Card className="carouselItem">
            <img className="carouselItem-media" src={carouselItem.image}/>
        </Card>
    );
};

export default CarouselItem;
//