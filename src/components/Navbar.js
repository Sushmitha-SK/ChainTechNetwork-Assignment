import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        toast.success('Logged out successfully');
        navigate('/')
    }

    return (
        <>
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
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/userdetails" className="navbar-brand text-white fw-bold">User Details</Link>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item text-white">
                                <p className="nav-link text-white fw-medium signout" onClick={handleLogout}>Sign Out</p>
                                {/* <Link to="/" className="nav-link text-white fw-medium">Sign Out</Link> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar