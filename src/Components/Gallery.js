import React from 'react';
import image1 from '../Assets/Images/birth-balloons.jpg'
import image2 from '../Assets/Images/image2.jpg'
import image3 from '../Assets/Images/image3.jpg'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from 'react-material-ui-carousel'


const images = [
    {
        src: image1,
        alt: 'ברית',
    },
    {
        src: image2,
        alt: 'ימי הולדת',
    },
    {
        src: image3,
        alt: 'בריתה',
    },
];

function Gallery() {
    return (
        <Carousel animation={"slide"} >
            <CarouselItem>
                {images.map((image) => (
                    <img src={image.src} alt={image.alt} />
                ))}
            </CarouselItem>
        </Carousel>
    );
}

export default Gallery;
