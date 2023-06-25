import React from "react";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [keywords, setKeywords] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (keywords.trim()) {
            navigate(`/products/${keywords}`)
        } else {
            navigate('/products')
        }
    }

    return (
        <form onSubmit={handleSearch} className="w-full sm:w-9/12 px-1 sm:px-4 py-1.5 flex justify-between items-center shadow-md bg-white rounded-sm overflow-hidden">
            <input value={keywords} onChange={e => setKeywords(e.target.value)} type="text" placeholder="Search for product, ..." className="text-sm flex-1 outline-none border-none placeholder-gray-500" />
            <button type="submit" className="text-primary-blue"><Search /></button>
        </form>
    )
}

export default SearchBar;