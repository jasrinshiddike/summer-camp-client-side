import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import cover1 from "../../assets/gallary/slide9.jpg"
import useInstructorList from "../../hooks/useInstructorList";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import InstructorList from "./InstructorList";

const Instructors = () => {
    const [instructors] = useInstructorList();
    return (
        <div className="mx-24">
            <Helmet>
                <title>The Creativity Center | Instructors</title>
            </Helmet>
            <Cover img={cover1} title={"Our Instructors"}></Cover>
            <SectionTitle heading={"Our All Instructors"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    instructors.map(instructor => <InstructorList
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorList>)
                }
            </div>
        </div>
    );
};

export default Instructors;