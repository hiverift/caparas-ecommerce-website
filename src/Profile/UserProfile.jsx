import React, { useState } from "react";

export default function UserProfile() {
  const userEmail = localStorage.getItem("userEmail") || "guest@example.com";

  const [activeTab, setActiveTab] = useState("info");

  // Form States
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
  });

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    pincode: "",
    state: "",
    city: "",
    house: "",
    area: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  return (
    <div className="min-h-screen  px-4 py-8 bg-[#f7f3ee]">
      <div className="max-w-5xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-3xl font-bold text-[#9c7d50]  mb-6">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT MENU */}
          <div className="bg-[#f7f3ee] shadow p-5 rounded-xl h-fit">
            <h2 className="text-xl font-semibold mb-4  text-[#9c7d50] ">Account</h2>

            <ul className="space-y-3 text-gray-700">
              {["info", "address", "orders", "wishlist", "security"].map((tab) => (
                <li
                  key={tab}
                  className={`cursor-pointer  text-[#9c7d50] capitalize ${
                    activeTab === tab && "font-semibold text-black"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "info"
                    ? "Personal Info"
                    : tab === "address"
                    ? "Address Book"
                    : tab === "orders"
                    ? "My Orders"
                    : tab === "wishlist"
                    ? "Wishlist"
                    : "Security"}
                </li>
              ))}

              <li
                className="cursor-pointer text-red-600"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/";
                }}
              >
                Logout
              </li>
            </ul>
          </div>

          {/* RIGHT SECTION */}
          <div className="md:col-span-2 space-y-6">

            {/* --- PERSONAL INFO FORM --- */}
            {activeTab === "info" && (
              <div className="bg-white shadow p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

                <div className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input
                      type="text"
                      value={userEmail}
                      disabled
                      className="w-full p-3 rounded-lg border bg-gray-100 cursor-not-allowed"
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) =>
                        setProfile({ ...profile, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="w-full p-3 rounded-lg border"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-medium mb-1">Phone Number</label>
                    <input
                      type="number"
                      value={profile.phone}
                      onChange={(e) =>
                        setProfile({ ...profile, phone: e.target.value })
                      }
                      placeholder="Enter phone"
                      className="w-full p-3 rounded-lg border"
                    />
                  </div>

                  <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 mt-3">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* --- ADDRESS FORM --- */}
            {activeTab === "address" && (
              <div className="bg-white shadow p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Add / Edit Address</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    ["Full Name", "fullName"],
                    ["Phone Number", "phone"],
                    ["Pincode", "pincode"],
                    ["State", "state"],
                    ["City", "city"],
                    ["House No., Building", "house"],
                    ["Road Name, Area", "area"],
                  ].map(([label, key]) => (
                    <div key={key} className="col-span-1">
                      <label className="block font-medium mb-1">{label}</label>
                      <input
                        type="text"
                        value={address[key]}
                        onChange={(e) =>
                          setAddress({ ...address, [key]: e.target.value })
                        }
                        placeholder={`Enter ${label}`}
                        className="w-full p-3 rounded-lg border"
                      />
                    </div>
                  ))}
                </div>

                <button className="bg-amber-600 text-white px-5 py-3 rounded-lg hover:bg-amber-700 mt-4">
                  Save Address
                </button>
              </div>
            )}

            {/* --- ORDERS --- */}
            {activeTab === "orders" && (
              <div className="bg-white shadow p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">My Orders</h2>

                <p className="text-gray-600">No orders found.</p>

                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Start Shopping
                </button>
              </div>
            )}

            {/* --- WISHLIST --- */}
            {activeTab === "wishlist" && (
              <div className="bg-white shadow p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
                <p className="text-gray-600">Your wishlist is empty.</p>
              </div>
            )}

            {/* --- CHANGE PASSWORD --- */}
            {activeTab === "security" && (
              <div className="bg-white shadow p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Change Password</h2>

                <div className="space-y-4">
                  {[
                    ["Current Password", "current"],
                    ["New Password", "newPass"],
                    ["Confirm New Password", "confirm"],
                  ].map(([label, key]) => (
                    <div key={key}>
                      <label className="block font-medium mb-1">{label}</label>
                      <input
                        type="password"
                        value={passwords[key]}
                        onChange={(e) =>
                          setPasswords({ ...passwords, [key]: e.target.value })
                        }
                        className="w-full p-3 rounded-lg border"
                        placeholder={label}
                      />
                    </div>
                  ))}

                  <button className="mt-4 bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-700">
                    Update Password
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
