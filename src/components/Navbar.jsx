import React, { useState, useEffect } from "react";
import { MeiliSearch } from "meilisearch";
import { useRef } from "react";
import { ChevronDown, Menu, X, Search, ShoppingBag, User } from "lucide-react";

import logo from "../assets/logo3.png";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

import BASE from "../config";

const Navbar = ({ onCartOpen }) => {
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const { totalQuantity } = useCart();
  const { searchProducts } = useSearch();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [loginDropdown, setLoginDropdown] = useState(false);

  // ⭐ SEARCH STATES
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("User");

  // profile close outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setLoginDropdown(false); // dropdown close
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${BASE.PRODUCT_BASE}/category/getAllCategory`);
        const data = await res.json();
        if (data.statusCode === 200) setCategories(data.result);
      } catch (error) {
        console.log("Category fetch error:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch Subcategories
  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const res = await fetch(
          `${BASE.PRODUCT_BASE}/subcategory/getAllSubCategory`
        );
        const data = await res.json();
        if (data.statusCode === 200) setSubcategories(data.result);
      } catch (error) {
        console.log("Subcategory fetch error:", error);
      }
    };
    fetchSubCategories();
  }, []);

  // ⭐ CHECK LOGIN
  useEffect(() => {
    const token =
      localStorage.getItem("token") || localStorage.getItem("accessToken");
    const email = localStorage.getItem("userEmail");

    if (token && email) {
      setLoggedIn(true);
      setUserEmail(email);
      const name = email.split("@")[0].replace(/[0-9]/g, "");
      setUserName(name.charAt(0).toUpperCase() + name.slice(1));
    }
  }, []);

  const logoutUser = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  };

  // ⭐ LIVE SEARCH USING BACKEND API
  const handleSearch = async (value) => {
    console.log("Searching:", value);
    console.log(
      `${BASE.PRODUCT_BASE}/product-detail/searchProducts?search=${value}`
    );

    setQuery(value);

    if (value.trim().length === 0) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(
        `${BASE.PRODUCT_BASE}/product-detail/searchProducts?search=${value}`
      );

      const data = await response.json();

      console.log("API JSON RESPONSE:", data);

      if (data.success === true && Array.isArray(data.data)) {
        setResults(data.data);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.log("Search API Error:", error);
      setResults([]);
    }
  };

  return (
    <>
      <header className="w-full bg-[#f7f4ed] shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-[1440px] px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <Link to="/">
            <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          </Link>

          {/* ⭐ DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8">
            {categories.map((cat, idx) => (
              <div
                key={cat._id}
                className="relative"
                onMouseEnter={() => setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-[15px] font-medium text-[#9c7d50] hover:text-black">
                  {cat.name}
                  <ChevronDown size={16} />
                </button>

                {openDropdown === idx && (
                  <div className="absolute bg-white w-52 shadow-lg rounded-md z-50">
                    <ul className="py-2">
                      {subcategories
                        .filter((sc) => sc.categoryId === cat._id)
                        .map((sc) => (
                          <li key={sc._id}>
                            <Link
                              to={`/subcategory/${sc._id}`}
                              className="block px-4 py-2 text-sm text-[#9c7d50] hover:bg-gray-100 hover:text-black"
                            >
                              {sc.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-5">
            {/* ⭐ SEARCH ICON */}
            <Search
              size={22}
              className="cursor-pointer text-[#9c7d50]"
              onClick={() => setSearchOpen(true)}
            />

            {/* USER MENU */}
            <div className="relative" ref={profileRef}>
              <button onClick={() => setLoginDropdown(!loginDropdown)}>
                <User size={24} className="text-[#9c7d50]" />
              </button>

              {loginDropdown && (
                <div className="absolute right-0 top-full mt-2 bg-white w-64 shadow-xl rounded-lg border z-50">
                  {loggedIn ? (
                    <>
                      <div className="p-4 bg-amber-50 border-b">
                        <p className="text-sm font-semibold text-amber-900">
                          Hi, {userName}
                        </p>
                        <p className="text-xs text-gray-500">{userEmail}</p>
                      </div>

                      <Link
                        to="/UserProfile"
                        className="block px-4 py-3 border-b hover:bg-gray-100"
                      >
                        My Profile
                      </Link>

                      <Link
                        to="/MyOrder"
                        className="block px-4 py-3 border-b hover:bg-gray-100"
                      >
                        My Orders
                      </Link>

                      <button
                        onClick={logoutUser}
                        className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <div className="p-4 text-center">
                      <Link
                        to="/login"
                        className="block py-2 bg-amber-500 text-white rounded-lg mb-2"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="block py-2 border border-amber-500 text-amber-600 rounded-lg"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* CART */}
            <div className="relative cursor-pointer" onClick={onCartOpen}>
              <ShoppingBag size={25} className="text-[#9c7d50]" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ⭐ MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t shadow-sm py-3">
            <ul className="flex flex-col">
              {categories.map((cat) => (
                <li key={cat._id} className="border-b">
                  <p className="px-4 py-3 font-medium text-gray-700">
                    {cat.name}
                  </p>

                  {subcategories
                    .filter((sc) => sc.categoryId === cat._id)
                    .map((sc) => (
                      <Link
                        key={sc._id}
                        to={`/subcategory/${sc._id}`}
                        className="block px-8 py-2 text-sm text-gray-600 border-b"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sc.name}
                      </Link>
                    ))}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* ⭐ SEARCH OVERLAY POPUP */}
      {/* ⭐ SLIDE-DOWN SEARCH BAR (EARTHSTORE STYLE) */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg z-[999] transition-transform duration-500 ${
          searchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[900px] mx-auto p-4 relative flex items-center gap-3 bg-white">
          {/* Search Icon */}
          <Search size={22} className="text-gray-500" />

          {/* Search Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && query.trim() !== "") {
                navigate(`/search?q=${query}`);
                setSearchOpen(false);
                setResults([]);
              }
            }}
            className="flex-1 h-12 px-4 text-lg border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-amber-500 transition"
            placeholder="Search for products..."
          />

          {/* ⭐ FIXED BUTTON HEIGHT MATCHED TO INPUT */}
          <button
            className="h-12 px-5 flex items-center justify-center rounded-md text-white font-semibold shadow-sm transition"
            style={{ backgroundColor: "var(--color-teal-500)" }}
            onClick={() => {
              if (!query.trim()) return;
              navigate(`/search?q=${query}`);
              setSearchOpen(false);
              setResults([]);
            }}
          >
            Search
          </button>

          {/* Close Button */}
          <button
            className="p-2 rounded-md text-gray-600 hover:text-black"
            onClick={() => {
              setSearchOpen(false);
              setQuery("");
              setResults([]);
            }}
          >
            <X size={26} />
          </button>
        </div>

        {/* Search Results Box */}
        {query.length > 0 && (
          <div className="max-w-[900px] mx-auto bg-white border rounded-md shadow-md max-h-[400px] overflow-y-auto mt-2">
            {results.length > 0 ? (
              results.map((item) => (
                <div
                  key={item._id}
                  onClick={() => {
                    navigate(`/product/${item._id}`);
                    setSearchOpen(false);
                  }}
                  className="flex items-center gap-4 p-3 border-b hover:bg-gray-100 cursor-pointer"
                >
                  {/* Product Image */}
                  <img
                    src={item.imageUrls?.[0] || "/fallback.png"}
                    alt={item.Name}
                    className="w-14 h-14 object-cover rounded-md border"
                  />

                  {/* Product Details */}
                  <div className="flex flex-col">
                    <p className="font-medium text-gray-800">{item.Name}</p>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-amber-700 font-semibold">
                        ₹{item.SalesPrice}
                      </span>

                      <span className="line-through text-gray-500 text-sm">
                        ₹{item.Price}
                      </span>

                      {/* Discount */}
                      <span className="text-green-600 text-sm font-medium">
                        {Math.round(
                          ((item.Price - item.SalesPrice) / item.Price) * 100
                        )}
                        % OFF
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center p-4 text-gray-500">No products found</p>
            )}
          </div>
        )}
      </div>

      {/* ⭐ BACKDROP (Blurry dark background like Earthstore) */}
      {searchOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-[998]"
          onClick={() => {
            setSearchOpen(false);
            setQuery("");
            setResults([]);
          }}
        ></div>
      )}
    </>
  );
};

export default Navbar;
