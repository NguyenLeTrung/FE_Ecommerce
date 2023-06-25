import React from "react";
import { Discount } from "../../../utils/functions";
import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Product({ props }) {
    const { _id, name, images, ratings, numOfReviews, prices, cuttedPrice} = props

    return (
        <div className="flex flex-col items-center gap-2 px-2 py-6 relative">
            <Link to={`/products/${_id}`} className="flex flex-col items-center text-center group">
                <div className="w-36 h-36">
                    <img draggable="false" className="w-full h-full object-contain" src={images[0].url} alt={name} />
                </div>
                <h2 className="text-sm mt-4 group-hover:text-primary-blue">{name.length > 50  ? `${name.substring(0,50)}...` : name}</h2>
            </Link>

            <div className="flex flex-col gap-2 items-center">
                <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">
                    <span className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">
                        {ratings.toFixed(1)} <Star sx={{ fontSize: "14px" }}/>
                    </span>
                    <span>
                        ({numOfReviews.toLocaleString()})
                    </span>
                </span>

                <div className="flex items-center gap-1.5 text-md font-medium">
                    <span>VNĐ {prices.toLocaleString()}</span>
                    <span className="text-gray-500 line-through text-xs">VNĐ {cuttedPrice.toLocaleString()}</span>
                    <span className="text-xs text-primary-green">{Discount(prices, cuttedPrice)}%&npsp;off</span>
                </div>
            </div>
        </div>
    );
}

export default Product;