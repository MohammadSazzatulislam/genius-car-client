import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logimg from "../../assets/images/login/login.svg";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const [users, setUsers] = useState([]);

  const { signInUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(users);

    const email = users.email;
    const password = users.password;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        event.target.reset()
        console.log(user);
        
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const field = e.target.value;
    const updateUser = { ...users };
    updateUser[name] = field;
    setUsers(updateUser);
  };
  return (
    <div className="hero w-full  py-5">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img src={logimg} alt="" />
        </div>
        <div className="card rounded-md border border-gray-300 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl mt-5 font-bold text-center">Login</h1>
          <form onSubmit={handleSubmit} className="card-body">
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
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <div className=" text-center font-semibold mt-6">
              <p>Or Sign In With</p>
            </div>
            <div className=" flex justify-center items-center gap-3 mt-6">
              <Link>
                <button className="btn btn-outline btn-circle btn-primary">
                  <FaFacebookF></FaFacebookF>
                </button>
              </Link>
              <Link>
                <button className="btn btn-outline btn-circle btn-primary">
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
                Have an account
                <Link className="underline text-red-600" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
