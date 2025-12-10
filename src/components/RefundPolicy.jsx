import React from "react";

const RefundPolicy = () => {
  return (
    <main className="py-14 bg-[#f7f3ee]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="shadow-sm rounded-2xl p-8 border border-gray-100 bg-[#f7f3ee]">

          {/* Title */}
          <h1 className="text-3xl font-semibold text-[#9c7d50] mb-6">
            Refund Policy
          </h1>

          {/* Content */}
          <div className="space-y-5 text-[#858585] leading-relaxed">

            <p className="font-semibold text-[#9c7d50]">
              Return and Refund Policy for The Earth Store
            </p>

            <p><strong>Last Updated: May 09, 2024</strong></p>

            <p>
              Welcome to The Earth Store! We value your satisfaction and strive
              to ensure you have a pleasant shopping experience. If you are not
              entirely satisfied with your purchase, please review our return
              and refund policy below.
            </p>

            <hr className="border-gray-300" />

            <h3 className="text-xl font-semibold text-[#9c7d50]">
              General Return and Refund Policy
            </h3>

            <p className="font-semibold text-[#9c7d50]">Eligibility for Returns:</p>

            <p>Your order is eligible for return or replacement if:</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Incorrect Product Delivered:</strong> Product doesn’t
                match the description or wrong item delivered.
              </li>
              <li>
                <strong>Quality or Manufacturing Defect:</strong> Product has
                damage or manufacturing issues.
              </li>
            </ol>

            <p className="font-semibold text-[#9c7d50]">Non-Returnable Items:</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Handmade product variations (minor color, size, shape changes).</li>
              <li>No returns based on personal preferences; samples recommended.</li>
              <li>Gift cards</li>
              <li>Downloadable software products</li>
              <li>Some health & personal care items</li>
            </ol>

            <p className="font-semibold text-[#9c7d50]">Return Process:</p>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                Email us at{" "}
                <a
                  href="mailto:care@earthstore.in"
                  className="text-[#9c7d50] underline"
                >
                  care@earthstore.in
                </a>{" "}
                within 48 hours of delivery with:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Order number</li>
                  <li>Delivery address</li>
                  <li>Issue details with images/videos if defective</li>
                </ul>
              </li>

              <li>
                If package is tampered, do not accept it. Return to delivery
                person before signing.
              </li>

              <li>
                Items must be unused, with tags, and in original packaging.
                Return to:
                <p className="pl-4 mt-2">
                  <strong>Attn: Returns</strong><br />
                  The Earth Store, SCF 35, Sector 11D, Shopping Center,<br />
                  Faridabad, Haryana 121006, India
                </p>
              </li>
            </ol>

            <p>We cannot consider requests sent after 48 hours.</p>

            <p className="font-semibold text-[#9c7d50]">Refunds / Replacements:</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>
                If defect is genuine, replacement or refund will be initiated
                within 7–10 working days after inspection.
              </li>
              <li>
                If replacement unavailable, refund will be processed in 7–10
                days. COD refunds are given as credit coupons only.
              </li>
              <li>
                Return shipping cost is covered by us only for defects or wrong
                shipments.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-[#9c7d50]">
              Bulk Buyers / B2B Customers
            </h3>

            <p className="font-semibold text-[#9c7d50]">Sample Orders:</p>
            <p>
              Single sample purchases allowed before bulk order to check quality.
            </p>

            <p className="font-semibold text-[#9c7d50]">Return Policy:</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Return within 7 days.</li>
              <li>Items must be in original packaging.</li>
              <li>Return shipping paid by buyer.</li>
              <li>15% restocking fee applies.</li>
              <li>Custom orders non-returnable.</li>
              <li>
                Refunds processed within 14 days after inspection of returned
                items.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-[#9c7d50]">Contact Us</h3>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Phone:</strong> +91 95605 67666 (Mon–Fri, 10 AM–4 PM)
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:care@earthstore.in"
                  className="text-[#9c7d50] underline"
                >
                  care@earthstore.in
                </a>
              </li>
            </ul>

            <p>Thank you for shopping with The Earth Store!</p>

            <hr className="border-gray-300" />

            <p>
              <strong>Note:</strong> This policy is subject to change anytime.
              Please check periodically for updates.
            </p>

          </div>
        </div>
      </div>
    </main>
  );
};

export default RefundPolicy;
