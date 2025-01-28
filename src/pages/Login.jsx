import { Link } from "react-router-dom";
import SocialLogin from "../components/shared/SocialLogin";
import Lottie from 'lottie-react';
import loginAnimation from '../assets/login.json';

const Login = () => {
    return (
        <div className="w-full h-full grid md:grid-cols-2 justify-center items-center">
            <Lottie animationData={loginAnimation} className="hidden md:block"></Lottie>
            <div className="card bg-base-100 w-full max-w-lg rounded-2xl shrink-0 shadow-md border border-gray-100 p-5">
                <h2 className="text-center text-2xl font-semibold py-5">Login your account</h2>

                <div className="divider py-0 m-0 px-10"></div>
                <form className="px-10 py-5 grid gap-2">
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Email" className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" required />
                    </div>
                    <div className="form-control">
                        <label className="label block">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Password" className="placeholder:text-gray-900 input w-full rounded-none outline-none border-none bg-gray-100" required />
                        <label className="label mt-4">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-4">
                        <button className="btn btn-accent rounded-none w-full">Login</button>
                    </div>
                    <div className="py-2">
                        <p className="text-center">Dont’t Have An Account ? <Link to={'/register'} className="text-accent font-semibold hover:underline">Register</Link></p>
                    </div>
                    <div className="divider">OR</div>
                </form>
                <SocialLogin></SocialLogin>


            </div>
        </div>
    );
};

export default Login;