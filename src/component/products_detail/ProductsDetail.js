import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { FlashOn } from "@mui/icons-material";
import { Star } from "@mui/icons-material";
import { LocalOffer } from "@mui/icons-material";
import { VerifiedUser } from "@mui/icons-material";
import { Cached } from "@mui/icons-material";
import { CurrencyBitcoin } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import MinCategory from "../layouts/MinCategory";
import MetaData from "../layouts/MetaData";
import home from "../../assets/Category/home.png";
import ProductSlider from "../home/ProductSlides/ProductSlides";
import { NextBtn } from "../home/Banner/Banner";
import { PreviousBtn } from "../home/Banner/Banner";

function ProductDetail() {

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
};

  return (
    <>
      <MetaData title={"Product Detail"} />
      <MinCategory />

      <main className="mt-12 sm:mt-0">
        <div className="w-full flex flex-col sm:flex-row bg-white sm:p-2 relative">
          <div className="w-full sm:w-2/5 sm:sticky top-16 sm:h-screen">
            <div className="flex flex-col gap-3 m-3">
              <div className="w-full h-full pb-6 border relative">
                <Slider {...settings}>
                  <img
                    draggable="false"
                    className="w-full h-96 object-contain"
                    src={home}
                    alt="Test"
                  />
                </Slider>
                <div className="absolute top-4 right-4 shadow-lg bg-white w-9 h-9 border flex items-center justify-center rounded-full">
                  <span className="text-red-500 cursor-pointer">
                    {" "}
                    <Favorite sx={{ fontSize: "18px" }} />{" "}
                  </span>
                </div>
              </div>

              <div className="w-full flex gap-3">
                <button className="p-3 w-1/2 flex items-center justify-center gap-2 text-white bg-primary-yellow rounded-sm shadow hover:shadow-lg uppercase">
                  <ShoppingCart /> {" "} Add to Cart
                </button>
                <button className="p-4 w-full flex items-center justify-center gap-2 text-white bg-red-600 cursor-not-allowed rounded-sm shadow hover:shadow-sm uppercase">
                  <FlashOn /> {" "} buy now
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 py-2 px-3">
            <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-xl">Test</h2>
                <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                    <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">3.5 <Star sx={{ fontSize: "12px" }} /></span>
                    <span>10 Reviews</span>
                </span>

                <span className="text-primary-green text-sm font-medium">
                    Special Price
                </span>
                <div className="flex items-baseline gap-2 text-3xl font-medium">
                    <span className="text-gray-800">$ 100.000.000</span>
                    <span className="text-base text-gray-500 line-through">$ 50.000</span>
                    <span className="text-base text-primary-green">30%&nbsp;off</span>
                </div>

                <span className="text-red-500 text-sm font-medium">Hurry, Only 10 left</span>

                <p className="text-sm font-medium">Available offers</p>
                <p className="text-sm flex items-center gap-1">
                  <span className="text-primary-lightGreen"><LocalOffer sx={{ fontSize: "20px"}} /></span>
                </p>

                <div className="flex gap-16 mt-4 items-center text-sm font-medium">
                  <p className="text-gray-500">Delivery</p>
                  <span>Delivery by 30/05/2023</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between">
                  <div className="flex gap-16 mt-4 mr-6 items-stretch text-sm">
                    <p className="text-gray-500 font-medium">Services</p>

                    <ul className="flex flex-col gap-2">
                      <li>
                        <p className="flex items-center gap-3"><span className="text-primary-blue"><VerifiedUser sx={{ fontSize: "18px"}} /></span>100 years</p>
                      </li>
                      <li>
                        <p className="flex items-center gap-3"><span className="text-primary-blue"><Cached sx={{ fontSize: "18px"}} /></span>7 Days Replacement Policy</p>
                      </li>
                      <li>
                        <p className="flex items-center gap-3"><span className="text-primary-blue"><CurrencyBitcoin sx={{ fontSize: "18px"}} /></span>Cash on Delivery avaliable</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-16 mt-4 items-center text-sm font-medium">
                  <p className="text-gray-500">Seller</p>
                  <Link className="font-medium text-primary-blue ml-3" to={"/"}>Home</Link>
                </div>

                <div className="flex flex-col sm:flex-row gap-1 sm:gap-14 mt-4 items-stretch text-sm">
                  <p className="text-gray-500 font-medium">Description</p>
                  <span>Loren is ....</span>
                </div>

                <div className="w-full mt-6 rounded-sm border flex flex-col">
                  <h1 className="px-6 py-4 border-b text-2xl font-medium">Product Description</h1>
                  <div className="p-6">
                    <p className="text-sm">Test</p>
                  </div>
                </div>

                <div className="w-full mt-4 pb-4 rounded-sm border flex flex-col">
                  <h1 className="px-6 py-4 border-b text-2xl font-medium">Specifications</h1>
                  <h1 className="px-6 py-3 text-lg">General</h1>

                  <div className="px-6 py-2 flex items-start text-sm">
                    <p className="text-gray-500">Test</p>
                    <p className="flex-1">Test ...........</p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <ProductSlider
            title={"Similar Products"}
            tagline={"Based on the category"}
          />
        </div>
      </main>
    </>
  );
}

export default ProductDetail;
