import React from "react";
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div className="w-[200px] h-[200px] flex flex-col items-center justify-center">
      <div className="w-[50px] h-[50px] bg-black text-white rounded-full flex items-center justify-center text-3xl border-4 border-gray-400">
        <Icon />
      </div>
      <h3 className="text-sm mt-3">{title}</h3>
      <p className="text-[10px]">{description}</p>
    </div>
  );
};

const Service = () => {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-20">
        <ServiceCard
          Icon={TbTruckDelivery}
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
        />
        <ServiceCard
          Icon={TfiHeadphoneAlt}
          title="24/7 CUSTOMER SERVICE"
          description="Friendly 24/7 customer support"
        />
        <ServiceCard
          Icon={SiAdguard}
          title="MONEY BACK GUARANTEE"
          description="We return money within 30 days"
        />
      </div>
    </div>
  );
};

export default Service;
