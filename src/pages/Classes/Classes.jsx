import { Helmet } from "react-helmet-async";
import cover1 from '../../assets/banner/img6.jpg'
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useClassList from "../../hooks/useClassList";
import ClassList from "./ClassList";

const Classes = () => {
    const [classes] = useClassList();
    return (
        <div className="mx-24">
            <Helmet>
                <title>The Creativity Center | Classes</title>
            </Helmet>
            <Cover img={cover1} title={"Our Classes"}></Cover>
            <SectionTitle heading={"Our All Classes"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    classes.map(item => <ClassList
                        key={item._id}
                        item={item}
                    ></ClassList>)
                }
            </div>
        </div>
    );
};

export default Classes;