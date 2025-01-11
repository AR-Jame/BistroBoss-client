import { useContext, useEffect, useRef, useState } from 'react';
import bg from '../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const [validCaptcha, setValidCaptcha] = useState(false)
    const captchaRef = useRef(null)
    useEffect(() => {
        loadCaptchaEnginge(6, 'transparent');
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(() => {
                Swal.fire({
                    title: "Thanks",
                    text: "You successfully log in",
                    icon: "success"
                });
                navigate(location.state ? location.state : '/');
            }).catch((err) => {
                console.log(err);
            });

    }
    const handleGoogle = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    title: "Thanks",
                    text: "You successfully log in",
                    icon: "success"
                });
                navigate()
                navigate(location.state ? location.state : '/');
            }).catch((err) => {
                console.log(err);
            });

    }

    const handleCaptcha = () => {
        const value = captchaRef.current.value;
        console.log(value);
        if (validateCaptcha(value)) {
            setValidCaptcha(true)
        } else {
            setValidCaptcha(false)
        }
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
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Login</h1>

                    <form onSubmit={handleSubmit}>
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
                                placeholder="Enter your email"
                                name='email'
                                className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                            />
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
                                placeholder="Enter your password"
                                name='password'
                                className="mt-2 block w-full px-4 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>

                        {/* Captcha Input */}
                        <div className="mb-6">
                            <label className="block text-lg font-medium text-gray-700">
                                Captcha
                            </label>
                            <div className="flex items-center mt-2">
                                <div className="px-6 py-3 w-full text-lg border border-gray-300 bg-gray-100 rounded-md shadow-sm">
                                    <LoadCanvasTemplate />
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    name='captcha'
                                    ref={captchaRef}
                                    className="block mt-4 w-[60%] px-4 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                                />
                                <button type='button' onClick={handleCaptcha} className='bg-yellow-500 mt-4 flex-1 text-white px-3 rounded-md shadow-md hover:bg-yellow-600 focus:ring'>Submit captcha</button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`${validCaptcha ? '' : "btn-disabled btn"} w-full bg-yellow-500 text-white py-3 px-6 text-lg rounded-md shadow-md hover:bg-yellow-600 focus:ring focus:ring-yellow-300`}
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Create Account */}
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">
                            New here?{" "}
                            <Link to='/register' className="text-orange-500 font-medium">
                                Create a New Account
                            </Link>
                        </p>
                    </div>

                    {/* Social Login */}
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">Or sign in with</p>
                        <div className="flex justify-center mt-4 space-x-6">
                            <button onClick={handleGoogle} className="text-gray-500 border rounded-full btn p-4 hover:bg-transparent border-gray-500 hover:border-gray-700 hover:text-gray-700">
                                <FaGoogle />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;