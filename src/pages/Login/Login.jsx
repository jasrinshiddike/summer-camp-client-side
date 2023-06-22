import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaEye } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import img1 from '../../assets/login.jpg'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const handleToggleVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        //event.preventDefault();
        //const form = event.target;
        //const email = form.email.value;
        //const password = form.password.value;
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset()
                Swal.fire('User Login Successful')
                navigate(from, { replace: true });
            })

    }
    return (
        <>
            <Helmet>
                <title>The Creativity Center | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 mt-10 mb-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-10">Login now!</h1>
                        <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input w-80 input-bordered" />
                                {errors.email && <span className="text-red-600 mt-5">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={passwordVisible ? 'text' : 'password'} onChange={(data) => setPassword(data.value)} {...register("password", { required: true })} name="password" placeholder="password" className="input w-80 input-bordered" />
                                <button type="button" onClick={handleToggleVisibility} className="-mt-14 ml-64 bg-blue-700 w-14">{passwordVisible ? 'Hide' : <FaEye />}</button>
                                {errors.password?.type === 'required' && <span className="text-red-600 mt-5">Password field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-neutral w-80" type="submit" value="Login" />
                            </div>
                        </form>
                        <SocialLogin />
                        <p className="text-center pb-5"><small>Are you new here!! <Link to="/signup">Create New Account</Link></small></p>  
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;