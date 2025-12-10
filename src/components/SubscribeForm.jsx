import React from "react";

const SubscribeForm = () => {
  return (
    <div className="w-full bg-[#fffef7] py-12">
      <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10  text-[#d6c0b3]">

        {/* LEFT TEXT */}
        <div className="text-center lg:text-left  text-[#d6c0b3]">
          <h5 className=" text-xl font-semibold  text-[#d6c0b3]">
            FOR LATEST UPDATES
          </h5>
          <p className=" text-[#d6c0b3] mt-2 text-sm">
            Stay connected with us! Subscribe to our newsletter and be the first
            to know about exciting updates, exclusive offers, and more.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="flex justify-center lg:justify-end">
          <form className="flex flex-col lg:flex-row gap-3 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-300     px-4 py-1"
              required
            />
            <button className="bg-[#9c7d50] text-white px-6 py-2">
              SUBSCRIBE!
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SubscribeForm;
