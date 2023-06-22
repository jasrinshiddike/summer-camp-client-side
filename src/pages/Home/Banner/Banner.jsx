import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/img9.jpg'
import banner2 from '../../../assets/banner/img10.jpg'
import banner3 from '../../../assets/banner/img11.jpg'
import banner4 from '../../../assets/banner/img12.jpg'
import banner5 from '../../../assets/banner/img13.jpg'
import banner6 from '../../../assets/banner/img14.jpg'

const Banner = () => {
    return (
        <div className="mb-20 mx-20 mt-10">
            <Carousel autoPlay autoFocus= {true} infiniteLoop={true}>
                <div className="relative w-full">
                    <img src={banner1} />
                    <div className=" absolute top-2 text-white  md:top-72 px-20 space-y-7 pl-16 w-1/2 font-bold">
                        <h2 className="md:text-3xl">Introducing some new techniques</h2>
                        <p className="md:font-2xl text-left"><small>The Summer camp is all about inspiring creativity in kids and adults of different ages. The Creativity center brings to you with different activities to keep you and your child entertained and engaged with DIY and recycle things that are around them.</small></p>
                    </div>
                </div>
                <div>
                    <img src={banner2} />
                    <div className=" absolute top-2 text-white  md:top-72 px-20 space-y-7 pl-16 w-1/2 font-bold">
                        <h2 className="md:text-3xl">Introducing some new techniques</h2>
                        <p className="md:font-2xl text-left"><small>The Summer camp is all about inspiring creativity in kids and adults of different ages. The Creativity center brings to you with different activities to keep you and your child entertained and engaged with DIY and recycle things that are around them.</small></p>
                    </div>
                </div>
                <div>
                    <img src={banner3} />
                    <div className=" absolute top-2 text-white  md:top-72 px-20 space-y-7 pl-16 w-1/2 font-bold">
                        <h2 className="md:text-3xl">Introducing some new techniques</h2>
                        <p className="md:font-2xl text-left"><small>The Summer camp is all about inspiring creativity in kids and adults of different ages. The Creativity center brings to you with different activities to keep you and your child entertained and engaged with DIY and recycle things that are around them.</small></p>
                    </div>
                </div>
                <div>
                    <img src={banner4} />
                    <div className=" absolute top-2 text-white  md:top-72 px-20 space-y-7 pl-16 w-1/2 font-bold">
                        <h2 className="md:text-3xl">Introducing some new techniques</h2>
                        <p className="md:font-2xl text-left"><small>The Summer camp is all about inspiring creativity in kids and adults of different ages. The Creativity center brings to you with different activities to keep you and your child entertained and engaged with DIY and recycle things that are around them.</small></p>
                    </div>
                </div>
                <div>
                    <img src={banner5} />
                    <div className=" absolute top-2 text-white  md:top-72 px-20 space-y-7 pl-16 w-1/2 font-bold">
                        <h2 className="md:text-3xl">Introducing some new techniques</h2>
                        <p className="md:font-2xl text-left"><small>The Summer camp is all about inspiring creativity in kids and adults of different ages. The Creativity center brings to you with different activities to keep you and your child entertained and engaged with DIY and recycle things that are around them.</small></p>
                    </div>
                </div>
                <div>
                    <img src={banner6} />
                    <div className=" absolute top-2 text-white  md:top-72 px-20 space-y-7 pl-16 w-1/2 font-bold">
                        <h2 className="md:text-3xl">Introducing some new techniques</h2>
                        <p className="md:font-2xl text-left"><small>The Summer camp is all about inspiring creativity in kids and adults of different ages. The Creativity center brings to you with different activities to keep you and your child entertained and engaged with DIY and recycle things that are around them.</small></p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;