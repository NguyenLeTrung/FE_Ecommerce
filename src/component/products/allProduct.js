import React from "react";
import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Discount } from "../../utils/functions";
import home from "../../assets/Category/home.png";

function Product() {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-2 px-4 py-6 relative hover:shadow-lg rounded-sm">
        {/* <!-- image & product title --> */}
        <Link
          to={`/product`}
          className="flex flex-col items-center text-center group"
        >
          <div className="w-44 h-48">
            <img
              draggable="false"
              className="w-full h-full object-contain"
              src={home}
              alt="Test"
            />
          </div>
          <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left">
            Test
          </h2>
        </Link>
        {/* <!-- image & product title --> */}

        {/* <!-- product description --> */}
        <div className="flex flex-col gap-2 items-">
          {/* <!-- price container --> */}
          <div className="flex items-center gap-1.5 text-md font-medium">
            <span>$ 35.000</span>
            <span className="text-red-500 line-through text-xs">
              $20.000
            </span>
            <span className="text-xs text-primary-green">
              10%&nbsp;off
            </span>
          </div>
          {/* <!-- price container --> */}
        </div>
        {/* <!-- product description --> */}
      </div>

    </>
  );
}

export default Product;
