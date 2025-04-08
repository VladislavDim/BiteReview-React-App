import { useState } from "react";
import { Link } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import RegisterImage from "../assets/images/Register.png";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <section className="flex items-center justify-center min-h-screen bg-[#f8f8f8] px-4">
            <div className="flex items-stretch shadow-xl rounded-xl overflow-hidden" style={{ boxShadow: '0 12px 30px rgba(233, 118, 43, 0.35)' }}>
                
                {/* Image Box */}
                <div className="hidden md:block h-[580px] w-[480px]">
                    <img
                        src={RegisterImage}
                        alt="Register visual"
                        className="h-full w-full object-cover"
                        style={{ objectPosition: 'left 10%' }}
                    />
                </div>

                {/* Register Form */}
                <div className="w-[360px] bg-white p-10 min-h-[580px] flex flex-col justify-between">
                    <h2 className="text-2xl font-bold text-center text-[#E9762B]">Create your BiteReview account</h2>

                    <form className="flex-1 mt-6 mb-6 flex flex-col justify-center space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                required
                                className="w-full bg-transparent border-b-2 border-[#E9762B] text-gray-800 
                                           placeholder-gray-400 focus:outline-none focus:ring-1 
                                           focus:ring-orange-200 focus:border-[#E9762B] transition-all duration-300"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                required
                                className="w-full bg-transparent border-b-2 border-[#E9762B] text-gray-800 
                                           placeholder-gray-400 focus:outline-none focus:ring-1 
                                           focus:ring-orange-200 focus:border-[#E9762B] transition-all duration-300"
                            />
                        </div>

                        {/* Password */}
                        <PasswordInput id="password" label="Password" />

                        {/* Confirm Password */}
                        <PasswordInput id="confirmPassword" label="Confirm Password" />

                    </form>

                    {/* Footer */}
                    <div className="mt-6">

                        <SubmitButton>Register</SubmitButton>
                        
                        <p className="text-sm text-center text-gray-600 mt-4">
                            Already have an account?{' '}
                            <Link to="/login" className="text-orange-500 hover:underline font-medium">
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
