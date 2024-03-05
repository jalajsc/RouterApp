import React from "react";

function Contact() {
  return (
    <div className="w-full">
      <div className="md:w-1/2 lg:flex flex-col md:flex-row  mx-auto my-36">
        <div className="w-80 bg-gray-300 flex flex-col text-gray-600 rounded-xl m-2 justify-center pl-2">
          <h1 className="text-3xl text-black font-bold text-center">
            Get in touch:
          </h1>
          <p className="text-xl mb-3">Fill the form to start conversation</p>
          <p className="text-l flex text-center">
            <img
              className="mr-3"
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/address--v1.png"
              alt="address--v1"
            />{" "}
            A-203, New Delhi, India
          </p>
          <p className="text-l flex">
            <img
              className="mr-3"
              width="26"
              height="26"
              src="https://img.icons8.com/windows/32/phone.png"
              alt="phone"
            />{" "}
            +91 12304723
          </p>
          <p className="text-l flex">
            <img
              className="mr-3"
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/new-post--v1.png"
              alt="new-post--v1"
            />{" "}
            jalajsc@gmail.com
          </p>
        </div>
        <div className="w-80 bg-white  rounded-xl m-2 ">
          <form className="flex flex-col justify-center">
            <input
              name="name"
              type="text"
              className="w-50 h-10 border-2 rounded-lg m-2 outline-none border-gray-400"
              placeholder="Full Name"
            />
            <input
              name="email"
              type="text"
              className="w-50 h-10 border-2 rounded-lg m-2 outline-none border-gray-400"
              placeholder="Email Address"
            />
            <input
              name="number"
              type="text"
              className="w-50 h-10 border-2 rounded-lg m-2 outline-none border-gray-400"
              placeholder="Phone Number"
            />
            <button
              type="submit"
              className="w-36 bg-orange-500 py-2 px-4 text-white rounded-lg m-2 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
