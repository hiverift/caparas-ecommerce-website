// Profile.jsx — COMPLETE WORKING + SWEET ALERT + IMAGE UPLOAD

import { useState, useEffect } from "react";
import {
  User,
  ImageIcon,
  KeyRound,
  Eye,
  EyeOff,
  Save,
  Trash,
  Loader2,
} from "lucide-react";
import BASE from "../../config";
import Swal from "sweetalert2";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPass: "",
    newPass: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({});
  const [passErrors, setPassErrors] = useState({});
  const [showPass, setShowPass] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  // ================================
  // ☑️ FETCH USER PROFILE
  // ================================
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        // If no token → redirect to login
        if (!token) {
          window.location.href = "/admin/login";
          return;
        }

        // API Call with Token
        const res = await fetch(`${BASE.PRODUCT_BASE}/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Token passed correctly
          },
        });

        const data = await res.json();

        if (!res.ok) {
          Swal.fire("Error", data.message || "Failed to load profile", "error");
          return;
        }

        // Different backend structures handled safely
        const user = data.data || data.user || data;

        setForm({
          userName: user.userName || user.username || "",
          userEmail: user.userEmail || user.email || "",
          userPhone: user.userPhone || "",
        });

        if (user.profileImage) {
          setPreview(user.profileImage);
        }
      } catch (error) {
        Swal.fire(
          "Error",
          "Unable to load profile. Please try again.",
          "error"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // ================================
  // 🧾 VALIDATION
  // ================================
  const validate = () => {
    let newErr = {};

    if (!form.userName.trim()) newErr.userName = "User name required.";

    if (!form.userPhone.trim()) newErr.userPhone = "Phone number required.";
    else if (!/^\d{10}$/.test(form.userPhone))
      newErr.userPhone = "Phone number must be 10 digits.";

    if (!form.userEmail.trim()) newErr.userEmail = "Email required.";

    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  // ================================
  // 🔄 UPDATE PROFILE
  // ================================
  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const token = localStorage.getItem("adminToken");
      const payload = {
        username: form.userName, // backend may expect this
        userName: form.userName, // safe fallback
        userPhone: form.userPhone,
        userEmail: form.userEmail,
      };

      const res = await fetch(`${BASE.PRODUCT_BASE}/profile/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        return Swal.fire("Error", data.message, "error");
      }

      Swal.fire("Success", "Profile updated successfully!", "success");
    } catch {
      Swal.fire("Error", "Error updating profile!", "error");
    }
  };

  // ================================
  // 🖼️ IMAGE UPLOAD
  // ================================
  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/"))
      return Swal.fire("Error", "Only images allowed!", "error");

    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    const token = localStorage.getItem("adminToken");

    formData.append("image", file);

    try {
      const res = await fetch(`${BASE.PRODUCT_BASE}/profile/upload-image`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) return Swal.fire("Error", data.message, "error");

      Swal.fire("Success", "Profile image updated!", "success");
    } catch {
      Swal.fire("Error", "Image upload failed!", "error");
    }
  };

  const removeImage = () => {
    setPreview(null);
    Swal.fire("Removed", "Preview removed (Not deleted from server)", "info");
  };

  // ================================
  // 🔐 PASSWORD CHANGE
  // ================================
  const validatePassword = () => {
    let err = {};
    if (!passwordData.oldPass) err.oldPass = "Enter old password.";
    if (!passwordData.newPass) err.newPass = "New password required.";
    else if (passwordData.newPass.length < 6) err.newPass = "Min 6 characters.";
    if (passwordData.confirmPass !== passwordData.newPass)
      err.confirmPass = "Passwords do not match.";

    setPassErrors(err);
    return Object.keys(err).length === 0;
  };

  const updatePassword = async () => {
    if (!validatePassword()) return;

    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(`${BASE.PRODUCT_BASE}/profile/change-password`, {
        method: "POST", // change if backend needs PUT
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          oldPassword: passwordData.oldPass,
          newPassword: passwordData.newPass,
          confirmPassword: passwordData.confirmPass,
        }),
      });

      const data = await res.json();
      if (!res.ok) return Swal.fire("Error", data.message, "error");

      Swal.fire("Success", "Password updated successfully!", "success");
      setPasswordData({ oldPass: "", newPass: "", confirmPass: "" });
    } catch {
      Swal.fire("Error", "Error updating password!", "error");
    }
  };

  // ================================
  // ⏳ LOADING
  // ================================
  if (loading) {
    return (
      <main className="p-6 flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
      </main>
    );
  }

  // ================================
  // 🎨 UI SECTION
  // ================================
  return (
    <main className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Profile Settings</h1>
        <p className="text-gray-600 text-sm">Manage your account information</p>
      </div>

      {/* ======================= PROFILE FORM ======================= */}
      <div className="bg-white border p-6 rounded-xl space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <User className="w-5 h-5" /> Basic Information
        </h2>

        {/* EMAIL */}
        <div>
          <label className="text-sm">Email</label>
          <input
            name="userEmail"
            value={form.userEmail}
            onChange={(e) => {
              setForm({ ...form, userEmail: e.target.value });
              setErrors({ ...errors, userEmail: "" });
            }}
            className="w-full border rounded-md p-2 mt-1"
            placeholder="your@email.com"
          />
          {errors.userEmail && (
            <p className="text-red-500 text-xs">{errors.userEmail}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <label className="text-sm">Phone Number</label>
          <input
            name="userPhone"
            value={form.userPhone}
            onChange={(e) => {
              setForm({ ...form, userPhone: e.target.value });
              setErrors({ ...errors, userPhone: "" });
            }}
            className="w-full border rounded-md p-2 mt-1"
            placeholder="9876543210"
          />
          {errors.userPhone && (
            <p className="text-red-500 text-xs">{errors.userPhone}</p>
          )}
        </div>

        {/* USER NAME */}
        <div>
          <label className="text-sm">User Name</label>
          <input
            name="userName"
            value={form.userName}
            onChange={(e) => {
              setForm({ ...form, userName: e.target.value });
              setErrors({ ...errors, userName: "" });
            }}
            className="w-full border rounded-md p-2 mt-1"
            placeholder="your username"
          />
          {errors.userName && (
            <p className="text-red-500 text-xs">{errors.userName}</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <Save className="w-4 h-4" /> Update Profile
        </button>
      </div>

      {/* ======================= IMAGE UPLOAD ======================= */}
      <div className="bg-white border p-6 rounded-xl space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <ImageIcon className="w-5 h-5" /> Profile Picture
        </h2>

        <div className="flex items-center gap-6">
          <div className="w-28 h-28 border rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
            {preview ? (
              <img
                src={preview}
                className="w-full h-full object-cover"
                alt=""
              />
            ) : (
              <p className="text-gray-400">No image</p>
            )}
          </div>

          <div>
            <label className="cursor-pointer bg-black text-white px-4 py-2 rounded-md inline-flex items-center gap-2">
              <ImageIcon className="w-4 h-4" /> Upload
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImage}
              />
            </label>

            {preview && (
              <button
                onClick={removeImage}
                className="text-red-600 mt-2 flex items-center gap-2"
              >
                <Trash className="w-4 h-4" /> Remove
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ======================= PASSWORD CHANGE ======================= */}
      <div className="bg-white border p-6 rounded-xl space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <KeyRound className="w-5 h-5" /> Change Password
        </h2>

        {/* Old Password */}
        <div>
          <label className="text-sm">Old Password</label>
          <div className="relative">
            <input
              type={showPass.old ? "text" : "password"}
              name="oldPass"
              value={passwordData.oldPass}
              onChange={(e) => {
                setPasswordData({ ...passwordData, oldPass: e.target.value });
                setPassErrors({ ...passErrors, oldPass: "" });
              }}
              className="w-full border rounded-md p-2 mt-1"
              placeholder="Old password"
            />
            <button
              type="button"
              className="absolute right-2 top-3"
              onClick={() => setShowPass({ ...showPass, old: !showPass.old })}
            >
              {showPass.old ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {passErrors.oldPass && (
            <p className="text-red-500 text-xs">{passErrors.oldPass}</p>
          )}
        </div>

        {/* New Password */}
        <div>
          <label className="text-sm">New Password</label>
          <div className="relative">
            <input
              type={showPass.new ? "text" : "password"}
              name="newPass"
              value={passwordData.newPass}
              onChange={(e) => {
                setPasswordData({ ...passwordData, newPass: e.target.value });
                setPassErrors({ ...passErrors, newPass: "" });
              }}
              className="w-full border rounded-md p-2 mt-1"
              placeholder="New password"
            />
            <button
              type="button"
              className="absolute right-2 top-3"
              onClick={() => setShowPass({ ...showPass, new: !showPass.new })}
            >
              {showPass.new ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {passErrors.newPass && (
            <p className="text-red-500 text-xs">{passErrors.newPass}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm">Confirm Password</label>
          <div className="relative">
            <input
              type={showPass.confirm ? "text" : "password"}
              name="confirmPass"
              value={passwordData.confirmPass}
              onChange={(e) => {
                setPasswordData({
                  ...passwordData,
                  confirmPass: e.target.value,
                });
                setPassErrors({ ...passErrors, confirmPass: "" });
              }}
              className="w-full border rounded-md p-2 mt-1"
              placeholder="Confirm new password"
            />
            <button
              type="button"
              className="absolute right-2 top-3"
              onClick={() =>
                setShowPass({ ...showPass, confirm: !showPass.confirm })
              }
            >
              {showPass.confirm ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {passErrors.confirmPass && (
            <p className="text-red-500 text-xs">{passErrors.confirmPass}</p>
          )}
        </div>

        <button
          onClick={updatePassword}
          className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <Save className="w-4 h-4" /> Update Password
        </button>
      </div>
    </main>
  );
}
