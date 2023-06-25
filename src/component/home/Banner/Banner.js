import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "../Banner/banner.css";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
import gadgetSale from "../../../assets/Banner/gadget-sale.jpg";
import kitchenSale from "../../../assets/Banner/kitchen-sale.jpg"
import fashionSale from "../../../assets/Banner/fashionsale.jpg";
import shoe from "../../../assets/Banner/banner-giay.png"

export const PreviousBtn = ({ className, onClick}) => {
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos />
        </div>
    )
}

export const NextBtn = ({ className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos />
        </div>
    )
}


const Banner = () => {
    const setting = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidestoScroll: 1,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />
    };

    const banners = [gadgetSale, kitchenSale, fashionSale, shoe]
    return (
        <>
            <section className="h-44 sm:h-72 w-full rounded-sm shadow relative overflow-hidden">
                <Slider {...setting}>
                    {banners.map((el, i) => (
                        <img draggable="false" className="h-44 sm:h-72 w-full object-cover" src={el} alt="banner" key={i} />
                    ))}
                </Slider>
            </section>
        </>
    );
}

export default Banner;