import React from "react";
import Slider from "react-slick";
import Products from "./Product";
import { NextBtn } from "../Banner/Banner";
import { PreviousBtn } from "../Banner/Banner";
import { Link } from "react-router-dom";
import { getRandomProducts } from "../../../utils/functions";
import { offerProducts } from "../../../utils/constans";

function DealSlide({ title }) {
    const setting  = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6, 
        slidestoScroll: 6,
        initialSlide: 1,
        swipe: false,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
        response: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidestoScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidestoScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidestoScroll: 1
                }
            }
        ]
    }

    return (
        <section className="bg-white w-full shadow overflow-hidden">
            <div className="flex px-6 py-3 justify-between items-center">
                <h1 className="text-xl font-medium">{title}</h1>
                <Link to="/products" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">
                    VIEW ALL
                </Link>
            </div>
            <hr />

            <Slider {...setting}>
                {getRandomProducts(offerProducts, 12).map((item, i) => (
                    <Products {...item} key={i} />
                ))}
            </Slider>
        </section>
    );
}

export default DealSlide;
