import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
    return (
        <div className="flex items-center flex-col gap-2 m-6 ">
            <div className="w-52 h-44 mt-28">
                <img draggable="false" className="w-full h-full object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4O1HUt0_ChtMYtPNbR4suT2fiATfa09wxEQATRBdKcw&s" alt="Empty Cart" />
            </div>
            <span className="text-lg">Your cart is empty!</span>
            <p className="text-xs">Add items to it now.</p>
            <Link to="/products" className="bg-primary-blue text-sm text-white px-12 py-2 rounded-sm shadow mt-3">Shop Now</Link>
        </div>
    );
}

export default EmptyCart;