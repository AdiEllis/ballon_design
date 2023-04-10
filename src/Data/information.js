import {v4 as uuidv4} from "uuid";
import image1 from '../Assets/Images/birth-balloons.jpg'
import image2 from '../Assets/Images/image2.jpg'
import image3 from '../Assets/Images/image3.jpg'
import CarouselItem from "../Components/CarouselItem";
import React from "react";

const information = {
    carouselItems: carouselItemsContent => carouselItemsContent.map((carouselItem, key) => ({
        key: uuidv4(),
        content: <CarouselItem key={key} carouselItem={carouselItem}/>
    })),

    carouselItemsContent: [
        {
            image: image1
        },
        {
            image: image2
        }, {
            image: image3,
        }]
}
export default information;
