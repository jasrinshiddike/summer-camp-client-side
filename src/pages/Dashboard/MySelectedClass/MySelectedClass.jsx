import { Helmet } from "react-helmet-async";
import useSelectedClassCart from "../../../hooks/useSelectedClassCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
    const [selectedCart, refetch] = useSelectedClassCart();
    const total = selectedCart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://b7a12-summer-camp-server-side-hazel.vercel.app/selected-class/${item._id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }
    return (
        <div className="w-[700px]">
            <Helmet>
                <title>The Creativity Center | My Selected Class</title>
            </Helmet>
            <div className="flex justify-evenly items-center mt-20 mb-10">
                <h4>Total Items: {selectedCart.length}</h4>
                <h4 className="text-2xl">Total Price: ${total}</h4>
                <Link to="/dashboard/payment"><button className="btn btn-neutral btn-sm">PAY</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="border-spacing-1">
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedCart.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.class_name}
                            </td>
                            <td>${item.price}</td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost text-red-600 btn-lg"><FaTrashAlt /></button>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;