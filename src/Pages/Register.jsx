import { Link, useNavigate } from "react-router-dom";
import bg from '../assets/others/authentication2.png'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                console.log(result);
                Swal.fire({
                    title: "Thanks",
                    text: "You Successfully join with us",
                    icon: "success"
                });
                updateUser(data.name, data.photo)
                .then(() => {
                    console.log('user Updated');
                }).catch((err) => {
                    console.log(err);
                });
                navigate('/')
                reset();
            }).catch((err) => {
                console.log(err);
            });
    }

    const googleSignUp = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    title: "Thanks",
                    text: "You successfully log in",
                    icon: "success"
                });
                navigate('/')
            }).catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className={`min-h-screen flex items-center justify-center bg-loginBg`}>
            <div className="shadow-lg rounded-lg flex w-4/5 max-w-6xl">
                {/* Left Image Section */}
                <div className="w-1/2 p-10 flex items-center justify-center">
                    <img
                        src={bg}
                        className="rounded-lg w-full"
                    />
                </div>

                {/* Right Form Section */}
                <div className="w-1/2 p-16">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Sign Up</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Input */}
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-lg font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="Enter your name"
                                {...register('name')}
                                className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>
                        {/* Photo URL Input */}
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-lg font-medium text-gray-700"
                            >
                                Photo URL
                            </label>
                            <input
                                type="text"
                                id="photo"
                                required
                                placeholder="Enter your Photo URL"
                                {...register('photo')}
                                className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>
                        {/* Email Input */}
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-lg font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="Enter your email"
                                {...register('email', { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                            />
                            {errors.email && <p className="text-red-600">Inter a valid Email</p>}
                        </div>

                        {/* Password Input */}
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-lg font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                required
                                placeholder="Enter your password"
                                {...register('password', { minLength: 6 })}
                                className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                            />
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Your password must have at least six char</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`w-full bg-yellow-500 text-white py-3 px-6 text-lg rounded-md shadow-md hover:bg-yellow-600 focus:ring focus:ring-yellow-300`}
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Create Account */}
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">
                            Already sign Up?{" "}
                            <Link to='/login' className="text-orange-500 font-medium">
                                Go to login
                            </Link>
                        </p>
                    </div>

                    {/* Social Login */}
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">Or sign in with</p>
                        <div className="flex justify-center mt-4 space-x-6">
                            <button onClick={googleSignUp} className="text-gray-500 border rounded-full btn p-4 hover:bg-transparent border-gray-500 hover:border-gray-700 hover:text-gray-700">
                                <FaGoogle />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;