import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/userApi';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userInfo, setUserInfo] = useState([])
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const logindata = await loginUser(email, password)
      console.log('logindata', logindata)
      if (logindata.status === 200) {
        setUserInfo(logindata.data)

        localStorage.setItem('userInfoID', JSON.stringify(logindata.data.userId));
        localStorage.setItem('usertoken', JSON.stringify(logindata.data.token));
        toast.success('Logged in successfully');
        navigate('/userdetails')
      } else {
        toast.error("Invalid Credentials")
      }
    } catch (error) {
      console.log(error)
      toast.error('An error occurred while signing in. Please try again later.');
    }
  }

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
    if (e.target.checked) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
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
              <h2 className="text-center mb-4 text-md fs-3">Sign Into Your Account</h2>
              <form action="#">
                <div className="mb-3 form-box">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
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
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-secondary login-btn w-100 mb-3"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>

              {/* Register Link */}
              <p className="text-center register-test mt-3">
                Don't have an account?&nbsp;
                <Link to="/register" className="text-decoration-none">
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
