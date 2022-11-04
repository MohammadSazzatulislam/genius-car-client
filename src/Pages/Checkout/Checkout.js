import React, { useContext } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Checkout = () => {
  const { img, _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "usregistered";
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

 

    //  you must be validate email name phone

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="relative w-full mb-20 rounded-md">
        <div className="carusol-img">
          <img className="w-full h-80 rounded-md" src={img} alt="" />
        </div>
        <div className="absolute transform -translate-y-1/2 lg:left-28 md:left-12 left-6 right-5 top-1/2">
          <h1 className="text-3xl font-bold text-white">{title}</h1> <br />
          <h2 className="text-xl font-bold text-white">Price : ${price}</h2>
        </div>
        <div className="absolute flex justify-center transform lg:left-1/2 md:left-1/2 right-1/2 left-1/2  bottom-0">
          <button className="px-16 rounded-tl-full rounded-tr-full gap-2  py-3 flex items-center justify-center bg-orange-700 text-white font-semibold">
            <Link to="/">Home</Link>/<Link to="/checkout">CheckOut</Link>
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-10 mb-20 rounded-md"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            required
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input border-none input-primary w-full"
          />
          <input
            required
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input border-none input-primary w-full"
          />
          <input
            required
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input border-none input-primary w-full"
          />
          <input
            readOnly
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input border-none input-primary w-full"
          />
        </div>
        <textarea
          className="textarea textarea-primary border-none w-full mt-4"
          name="message"
          placeholder="Your Message"
        ></textarea>
        <input
          className="btn btn-danger w-full mt-4"
          type="submit"
          value="Confirm Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
