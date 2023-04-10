import React from "react";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


const  CarouselItem = ({carouselItem}) => {
    return (
        <Card className={"carouselItem"}>
            <img className="carouselItem-media" src={carouselItem.image}/>
        </Card>
    );
};

export default CarouselItem;
//
