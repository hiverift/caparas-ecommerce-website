import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="py-14 bg-[#f7f3ee]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="shadow-sm rounded-2xl p-8 border border-gray-100 bg-[#f7f3ee]">

          {/* Title */}
          <h1 className="text-3xl font-semibold text-[#9c7d50] mb-6">
            Privacy Policy
          </h1>

          {/* Content */}
          <div className="space-y-5 text-[#858585] leading-relaxed">

            <p>
              <strong>
                This Privacy Policy describes how your personal information is
                collected, used, and shared when you visit or make a purchase
                from earthstore.in (the “Site”).
              </strong>
            </p>

            <p className="font-semibold text-[#9c7d50]">
              Personal Information We Collect
            </p>

            <p>
              When you visit the Site, we automatically collect information about
              your device, including your web browser, IP address, time zone, and
              cookies installed on your device. As you browse, we collect
              information about the pages you view, referring websites, and how
              you interact with the Site. This is called “Device Information”.
            </p>

            <p>We collect Device Information using the following technologies:</p>

            <p>
              - <strong>Cookies</strong>: Data files placed on your device to
              identify you. Learn more at{" "}
              <a
                href="http://www.allaboutcookies.org"
                className="text-[#9c7d50] underline"
              >
                allaboutcookies.org
              </a>
              .
            </p>

            <p>
              - <strong>Log Files</strong>: Track actions on the Site and collect
              IP address, browser type, ISP, referring pages, and timestamps.
            </p>

            <p>
              - <strong>Web Beacons, Tags & Pixels</strong>: Electronic files
              used to record how you browse the Site.
            </p>

            <p>
              When you make or attempt to make a purchase, we collect “Order
              Information” including name, billing address, shipping address,
              payment details, email, and phone number.
            </p>

            <p>
              “Personal Information” in this policy includes both Device
              Information and Order Information.
            </p>

            <h3 className="text-xl font-semibold text-[#9c7d50]">
              How do we use your personal information?
            </h3>

            <p>
              We use Order Information to process orders, payments, shipping,
              invoices, and confirmations. Additionally, we use it to:
            </p>

            <p>- Communicate with you</p>
            <p>- Screen for risk or fraud</p>
            <p>
              - Provide information or advertising based on your preferences
            </p>

            <p>
              Device Information helps us detect fraud (especially via IP
              address) and improve our Site performance, analytics, and ad
              campaigns.
            </p>

            <h3 className="text-xl font-semibold text-[#9c7d50]">
              Sharing your personal information
            </h3>

            <p>
              We share your Personal Information with third parties to help us
              use it, as described above.
            </p>

            <p>
              For example, we use Shopify to power our store. Read more here:{" "}
              <a
                href="https://www.shopify.com/legal/privacy"
                className="text-[#9c7d50] underline"
              >
                Shopify Privacy Policy
              </a>
              .
            </p>

            <p>
              We also use Google Analytics:{" "}
              <a
                href="https://www.google.com/intl/en/policies/privacy/"
                className="text-[#9c7d50] underline"
              >
                Google Privacy Policy
              </a>
              .
              <br />
              Opt out:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-[#9c7d50] underline"
              >
                GA Opt-Out
              </a>
            </p>

            <p>
              We may also share information to comply with legal requirements
              such as subpoenas or lawful requests.
            </p>

            <h3 className="text-xl font-semibold text-[#9c7d50]">
              Behavioural Advertising
            </h3>

            <p>
              We use Personal Information to provide targeted ads or marketing
              communication.
            </p>

            <p>Opt-out options:</p>

            <p>
              - Facebook:{" "}
              <a
                href="https://www.facebook.com/settings/?tab=ads"
                className="text-[#9c7d50] underline"
              >
                facebook.com/settings/?tab=ads
              </a>
            </p>
            <p>- Google: google.com/settings/ads/anonymous</p>
            <p>
              - Bing:{" "}
              <a
                href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
                className="text-[#9c7d50] underline"
              >
                Bing Personalized Ads
              </a>
            </p>

            <p>
              Additional opt-out portal:{" "}
              <a
                href="http://optout.aboutads.info/"
                className="text-[#9c7d50] underline"
              >
                optout.aboutads.info
              </a>
            </p>

            <h3 className="text-xl font-semibold text-[#9c7d50]">Do Not Track</h3>

            <p>
              We do not modify our data collection practices when receiving a Do
              Not Track signal from your browser.
            </p>

            <h3 className="text-xl font-semibold text-[#9c7d50]">Your Rights</h3>

            <p>
              European residents may request access, correction, updating, or
              deletion of their personal information.
            </p>

            <p>
              Your information may be transferred outside Europe, including to
              Canada and the USA.
            </p>

            <h3 className="text-xl font-semibold text-[#9c7d50]">Data Retention</h3>

            <p>
              We keep Order Information unless you request deletion.
            </p>

            <h3 className="text-xl font-semibold text-[#9c7d50]">Changes</h3>

            <p>
              We may update this policy to reflect changes in operations, legal
              requirements, or regulations.
            </p>

            <h3 className="text-xl font-semibold text-[#9c7d50]">Minors</h3>

            <p>The Site is not intended for individuals under age 14.</p>

            <h3 className="text-xl font-semibold text-[#9c7d50]">Contact Us</h3>

            <p>
              For more information or complaints, email us at:{" "}
              <a
                href="mailto:info@earthstore.in"
                className="text-[#9c7d50] underline"
              >
                info@earthstore.in
              </a>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
