import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleAddRoleAsAdmin = user =>{
        fetch(`https://b7a12-summer-camp-server-side-hazel.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    title: `${user.name} is an admin`,
                    text: 'Successfully make admin',
                  })
            }
        })
    }

    const handleAddRoleAsInstructor = user =>{
        fetch(`https://b7a12-summer-camp-server-side-hazel.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    title: `${user.name} is an instructor`,
                    text: 'Successfully make instructor',
                  })
            }
        })
    }


    return (
        <div>
            <Helmet>
                <title>The Creativity Center | All Users</title>
            </Helmet>
            <h3 className="text-3xl font-bold">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' :
                                        <button title="Make Admin" onClick={() => handleAddRoleAsAdmin(user)} className="btn btn-ghost text-green-700 btn-lg"><FaUserShield /></button>   
                                    }
                                    {
                                        user.role === 'instructor' ? 'instructor' :
                                        <button title="Make Instructor" onClick={() => handleAddRoleAsInstructor(user)} className="btn btn-ghost text-green-700 btn-lg"><FaUserShield /></button>   
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;