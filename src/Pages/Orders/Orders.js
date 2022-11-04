import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import OrdersRow from "./OrdersRow";

const Orders = () => {
  const { user, logOUtUser } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization : `Bearer ${localStorage.getItem('genius-token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403 ){
         return logOUtUser()
        }
        return res.json();
      })
      .then((data) => {

        setOrders(data)

      });
  }, [user?.email, logOUtUser]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/orders/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = orders.filter((ord) => ord._id !== _id);
        setOrders(remaining);
      })
      .catch((err) => console.log(err));
  };

  const handleStatus = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approval = orders.find((odr) => odr._id === id);
          approval.status = "Approved";
          const newOrders = [approval, ...remaining];
          setOrders(newOrders);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="relative w-full mb-20 rounded-md">
        <div className="carusol-img">
          <img
            className="w-full h-80 rounded-md"
            src="https://www.confused.com/-/media/confused/articles/buying/best-worst/man-looking-at-engine-final-tiny.jpg?la=en-gb&hash=9F2F1005193D98F43909098414436A66FF5CA4EC"
            alt=""
          />
        </div>
        <div className="absolute transform -translate-y-1/2 lg:left-28 md:left-12 left-6 right-5 top-1/2">
          <h1 className="text-3xl font-bold text-white">Orders</h1> <br />
          <Link to="/">
            <p className="text-orange-500 font-bold ">Home</p>
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full mb-20">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Service Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrdersRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatus={handleStatus}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
