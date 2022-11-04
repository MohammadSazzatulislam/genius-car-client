import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logimg from "../../assets/images/login/login.svg";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const SignUp = () => {

  const[users, setUsers] =useState([])

  const { createNewUser, googleSignIn } = useContext(AuthContext);
       const navigate = useNavigate();


  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(users);
    
    const name = users.name
    const email = users.email
    const password = users.password

    createNewUser(email, password)
    .then(result=>{
      const user = result.user
      event.target.reset()
      navigate('/login')
      console.log(user);
    }).catch(err=> console.log(err))

  };

  const handleChange = e => {
    const name = e.target.name
    const field = e.target.value
    const updateUser = { ...users }
    updateUser[name] = field 
    setUsers(updateUser)

  }
  const handleGoogle = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };



  return (
    <div className="hero w-full  py-5">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img src={logimg} alt="" />
        </div>
        <div className="card rounded-md border border-gray-300 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl mt-5 font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                onChange={handleChange}
                required
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={handleChange}
                required
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={handleChange}
                required
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
            <div className=" text-center font-semibold mt-6">
              <p>Or Sign Up With</p>
            </div>
            <div className=" flex justify-center items-center gap-3 mt-6">
              <Link>
                <button className="btn btn-outline btn-circle btn-primary">
                  <FaFacebookF></FaFacebookF>
                </button>
              </Link>
              <Link>
                <button
                  onClick={handleGoogle}
                  className="btn btn-outline btn-circle btn-primary"
                >
                  <FaGoogle></FaGoogle>
                </button>
              </Link>
              <Link>
                <button className="btn btn-outline btn-circle btn-primary">
                  <FaLinkedinIn></FaLinkedinIn>
                </button>
              </Link>
            </div>
            <div className=" font-semibold text-center mt-6">
              <p>
                Already Have an account
                <Link className="underline text-red-600" to="/login">
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
