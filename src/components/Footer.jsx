import React from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  PinIcon,
} from "lucide-react";

// --------------------------------------------------------
// LINKS OBJECT
// --------------------------------------------------------
const FOOTER_LINKS = {
  menu: [
    { label: "Decor", link: "/HomeDecore" },
    { label: "Drinkware", link: "/Drinkware" },
    { label: "Tableware", link: "/Tableware" },
    { label: "Home Essentials", link: "/Homeessentials" },
    { label: "Sale", link: "/Sales" },
    { label: "Combo", link: "/Combooffers" },
    { label: "Women Accessories", link: "/Womenaccessories" },
  ],

  support: [
    { label: "Shipping Policy", link: "/ShippingPolicy" },
    { label: "Refund Policy", link: "/RefundPolicy" },
    { label: "Privacy", link: "/PrivacyPolicy" },
    { label: "Terms of Service", link: "/TermsOfService" },
    { label: "Contact Us", link: "/ContactPage" },
    { label: "Track Your Order", link: "https://track.amazon.in/" },
    { label: "FAQs", link: "/FAQPage" },
    { label: "Blog", link: "/BlogCard" },
  ],

  social: [
    { label: "Facebook", link: "https://facebook.com/earthstoreindia", icon: <Facebook size={18} /> },
    { label: "Twitter", link: "https://twitter.com/EarthStoreIndia/", icon: <Twitter size={18} /> },
    { label: "Instagram", link: "https://www.instagram.com/theearthstoreindia/", icon: <Instagram size={18} /> },
    { label: "Pinterest", link: "https://in.pinterest.com/earthstoreindia/", icon: <PinIcon size={18} /> },
    { label: "Youtube", link: "https://www.youtube.com/channel/UCBSq7WXSr6y8YQ0k30REOPA", icon: <Youtube size={18} /> },
  ],
};

// --------------------------------------------------------
// FOOTER COMPONENT
// --------------------------------------------------------
const Footer = () => {
  return (
<footer className="py-12 bg-[#f7f3ee] flex justify-center items-center md:pl-40 ">
  <div className="w-full max-w-[1440px] mx-auto px-5 
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* Menu */}
    <div className="text-[#9c7d50] text-left">
      <h4 className="text-lg font-semibold mb-4 uppercase">Menu</h4>
      <ul className="space-y-2">
        {FOOTER_LINKS.menu.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="hover:text-blue-500">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Support */}
    <div className="text-[#9c7d50] text-left">
      <h4 className="text-lg font-semibold mb-4 uppercase">Support & Policies</h4>
      <ul className="space-y-2">
        {FOOTER_LINKS.support.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="hover:text-blue-500">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Help */}
    <div className="text-[#9c7d50] text-left">
      <h4 className="text-lg font-semibold mb-4 uppercase">Here to help</h4>

      <p className="text-sm mb-3">Have a question? You may find an answer in our FAQs.</p>

      <p className="flex items-center gap-2">
        <MessageCircle size={18} className="text-[#9c7d50]" />
        <a href="https://wa.me/919560567666" className="hover:text-blue-500">
          Click to chat
        </a>
      </p>

      <p className="mt-2 flex items-center gap-2">
        <Phone size={18} />
        +91 9953400015
      </p>

      <p className="mt-2 flex items-center gap-2">
        <Mail size={18} />
        <a href="mailto:care@earthstore.in" className="hover:text-blue-500">
          Send us an email
        </a>
      </p>

      <div className="mt-3 flex items-start gap-2 text-sm">
        <Clock size={18} />
        <div>
          <p>Mon–Fri: 10:00 am - 5:00 pm</p>
          <p>Sat: 11:00 am - 4:00 pm</p>
          <p>Sun: Not Available</p>
        </div>
      </div>
    </div>

    {/* Social */}
    <div className="text-[#9c7d50] text-left">
      <h4 className="text-lg font-semibold mb-4 uppercase">Follow us</h4>
      <ul className="space-y-2">
        {FOOTER_LINKS.social.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-500"
            >
              {item.icon}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

  </div>
</footer>
 


  );
};

export default Footer;
