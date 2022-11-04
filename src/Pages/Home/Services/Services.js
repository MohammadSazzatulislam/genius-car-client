import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);


  useEffect(() => {
    fetch("https://genius-car-server-eosin-three.vercel.app/servicess")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p className="text-lg  ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="flex flex-wrap py-6 gap-6">
        {services.map((card) => (
          <ServicesCard key={card._id} card={card}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
