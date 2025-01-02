import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { BiDollarCircle } from "react-icons/bi";
import { IoBagHandleSharp } from "react-icons/io5";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "About Us", icon: FaUserAlt },
  ];

  const stats = [
    {
      icon: <AiOutlineShop />,
      value: "10.5k",
      label: "Sellers active on our site",
    },
    {
      icon: <BiDollarCircle />,
      value: "33k",
      label: "Monthly product sale",
    },
    {
      icon: <IoBagHandleSharp />,
      value: "45.5k",
      label: "Customer active on our site",
    },
    {
      icon: <RiMoneyDollarBoxLine />,
      value: "25k",
      label: "Annual gross sale on our site",
    },
  ];

  const teamMembers = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      imgSrc: "/src/assets/about1.png",
    },
    {
      name: "Scarlett Johansson",
      role: "Chief Marketing Officer",
      imgSrc: "/src/assets/about2.png",
    },
    {
      name: "Robert Downey Jr.",
      role: "Chief Technical Officer",
      imgSrc: "/src/assets/about3.png",
    },
  ];

  return (
    <>
      <div className="p-4">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex flex-col gap-4 md:flex-row w-full">
          {/* Left Content */}
          <div className="py-3 md:w-1/2 flex flex-col items-start justify-center text-start md:px-28">
            <h1 className="text-2xl font-semibold pb-4 md:text-4xl">
              Our Story
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Launched in 2025, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
              <br />
              <br />
              Exclusive has more than 1 million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer goods to fashion.
            </p>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/src/assets/about.png"
              alt="About Us"
              className="w-full max-w-md md:max-w-full md:h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-32 md:flex-row gap-10 md:gap-20">
          {stats.map((stat, index) => (
            <article
              key={index}
              className="w-full max-w-[200px] h-[200px] border-2 rounded-md flex flex-col items-center justify-center gap-1  hover:bg-red-500 cursor-pointer"
            >
              <div
                className="w-[50px] h-[50px] bg-black text-white rounded-full flex items-center justify-center text-3xl border-4 border-gray-400"
                title={stat.label}
              >
                {stat.icon}
              </div>
              <h3 className="text-2xl font-semibold mt-3">{stat.value}</h3>
              <p className="text-xs text-center">{stat.label}</p>
            </article>
          ))}
        </div>
        <div className="w-full max-w-[1200px] mx-auto py-10">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".custom-pagination", // Attach to a custom element
            }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center gap-3 text-center">
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    className="w-full max-w-[300px] h-auto rounded-md"
                  />
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <div className="flex gap-4 text-lg text-gray-600 mb-6">
                    <button>
                      <FiTwitter />
                    </button>
                    <button>
                      <FiInstagram />
                    </button>
                    <button>
                      <FiLinkedin />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center mt-4"></div>
        </div>
      </div>
    </>
  );
};

export default About;
