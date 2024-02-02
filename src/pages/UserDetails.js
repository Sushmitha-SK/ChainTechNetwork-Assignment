import React, { useEffect, useState } from 'react';
import '../styles/UserDetails.css';
import userImage from '../assets/user.png';
import Navbar from '../components/Navbar';
import { getUserByID } from '../api/userApi';

const UserDetails = () => {


    const [userInformation, setUserInformation] = useState([])
    const userid = localStorage.getItem('userInfoID')

    const getUserDetails = async () => {
        try {
            const getUserData = await getUserByID(userid.replace(/["']/g, ''));
            setUserInformation(getUserData)
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        getUserDetails(userid)
    }, [userid])


    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="card p-3 py-4">
                            <div className="text-center">
                                <img src={userImage} width={100} className="rounded-circle" alt="User" />
                            </div>
                            <div className="text-center mt-3">
                                <div className="user-details">
                                    <p><strong>User ID:</strong> {userInformation.userId}</p>
                                    <p><strong>Name:</strong> {userInformation.firstName} {userInformation.lastName}</p>
                                    <p><strong>Username:</strong> {userInformation.username}</p>
                                    <p><strong>Email:</strong> {userInformation.email}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;
