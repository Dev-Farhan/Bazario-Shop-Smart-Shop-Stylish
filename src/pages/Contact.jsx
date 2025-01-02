import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { RiContactsBookFill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Contact Us", icon: RiContactsBookFill },
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 md:py-22 md:mx-20">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-3">
                <span className="w-[40px] h-[40px] bg-red-500 text-white flex items-center justify-center rounded-full text-xl">
                  <IoCallSharp />
                </span>
                <p className="font-semibold">Call To Us</p>
              </div>
              <p className="text-sm">We are available 24/7, 7 days a week.</p>
              <p className="text-sm">Phone: +8801611112222</p>
            </div>
            <hr className="border-t border-gray-300" />
            <div className="flex flex-col gap-4 items-start">
              <div className="flex items-center gap-3">
                <span className="w-[40px] h-[40px] bg-red-500 text-white flex items-center justify-center rounded-full text-xl">
                  <HiOutlineMail />
                </span>
                <p className="font-semibold">Write To Us</p>
              </div>
              <p className="text-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm">Emails: customer@exclusive.com</p>
              <p className="text-sm">Emails: support@exclusive.com</p>
            </div>
          </div>
          <hr className="md:hidden border-t border-gray-300" />

          {/* Contact Form */}
          <div>
            <form className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name *"
                className="bg-gray-100 rounded-md p-2 w-full"
              />
              {/* Email */}
              <input
                type="email"
                placeholder="Your Email *"
                className="bg-gray-100 rounded-md p-2 w-full"
              />
              {/* Phone */}
              <input
                type="text"
                placeholder="Your Phone *"
                className="bg-gray-100 rounded-md p-2 w-full"
              />
              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows="5"
                className="bg-gray-100 rounded-md p-2 w-full col-span-1 md:col-span-3"
              ></textarea>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 w-full col-span-1 md:col-end-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
