import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularClassesCard from "./PopularClassesCard";
import useClassList from "../../../hooks/useClassList";

const PopularClasses = () => {
    const [classes] = useClassList();
    const sortedClasses = classes.sort((a, b) => b.total_student - a.total_student);
    const topClasses = sortedClasses.slice(0, 6);
    
    return (
        <section className="mx-20">
            <SectionTitle heading={"Popular Classes"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    topClasses.map(item => <PopularClassesCard
                        key={item._id}
                        item={item}
                    ></PopularClassesCard>)
                }
            </div>
            <button className="btn btn-outline mt-4 mb-10">View All Classes</button>
        </section>
    );
};

export default PopularClasses;