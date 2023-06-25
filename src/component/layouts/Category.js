import mobile from "../../assets/Category/phone.png";
import fashion from "../../assets/Category/fashion.png";
import electrics from "../../assets/Category/electronics.png";
import home from "../../assets/Category/home.png";
import travel from "../../assets/Category/travel.png";
import appliances from "../../assets/Category/appliances.png";
import furniture from "../../assets/Category/furniture.png";
import beauty from "../../assets/Category/beauty.png";
import grocery from "../../assets/Category/grocery.png";
import { Link } from "react-router-dom";

const catNav = [
    {
        name: "Mobiles",
        icon: mobile,
    },
    {
        name: "Fashion",
        icon: fashion,
    },
    {
        name: "Electronics",
        icon: electrics,
    },
    {
        name: "Home",
        icon: home,
    },
    {
        name: "Travel",
        icon: travel,
    },
    {
        name: "Appliances",
        icon: appliances,
    },
    {
        name: "Furniture",
        icon: furniture,
    },
    {
        name: "Beauty,Toys & more",
        icon: beauty,
    },
    {
        name: "Grocery",
        icon: grocery,
    },
]

const Categories = () => {
    return (
        <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">

            <div className="flex items-center justify-between mt-4">

                {catNav.map((item, i) => (
                    <Link to={`/products?category=${item.name}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
                        <div className="h-16 w-16">
                            <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name} />
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
                    </Link>
                ))}

            </div>
        </section>
    );
};


export default Categories;