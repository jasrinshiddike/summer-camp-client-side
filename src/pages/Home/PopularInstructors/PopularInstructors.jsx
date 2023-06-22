import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularInstructorsCard from "./PopularInstructorsCard";
import useInstructorList from "../../../hooks/useInstructorList";

const PopularInstructors = () => {
    const [instructors] = useInstructorList();
    const sortedInstructors = instructors.sort((a, b) => b.total_student - a.total_student);
    const topInstructors = sortedInstructors.slice(0, 6);

    return (
        <div>
            <section className="mx-20">
            <SectionTitle heading={"Popular Instructors"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    topInstructors.map(instructor => <PopularInstructorsCard
                        key={instructor._id}
                        instructor={instructor}
                    ></PopularInstructorsCard>)
                }
            </div>
            <button className="btn btn-outline mt-4 mb-10">See All Instructors</button>
        </section>
        </div>
    );
};

export default PopularInstructors;