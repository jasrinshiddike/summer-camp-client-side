import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MyPaymentHistory = () => {
    const { user } = useAuth();
    const [myPaymentHistory, setMyPaymentHistory] = useState([]);

    useEffect(() => {
        fetch(`https://b7a12-summer-camp-server-side-hazel.vercel.app/payments/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyPaymentHistory(data);
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>The Creativity Center | My Classes</title>
            </Helmet>
            <SectionTitle heading={"My Payment History"}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Transaction Id</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPaymentHistory.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    {item.transactionId}
                                </td>
                                <td>{item.email}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">pending</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPaymentHistory;