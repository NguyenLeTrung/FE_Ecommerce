import React from "react";
import Categories from "../layouts/Category";
import MetaData from "../layouts/MetaData";
import Banner from "./Banner/Banner";
import DealSlide from "./DealSlides/DealSlides";
import ProductSlider from "./ProductSlides/ProductSlides";

function Home() {
    return (
        <>
            <MetaData title="Home" />
            <Categories />
            <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
                <Banner />
                <DealSlide title={"Discount for You"}/>
                <ProductSlider title={"Suggested for you"} tagline={"Based on Your Activity"}/>
                <DealSlide title={"Top Brands, Best Price"}/>
                <ProductSlider title={"You May Also Like ..."} tagline={"Based on Your Interest"}/>
                <DealSlide title={"Top offers On"} />
                <ProductSlider title={"Don't Miss These!"} tagline={"Inspired by your order"} />
            </main>
        </>
    );
}

export default Home;