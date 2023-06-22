import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import img1 from '../../assets/signup.jpg'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";



const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSubmit = data => {
        //console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const savedUser = {name: data.name, email: data.email}
                        fetch('https://b7a12-summer-camp-server-side-hazel.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: 'User Created Updated',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                    navigate('/login');
                                }
                            })


                    })
                    .catch(err => console.log(err))
            })
    };

    return (
        <>
            <Helmet>
                <title>The Creativity Center | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 mt-10 mb-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-10">Sign Up now!</h1>
                        <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" className="input w-80 input-bordered" />
                                {errors.name && <span className="text-red-600">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" {...register("photoURL", { required: true })} className="input w-80 input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} className="input w-80 input-bordered" />
                                {errors.email && <span className="text-red-600">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} className="input w-80 input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password field is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one Uppercase and one special character.</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirm_password" {...register("confirm_password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} className="input w-80 input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password field is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one Uppercase and one special character.</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-neutral w-80" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <SocialLogin />
                        <p className="text-center pb-5"><small>Have an account!! <Link to="/login">Please Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;