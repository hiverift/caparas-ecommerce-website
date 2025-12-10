import React from "react";

const banner = {
  link: "https://zurl.co/WebsiteHomepageb2b",

  desktop:
    "https://www.earthstore.in/cdn/shop/files/bulk_gifting_queries_form_2_1905x.progressive.png.jpg?v=1735209144",

  mobile:
    "https://www.earthstore.in/cdn/shop/files/bulk_gifting_queries_form_2_550x.progressive.png.jpg?v=1735209144",
};

const BulkGiftingBanner = () => {
  return (
    <div className="w-full py-6">
      <a  className="block w-full">
        <div className="relative w-full" style={{ paddingTop: "50%" }}>
          {/* Desktop Image */}
          <img
            src={banner.desktop}
            alt="Bulk Gifting"
            className="absolute inset-0 w-full h-full object-cover hidden sm:block"
          />

          {/* Mobile Image */}
          <img
            src={banner.mobile}
            alt="Bulk Gifting Mobile"
            className="absolute inset-0 w-full h-full object-cover sm:hidden"
          />
        </div>
      </a>
    </div>
  );
};

export default BulkGiftingBanner;
