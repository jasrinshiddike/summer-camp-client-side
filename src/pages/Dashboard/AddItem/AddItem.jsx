import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {useForm} from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
     const { register, handleSubmit, reset } = useForm();
     const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
     const onSubmit = data => {
        //console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgRes =>{
            if(imgRes.success){
                const imgURL = imgRes.data.display_url;
                const {class_name, price, available_seats} = data;
                const classItem = {class_name, price: parseFloat(price), available_seats: parseInt(available_seats), email: user?.email, image: imgURL}
                //console.log(classItem);
                axiosSecure.post('/classes', classItem)
                .then(data =>{
                    console.log(data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire(
                            'Good job!',
                            'Added successfully!',
                            'success'
                          )
                    }
                })

            }
            console.log(imgRes);
        })
     }
    return (
        <div className="px-10">
            <Helmet>
                <title>The Creativity Center | Add a Class</title>
            </Helmet>
            <SectionTitle heading={"Add an Item"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" {...register("class_name", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="text" disabled defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email</span>
                    </label>
                    <input type="email" disabled defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seats*</span>
                    </label>
                    <input type="text" {...register("available_seats", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <input className="btn mt-5" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddItem;