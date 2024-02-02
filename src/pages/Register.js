import React, { useState } from 'react';
import '../styles/Register.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api/userApi';

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleRegister = async () => {
        try {
            const registerData = await register(firstName, lastName, username, email, password);

            if (registerData) {
                console.log('Registration successful', registerData);
                toast.success('Registered successfully');
                navigate('/');
            } else {
                console.error('Failed to register. Data:', registerData);
                toast.error('Failed to register. Please try again.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error('An error occurred during registration. Please try again.');
        }
    };


    return (
        <>
            <div className="container">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <div className="row">
                    {/* Left Side Image */}

                    <div className="col-lg-6 left-side">

                    </div>

                    {/* Right Side Form */}
                    <div className="col-lg-6 d-flex align-items-center justify-content-center right-side">
                        <div className="form-2-wrapper">
                            <div className="logo text-center">
                                <p class="fs-6">Account Management App</p>
                            </div>
                            <h2 className="text-center mb-4 fs-3">Register Your Account</h2>
                            <form >
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="Enter Your First Name"
                                        required
                                        onChange={(e) => setFirstName(e.target.value)}
                                        value={firstName}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Enter Your Last Name"
                                        required
                                        onChange={(e) => setLastName(e.target.value)}
                                        value={lastName}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        placeholder="Enter Your Username"
                                        required
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                    />
                                </div>
                                <div className="mb-3 form-box">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Enter Your Password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-outline-secondary login-btn w-100 mb-3"
                                    onClick={handleRegister}
                                >
                                    Register
                                </button>
                            </form>

                            {/* Register Link */}
                            <p className="text-center register-test mt-3">
                                Already have an account?&nbsp;
                                <Link to="/" className="text-decoration-none">
                                    Sign In Here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
