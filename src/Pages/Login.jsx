import { useEffect } from 'react';
import bg from '../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    useEffect(() => {
        loadCaptchaEnginge(6, 'transparent');
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        console.log(captcha, name, password);
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
                                placeholder="Type here"
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
                            <input
                                type="text"
                                placeholder="Type here"
                                name='captcha'
                                className="mt-4 block w-full px-4 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-3 px-6 text-lg rounded-md shadow-md hover:bg-yellow-600 focus:ring focus:ring-yellow-300"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Create Account */}
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">
                            New here?{" "}
                            <a href="#" className="text-orange-500 font-medium">
                                Create a New Account
                            </a>
                        </p>
                    </div>

                    {/* Social Login */}
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">Or sign in with</p>
                        <div className="flex justify-center mt-4 space-x-6">
                            <button className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-facebook fa-3x"></i>
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-google fa-3x"></i>
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-github fa-3x"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;