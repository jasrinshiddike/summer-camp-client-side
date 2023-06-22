import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import slide1 from '../../../assets/gallary/slide1.jpg'
import slide2 from '../../../assets/gallary/slide2.jpg'
import slide3 from '../../../assets/gallary/slide3.jpg'
import slide4 from '../../../assets/gallary/slide4.jpg'
import slide5 from '../../../assets/gallary/slide5.jpg'
import slide6 from '../../../assets/gallary/slide6.jpg'
import slide7 from '../../../assets/gallary/slide7.jpg'
import slide8 from '../../../assets/gallary/slide8.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";



const ExcitingGallary = () => {
    return (

        <section className="mx-20">
            <SectionTitle heading={"Exciting Courses"}></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-center text-white text-xl uppercase -mt-20">Paper Crafting</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-center text-white text-xl uppercase -mt-20">Egg Painting</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-center text-white text-xl uppercase -mt-20">Fluid Art</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-center text-white text-xl uppercase -mt-20">Doodle Art</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-center text-white text-xl uppercase -mt-20">Dot Art</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="" />
                    <h3 className="text-center text-white text-xl uppercase -mt-20">Tie & Die</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide7} alt="" />
                    <h3 className="text-center text-white text-xl uppercase -mt-20">Paper Crafting</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide8} alt="" />
                    <h3 className="text-center text-white text-xl uppercase -mt-20">Acrylic Painting</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default ExcitingGallary;