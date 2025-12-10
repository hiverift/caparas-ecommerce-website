import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Pin,
  CreditCard,
  Heart,
} from "lucide-react";
import upi from "../assets/UPI_22.png";
import Visa from "../assets/Visa_22.webp";
import AME from "../assets/AMEx_22.png";
import PayTM from "../assets/PayTM_22.webp";
import Master from "../assets/Master_22.png";

// --- Your logo import ---
import Logo from "../assets/logo3.png"; // change to your logo path

const FooterTape = () => {
  return (
    <div className="w-full py-10 border-t border-gray-300 bg-[#f7f3ee] items-center md:pl-40 text-[#858585]">
      <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col lg:flex-row items-center gap-5">

          {/* Mobile Logo */}
          <div className="lg:hidden w-20 mx-auto">
            <img src={Logo} alt="logo" className="w-full" />
          </div>

          {/* Desktop Logo */}
          <div className="hidden lg:block w-16">
            <img src={Logo} alt="logo" className="w-full" />
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-[#9c7d50] text-sm">
              © 2024, The Earth Store
            </p>
            <p className="text-[#9c7d50] flex items-center justify-center lg:justify-start gap-1 text-sm">
              Hand Crafted with <Heart size={14} className="text-red-500" /> in India
            </p>
          </div>

          {/* Mobile Social Icons */}
          <div className="lg:hidden mt-5">
            <div className="flex justify-center gap-4">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Pin size={20} /></a>
              <a href="#"><Youtube size={22} /></a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
       <div className="flex justify-center items-center gap-4">
            <img src={upi} alt="UPI" className="w-10" />
            <img src={PayTM} alt="Paytm" className="w-10" />
            <img src={Visa} alt="Visa" className="w-10" />
            <img src={AME} alt="AMEX" className="w-10" />
            <img src={Master} alt="Mastercard" className="w-10" />
          </div>
        </div>

      </div>

  );
};

export default FooterTape;
