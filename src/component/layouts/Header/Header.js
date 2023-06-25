import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import { ShoppingCart } from "@mui/icons-material";

function Header() {
  return (
    <header className="bg-primary-green fixed top-0 py-2.5 w-full z-10">
      <div className="w-full sm:w-9/12 px-1 sm:px-4 m-auto flex justify-between items-center relative">
        <div className="flex items-center flex-1">
          <Link className="h-7 mr-1 sm:mr-4" to="/">
            <img
              draggable="false"
              className="h-full w-full object-contain"
              src={logo}
              alt="Flipkart Logo"
            />
          </Link>

          <SearchBar />
        </div>
        <div className="flex items-center justify-between ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative">
          <Link
            to="/login"
            className="px-3 sm:px-9 py-0.5 text-primary-blue bg-white border font-medium rounded-sm cursor-pointer"
          >
            Login
          </Link>
          <span className="userDropDown flex items-center text-white font-medium gap-1 cursor-pointer">
            <span></span>
          </span>

          <span
            className="moreDropDown hidden sm:flex items-center text-white font-medium gap-1 cursor-pointer"
          >
            More
            <span></span>
          </span>
          <Link
            to="/cart"
            className="flex items-center text-white font-medium gap-2 relative"
          >
            <span>
                <ShoppingCart />
            </span>
            <div className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">
              3
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
