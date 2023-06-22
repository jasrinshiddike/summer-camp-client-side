import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClassCart from "../../hooks/useSelectedClassCart";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const ClassList = ({item}) => {
    const { image, class_name, instructor_name, available_seats, price, _id } = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useSelectedClassCart();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const isButtonDisabled = isAdmin || isInstructor || available_seats === 0;
    const cardClassName = available_seats === 0 ? 'bg-red card w-96 bg-base-100 shadow-xl mt-10 mb-20' : 'card w-96 bg-base-100 shadow-xl mt-10 mb-20';
    const navigate = useNavigate();
    const location = useLocation();
    const handleSelectedClass = item =>{
        console.log(item);
        if(user && user.email){
            const selectedClass = {selectedClassId: _id, class_name, image, price, email: user.email}
            fetch('https://b7a12-summer-camp-server-side-hazel.vercel.app/selected-class',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your selected class has been added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })  
                }
                else{
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Please Login!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          navigate('/login', {state: {from: location}})
                        }
                      })
                }
            })
        }

    }
    return (
        <div className={cardClassName}>
            <figure><img src={image} className="h-[400px] w-[400px]" alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Class Name: {class_name}</h2>
                <p>Instructor Name: {instructor_name}</p>
                <p>Available Seats: {available_seats}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleSelectedClass(item)} disabled={isButtonDisabled} className="btn btn-neutral">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassList;