import React, { useEffect, useState } from "react";

const OrdersRow = ({ order, handleDelete, handleStatus }) => {
  const { _id, serviceName, customer, price, phone, service, status } = order;

  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/servicess/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr>
      <tr>
        <th>
          <label>
            <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
              X
            </button>
          </label>
        </th>
      </tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>Purple</td>
      <th>
        <button
          onClick={() => handleStatus(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? <p className="text-green-500">{status}</p> : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrdersRow;
