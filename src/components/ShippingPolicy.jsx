import React from "react";

const ShippingPolicy = () => {
  return (
    <main
  
      className=" py-14 bg-[#f7f3ee]"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* CARD */}
        <div className=" shadow-sm rounded-2xl p-8 border border-gray-100 bg-[#f7f3ee]">
          
          {/* Title */}
          <h1 className="text-3xl font-semibold text-[#9c7d50] mb-6">
            Shipping Policy
          </h1>

          {/* Content */}
          <div className="space-y-4  leading-relaxed bg-[#f7f3ee] text-[#858585]">

            <p className="font-semibold text-[#9c7d50]">Order Processing:</p>
            <p>
              We strive to fulfil orders as soon as you place them. In most
              cases, your order will be sent to our delivery partner within
              1–2 business days. Our business days are Monday–Saturday.
            </p>

            <p className="font-semibold text-[#9c7d50]">Shipping Rates:</p>

            <p>
              <span className="font-semibold text-[#9c7d50]">Free Shipping:</span>{" "}
              We charge no shipping charges on all Pre-paid orders.
            </p>

            <p>
              <span className="font-semibold text-[#9c7d50]">
                COD Convenience Fee:
              </span>{" "}
              We charge a nominal additional Cash on Delivery fee as per the
              cart value.
            </p>

            <p>
              Please note that for orders above ₹5000, we recommend prepaid
              payments for faster processing and improved order accuracy. COD is
              not available for orders above ₹5000.
            </p>

            <p className="font-semibold text-[#9c7d50]">Shipping Time:</p>

            <p>
              For most serviceable pin codes, delivery takes up to 7 days.
              However, delays may occur due to weather, strikes, remote
              locations, stocking issues or other unforeseen circumstances.
              After dispatch, a tracking link will be shared via SMS/Email.
            </p>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ShippingPolicy;
