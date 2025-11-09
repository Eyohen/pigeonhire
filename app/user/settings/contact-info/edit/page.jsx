"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
// import {
//     updateUserProfile,
// } from "../../../../apis/userProfile";

const getCookie = (name) => {
  if (typeof window === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
  return null;
};

export default function SettingsContact({ initialData = {} }) {
  // Get user info and token from Redux store
  const { userInfo, token: reduxToken } = useSelector((state) => state.auth);
  
  // Get token from multiple sources
  const getToken = () => {
    return reduxToken || 
           getCookie('auth_token') || 
           (typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null);
  };

  // Get userId from userInfo
  const userId = userInfo?.user?.id || userInfo?.id;
  const token = getToken();

  // Add validation for required data
  useEffect(() => {
    console.log("SettingsContact Debug Info:");
    console.log("- userInfo:", userInfo);
    console.log("- userId:", userId);
    console.log("- token exists:", !!token);
    console.log("- token length:", token?.length);
    console.log("- NEXT_PUBLIC_URL:", process.env.NEXT_PUBLIC_URL);
    
    if (!userId) {
      console.error("ERROR: userId is required but not found in userInfo");
    }
    if (!token) {
      console.error("ERROR: token is required but not found in Redux, cookies, or localStorage");
    }
    if (!process.env.NEXT_PUBLIC_URL) {
      console.error("ERROR: NEXT_PUBLIC_URL environment variable is not set");
    }
  }, [userId, token, userInfo]);

  const [formData, setFormData] = useState({
    firstName: initialData.firstName || userInfo?.user?.firstName || userInfo?.user?.fname || "",
    lastName: initialData.lastName || userInfo?.user?.lastName || userInfo?.user?.lname || "", 
    email: initialData.email || userInfo?.user?.email || "",
    phone: initialData.phone || userInfo?.user?.phone || "",
    location: initialData.location || userInfo?.user?.location || "",
    dateOfBirth: initialData.dateOfBirth ? initialData.dateOfBirth.split('T')[0] : (userInfo?.user?.dateOfBirth ? userInfo.user.dateOfBirth.split('T')[0] : ""),
    gender: initialData.gender || userInfo?.user?.gender || "",
    bio: initialData.bio || userInfo?.user?.bio || "",
    website: initialData.website || userInfo?.user?.website || "",
    linkedIn: initialData.linkedIn || userInfo?.user?.linkedIn || "",
    twitter: initialData.twitter || userInfo?.user?.twitter || "",
    instagram: initialData.instagram || userInfo?.user?.instagram || ""
  });
  
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch countries on component mount
  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      // Using REST Countries API as an example
      const response = await axios.get("https://restcountries.com/v3.1/all?fields=name");
      const countryList = response.data.map(country => ({
        name: country.name.common,
        value: country.name.common
      })).sort((a, b) => a.name.localeCompare(b.name));
      setCountries(countryList);
    } catch (error) {
      console.error("Error fetching countries:", error);
      // Fallback countries
      setCountries([
        { name: "Nigeria", value: "Nigeria" },
        { name: "United States", value: "United States" },
        { name: "United Kingdom", value: "United Kingdom" },
        { name: "Canada", value: "Canada" }
      ]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (formData.website && !/^https?:\/\/.+$/.test(formData.website)) {
      newErrors.website = "Please enter a valid website URL (include http:// or https://)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if we have required data
    if (!userId) {
      setErrors({ 
        submit: "User ID not found. Please log in again." 
      });
      return;
    }
    
    if (!token) {
      setErrors({ 
        submit: "Authentication token not found. Please log in again." 
      });
      return;
    }
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setSuccessMessage("");
    
    try {
      // Clean the form data - remove empty strings and null values
      const cleanedData = Object.keys(formData).reduce((acc, key) => {
        const value = formData[key];
        if (value !== "" && value !== null && value !== undefined) {
          acc[key] = value;
        }
        return acc;
      }, {});

      console.log("Sending data:", cleanedData);
      console.log("URL:", `${process.env.NEXT_PUBLIC_URL}/users/profile/${userId}`);
      console.log("Token exists:", !!token);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      };

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_URL}/users/profile/${userId}`,
        cleanedData,
        config
      );

      setSuccessMessage("Profile updated successfully!");
      console.log("Profile updated:", response.data);
      
      // Optional: Call a callback to update parent component
      // onProfileUpdated?.(response.data.user);
      
    } catch (error) {
      console.error("Full error object:", error);
      console.error("Error response:", error.response);
      console.error("Error response data:", error.response?.data);
      
      let errorMessage = "Failed to update profile. Please try again.";
      
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.response?.status === 401) {
        errorMessage = "Authentication failed. Please log in again.";
      } else if (error.response?.status === 403) {
        errorMessage = "You don't have permission to update this profile.";
      } else if (error.response?.status === 404) {
        errorMessage = "User not found.";
      } else if (error.response?.status === 500) {
        errorMessage = "Server error. Please try again later or contact support.";
      }
      
      setErrors({ 
        submit: errorMessage
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      dateOfBirth: "",
      gender: "",
      bio: "",
      website: "",
      linkedIn: "",
      twitter: "",
      instagram: ""
    });
    setErrors({});
    setSuccessMessage("");
  };

  return (
    <div>
      <div className="border border-[#E5E5E5] rounded-3xl p-6 mb-8">
        {successMessage && (
          <div className="p-2.5 mb-5 bg-[#d4edda] text-[#155724] border border-[#c3e6cb] rounded">
            {successMessage}
          </div>
        )}

        {errors.submit && (
          <div className="p-2.5 mb-5 bg-[#f8d7da] text-[#721c24] border border-[#f5c6cb] rounded">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 mb-5 phone:flex-col phone:gap-0">
            <div className="mb-5 flex-1">
              <label htmlFor="firstName" className="block mb-2 font-medium text-[#333]">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                className={`w-full p-3 border rounded text-base transition-colors ${errors.firstName ? 'border-[#dc3545]' : 'border-[#ddd]'} focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]`}
              />
              {errors.firstName && <span className="text-[#dc3545] text-sm mt-1 block">{errors.firstName}</span>}
            </div>

            <div className="mb-5 flex-1">
              <label htmlFor="lastName" className="block mb-2 font-medium text-[#333]">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                className={`w-full p-3 border rounded text-base transition-colors ${errors.lastName ? 'border-[#dc3545]' : 'border-[#ddd]'} focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]`}
              />
              {errors.lastName && <span className="text-[#dc3545] text-sm mt-1 block">{errors.lastName}</span>}
            </div>
          </div>

          <div className="mb-5 flex-1">
            <label htmlFor="email" className="block mb-2 font-medium text-[#333]">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className={`w-full p-3 border rounded text-base transition-colors ${errors.email ? 'border-[#dc3545]' : 'border-[#ddd]'} focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]`}
            />
            {errors.email && <span className="text-[#dc3545] text-sm mt-1 block">{errors.email}</span>}
          </div>

          <div className="mb-5 flex-1">
            <label htmlFor="phone" className="block mb-2 font-medium text-[#333]">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter phone number (e.g., +234801234567)"
              className={`w-full p-3 border rounded text-base transition-colors ${errors.phone ? 'border-[#dc3545]' : 'border-[#ddd]'} focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]`}
            />
            {errors.phone && <span className="text-[#dc3545] text-sm mt-1 block">{errors.phone}</span>}
          </div>

          <div className="mb-5 flex-1">
            <label htmlFor="location" className="block mb-2 font-medium text-[#333]">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter your location (e.g., Lagos, Nigeria)"
              className="w-full p-3 border border-[#ddd] rounded text-base transition-colors focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]"
            />
          </div>

          <div className="flex gap-5 mb-5 phone:flex-col phone:gap-0">
            <div className="mb-5 flex-1">
              <label htmlFor="dateOfBirth" className="block mb-2 font-medium text-[#333]">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#ddd] rounded text-base transition-colors focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]"
              />
            </div>

            <div className="mb-5 flex-1">
              <label htmlFor="gender" className="block mb-2 font-medium text-[#333]">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#ddd] rounded text-base transition-colors focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="mb-5 flex-1">
            <label htmlFor="bio" className="block mb-2 font-medium text-[#333]">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Tell us about yourself..."
              rows="4"
              className="w-full p-3 border border-[#ddd] rounded text-base transition-colors focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]"
            />
          </div>

          <div className="mb-5 flex-1">
            <label htmlFor="website" className="block mb-2 font-medium text-[#333]">Website</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              placeholder="https://yourwebsite.com"
              className={`w-full p-3 border rounded text-base transition-colors ${errors.website ? 'border-[#dc3545]' : 'border-[#ddd]'} focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]`}
            />
            {errors.website && <span className="text-[#dc3545] text-sm mt-1 block">{errors.website}</span>}
          </div>

          <div className="mt-[30px] pt-5 border-t border-[#eee]">
            <h4 className="mb-5 text-[#333]">Social Media Links</h4>

            <div className="mb-5">
              <label htmlFor="linkedIn" className="block mb-2 font-medium text-[#333]">LinkedIn</label>
              <input
                type="url"
                id="linkedIn"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/yourusername"
                className="w-full p-3 border border-[#ddd] rounded text-base transition-colors focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="twitter" className="block mb-2 font-medium text-[#333]">Twitter</label>
              <input
                type="url"
                id="twitter"
                name="twitter"
                value={formData.twitter}
                onChange={handleInputChange}
                placeholder="https://twitter.com/yourusername"
                className="w-full p-3 border border-[#ddd] rounded text-base transition-colors focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="instagram" className="block mb-2 font-medium text-[#333]">Instagram</label>
              <input
                type="url"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleInputChange}
                placeholder="https://instagram.com/yourusername"
                className="w-full p-3 border border-[#ddd] rounded text-base transition-colors focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="flex gap-2 items-center justify-end phone:flex-col">
        <button
          type="button"
          onClick={handleCancel}
          disabled={loading}
          className="w-[180px] h-[42px] font-semibold border border-[#E5E5E5] rounded bg-transparent text-[#8D8D8D] cursor-pointer phone:w-full"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          className="w-[180px] h-[42px] font-semibold bg-[#F6911F] border-none rounded text-white cursor-pointer phone:w-full"
        >
          {loading ? "Saving..." : "Save changes"}
        </button>
      </div>
    </div>
  );
}