import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";


const MyClasses = () => {
    const { user } = useAuth();
    const [myAddedClasses, setMyAddedClasses] = useState([]);

    useEffect(() => {
        fetch(`https://b7a12-summer-camp-server-side-hazel.vercel.app/my-classes/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyAddedClasses(data);
            })
    }, [])


    return (
        <div>
            <Helmet>
                <title>The Creativity Center | My Classes</title>
            </Helmet>
            <SectionTitle heading={"My all added classes"}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAddedClasses.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.class_name}
                                </td>
                                <td>${item.price}</td>
                                <td>{item.available_seats}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">pending</button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost text-red-600 btn-lg"></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;