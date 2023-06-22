import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ExcitingGallary from "../ExcitingGallary/ExcitingGallary";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>The Creativity Center | Home</title>
            </Helmet>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <ExcitingGallary />
        </div>
    );
};

export default Home;