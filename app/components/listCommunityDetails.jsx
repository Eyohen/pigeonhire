"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  getCommunityTypes,
  getCommunitySizes,
  getEngagementLevels,
  getContentSharedTypes,
  getGoals,
  getConnectionCategories,
  getPlatformUsed,
} from "@/app/apis/community";
import { useRouter } from "next/navigation";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { usePlacesWidget } from "react-google-autocomplete";
import Autocomplete from "react-google-autocomplete";
import { countries } from "../utils/countries";
// Define menu styling props
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function ListCommunityDetails() {
  const router = useRouter();
  const [tab, setTab] = useState("info");

  // State for storing API data
  const [communityTypes, setCommunityTypes] = useState([]);
  const [communitySizes, setCommunitySizes] = useState([]);
  const [engagementLevels, setEngagementLevels] = useState([]);
  const [contentSharedTypes, setContentSharedTypes] = useState([]);
  const [interactionTypes, setInteractionTypes] = useState([]);
  const [platformUsed, setPlatformUsed] = useState([]);
  const [connectionCategories, setConnectionCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // React Hook Form setup
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    // Try to load saved form data from localStorage if available
    defaultValues: (() => {
      if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem("communityFormData");
      if (savedData) {
        try {
          return JSON.parse(savedData);
        } catch (error) {
          console.error("Error parsing saved form data:", error);
        }
      }
      }
      
    })(),
  });

  // Selected community type for category filtering
  const selectedCommunityType = watch("communityType");
  const selectedType = communityTypes.find(
    (type) => type.communityType === selectedCommunityType
  );

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Form submitted:", data);

    try {
      // Store the form data in localStorage
      localStorage.setItem("communityFormData", JSON.stringify(data));
      router.push("/user/list-community/preview");
      // alert('Form data saved successfully!');

      // You can redirect to the preview page here if needed
      // window.location.href = '/user/list-connector/preview';
    } catch (error) {
      console.error("Error saving to localStorage:", error);
      alert("Failed to save form data. Please try again.");
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch all required data in parallel
        const [
          typesRes,
          sizesRes,
          engagementRes,
          contentRes,
          goalsRes,
          categoriesRes,
          platformUsedRes,
        ] = await Promise.all([
          getCommunityTypes(),
          getCommunitySizes(),
          getEngagementLevels(),
          getContentSharedTypes(),
          getGoals(),
          getConnectionCategories(),
          getPlatformUsed(),
        ]);

        setCommunityTypes(typesRes.data);
        setCommunitySizes(sizesRes.data);
        setEngagementLevels(engagementRes.data);
        setContentSharedTypes(contentRes.data);
        setInteractionTypes(goalsRes.data);
        setConnectionCategories(categoriesRes.data);
        setPlatformUsed(platformUsedRes.data);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load community data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Auto-save form data when changing tabs
  const handleTabChange = useCallback(
    (newTab) => {
      // Get current form data and save to localStorage
      const currentValues = watch();
      localStorage.setItem("communityFormData", JSON.stringify(currentValues));

      // Change the tab
      setTab(newTab);
    },
    [watch]
  );

  if (loading) return <div>Loading community data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="flex gap-8 mb-8 border-b border-border">
        <div
          className={`title-18 px-4 py-3 whitespace-nowrap font-medium cursor-pointer ${tab === "info" ? "border-b border-secondary text-secondary" : ""}`}
          onClick={() => handleTabChange("info")}
        >
          Community Information
        </div>
        <div
          className={`title-18 px-4 py-3 whitespace-nowrap font-medium cursor-pointer ${tab === "image" ? "border-b border-secondary text-secondary" : ""}`}
          onClick={() => handleTabChange("image")}
        >
          Community Image
        </div>
        <div
          className={`title-18 px-4 py-3 whitespace-nowrap font-medium cursor-pointer ${tab === "additional-info" ? "border-b border-secondary text-secondary" : ""}`}
          onClick={() => handleTabChange("additional-info")}
        >
          Additional Features
        </div>
        <div
          className={`title-18 px-4 py-3 whitespace-nowrap font-medium cursor-pointer ${tab === "contact-info" ? "border-b border-secondary text-secondary" : ""}`}
          onClick={() => handleTabChange("contact-info")}
        >
          Contact Information
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[921px]">
        {tab === "info" && (
          <div className="w-full max-w-[921px]">
            <label htmlFor="name">Community Name:</label>
            <input
              type="text"
              id="name"
              placeholder="enter name"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}

            <label htmlFor="description">Community Description:</label>
            <textarea
              id="description"
              placeholder="enter description"
              className="border border-border w-full max-w-full rounded px-6 mb-6 pt-4 h-[134px]"
              {...register("description", {
                required: "Description is required",
              })}
            ></textarea>
            {errors.description && (
              <p className="error">{errors.description.message}</p>
            )}

            <label htmlFor="communityType">Community Type:</label>
            <select
              id="communityType"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("communityType", {
                required: "Community type is required",
              })}
            >
              <option value="">select type</option>
              {communityTypes.map((type) => (
                <option key={type.id} value={type.communityType}>
                  {type.communityType}
                </option>
              ))}
            </select>
            {errors.communityType && (
              <p className="error">{errors.communityType.message}</p>
            )}

            <label htmlFor="commTypeCategory">Community Category:</label>
            <Controller
              name="commTypeCategory"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field: { onChange, value, ...restField } }) => (
                <Select
                  {...restField}
                  id="commTypeCategory"
                  multiple
                  value={Array.isArray(value) ? value : []}
                  onChange={(e) => {
                    onChange(e.target.value); // Ensure we're passing the array value
                  }}
                  input={
                    <OutlinedInput
                      style={{
                        width: "100%",
                        marginBottom: "24px",
                        fontSize: "16px",
                      }}
                    />
                  }
                  MenuProps={MenuProps}
                >
                  {selectedType?.commTypeCategory?.map((category, index) => (
                    <MenuItem
                      key={index}
                      value={category}
                      style={{ fontSize: "16px" }}
                    >
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />

            {errors.commTypeCategory && (
              <p className="error">{errors.commTypeCategory.message}</p>
            )}

            <label htmlFor="established">Community Established Date:</label>
            <input
              type="date"
              id="established"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("established", {
                required: "Established date is required",
              })}
            />
            {errors.established && (
              <p className="error">{errors.established.message}</p>
            )}

            <label htmlFor="size">Total Number of Members:</label>
            <select
              id="size"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("size", { required: "Size is required" })}
            >
              <option value="">select numbers</option>
              {communitySizes.map((size) => (
                <option key={size.id} value={size.size}>
                  {size.size}
                </option>
              ))}
            </select>
            {errors.size && <p className="error">{errors.size.message}</p>}

            <div className="grid grid-cols-2 gap-6 max-w-full">
                        <div>
                          <label htmlFor="location">Location:</label>
                          <Controller
                            name="location"
                            control={control}
                            render={({ field }) => (
                              <Autocomplete
                                className="location-input"
                                apiKey="AIzaSyBWo_tQ4rjQkZz1kN5WXfnemHCaF0gQ8BU"
                                placeholder="Enter your location"
                                defaultValue={field.value}
                                onPlaceSelected={(place) => {
                                  console.log("Address:", place.formatted_address);
          
                                  // Update the location field with the selected address
                                  setValue("location", place.formatted_address);
                                }}
                                onChange={(e) => {
                                  // Update just the text input value when typing
                                  setValue("location", e.target.value);
                                }}
                                options={{
                                  types: ["address"],
                                }}
                              />
                            )}
                          />
          
                          {errors.location && (
                            <p className="error">{errors.location.message}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="state">Country:</label>
                          <select
                            id="state"
                            className="border border-border w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
                            {...register("state", { required: "State is required" })}
                          >
                            <option value="">select country</option>
                            {countries?.map((country) =>
                            <option value={country?.label}>{country?.label}</option>
                            )}

                            {/* Add more states as needed */}
                          </select>
                          {errors.state && (
                            <p className="error">{errors.state.message}</p>
                          )}
                        </div>
                      </div>
{/* 
            <label htmlFor="accessType">Price Tag:</label>
            <select
              id="accessType"
              {...register("accessType", { required: "Price tag is required" })}
            >
              <option value="">select community tag</option>
              {connectionCategories.map((category) => (
                <option key={category.id} value={category.connCategory}>
                  {category.connCategory}
                </option>
              ))}
            </select>
            {errors.accessType && (
              <p className="error">{errors.accessType.message}</p>
            )} */}

            <label htmlFor="engagementLevel">Engagement Level:</label>
            <select
              id="engagementLevel"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("engagementLevel", {
                required: "Engagement level is required",
              })}
            >
              <option value="">select engagement level</option>
              {engagementLevels.map((level) => (
                <option key={level.id} value={level.engagementLevel}>
                  {level.engagementLevel}
                </option>
              ))}
            </select>
            {errors.engagementLevel && (
              <p className="error">{errors.engagementLevel.message}</p>
            )}

            <label htmlFor="frequency">Post Frequency:</label>
            <input
              type="text"
              id="frequency"
              placeholder="Number of posting days/week"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("frequency", {
                required: "Frequency is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter a valid number",
                },
              })}
            />
            {errors.frequency && (
              <p className="error">{errors.frequency.message}</p>
            )}

            <button type="button" className="primary-button max-w-[429px] mx-auto mt-10" onClick={() => handleTabChange("image")}>
              Next
            </button>
          </div>
        )}

        {tab === "image" && (
          <div className="w-full max-w-[921px]">
            <label htmlFor="communityImage">Upload Community image</label>

            <div className="flex gap-6 items-center mb-3">
              <div className="w-full h-[65px] rounded px-3 gap-8 flex items-center bg-gray-light">
                <button type="button" className="title-14 w-[113px] h-10 border border-[#31A653] rounded-lg bg-white">Choose File</button>
                <div>No File Chosen</div>
              </div>

              <button type="button" className="w-[124px] h-[66px] bg-[#31A653] rounded-lg border-none font-semibold text-[16.99px] text-white">Upload</button>
            </div>
            <div className="text-[#667085] mb-6">
              Please upload .jpeg, .jpg, .png or .pdf, size less than 100KB
            </div>

            <button
              type="button"
              className="primary-button max-w-[429px] mx-auto mt-10"
              onClick={() => handleTabChange("additional-info")}
            >
              Next
            </button>
          </div>
        )}

        {tab === "additional-info" && (
          <div className="w-full max-w-[921px]">
            <label htmlFor="contentShared">Types of content shared:</label>

            <Controller
              name="contentShared"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field: { onChange, value, ...restField } }) => (
                <Select
                  {...restField}
                  id="contentShared"
                  multiple
                  value={Array.isArray(value) ? value : []}
                  onChange={(e) => {
                    onChange(e.target.value); // Ensure we're passing the array value
                  }}
                  input={
                    <OutlinedInput
                      style={{
                        width: "100%",
                        marginBottom: "24px",
                        fontSize: "16px",
                      }}
                    />
                  }
                  MenuProps={MenuProps}
                >
                  {contentSharedTypes?.map((content) => (
                    <MenuItem
                      key={content.id}
                      value={content.contentShared}
                      style={{ fontSize: "16px" }}
                    >
                      {content.contentShared}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />

            {errors.contentShared && (
              <p className="error">{errors.contentShared.message}</p>
            )}

            <label htmlFor="communityInterest">Key Topics & Interests:</label>
            <input
              type="text"
              id="communityInterest"
              placeholder="Enter key topics and interests"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("communityInterest")}
            />

            <label htmlFor="communicationPlatform">Platforms Used:</label>
            <select
              id="communicationPlatform"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("communicationPlatform", {
                required: "Platform is required",
              })}
            >
              <option value="">select your preferred platform</option>
              {platformUsed.map((platform) => (
                <option
                  key={platform.id}
                  value={platform.communicationPlatform}
                >
                  {platform.communicationPlatform}
                </option>
              ))}
            </select>
            {errors.communicationPlatform && (
              <p className="error">{errors.communicationPlatform.message}</p>
            )}

            <label htmlFor="communityGoal">Types of Interactions:</label>

            <Controller
              name="communityGoal"
              control={control}
              rules={{ required: "Community Goal is required" }}
              render={({ field: { onChange, value, ...restField } }) => (
                <Select
                  {...restField}
                  id="communityGoal"
                  multiple
                  value={Array.isArray(value) ? value : []}
                  onChange={(e) => {
                    onChange(e.target.value); // Ensure we're passing the array value
                  }}
                  input={
                    <OutlinedInput
                      style={{
                        width: "100%",
                        marginBottom: "24px",
                        fontSize: "16px",
                      }}
                    />
                  }
                  MenuProps={MenuProps}
                >
                  {interactionTypes?.map((type) => (
                    <MenuItem
                      key={type.id}
                      value={type.communityGoal}
                      style={{ fontSize: "16px" }}
                    >
                      {type.communityGoal}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          
            {errors.communityGoal && (
              <p className="error">{errors.communityGoal.message}</p>
            )}

            <label htmlFor="usp">Unique selling points:</label>
            <input
              type="text"
              id="usp"
              placeholder="What are your community selling points?"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("usp")}
            />

            <label htmlFor="recognition">Special recognition or award:</label>
            <input
              type="text"
              id="recognition"
              placeholder="enter special recognition or award received"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("recognition")}
            />

            <label htmlFor="additionalService">
              Add additional services offered:
            </label>
            <textarea
              id="additionalService"
              placeholder="Include any additional service offered"
              className="border border-border w-full max-w-full rounded px-6 mb-6 pt-4 h-[134px]"
              {...register("additionalService")}
            ></textarea>

            <button
              type="button"
              className="primary-button max-w-[429px] mx-auto mt-10"
              onClick={() => handleTabChange("contact-info")}
            >
              Next
            </button>
          </div>
        )}

        {tab === "contact-info" && (
          <div className="w-full max-w-[921px]">
            <label htmlFor="accessRequirements">Access Requirements:</label>
            <select id="accessRequirements" className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6" {...register("accessType")}>
              <option value="">select access requirement</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
              <option value="invitation">Invitation Only</option>
            </select>

            <label htmlFor="website">Link to community page or website:</label>
            <input
              type="text"
              id="website"
              placeholder="enter link to your community or website"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("website", {
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: "Please enter a valid URL",
                },
              })}
            />
            {errors.website && (
              <p className="error">{errors.website.message}</p>
            )}

            <label htmlFor="phone">Contact Phone:</label>
            <input
              type="text"
              id="phone"
              placeholder="enter your phone number"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("phone", {
                pattern: {
                  value: /^[0-9+\-\s()]*$/,
                  message: "Please enter a valid phone number",
                },
              })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}

            <label htmlFor="email">Contact Email:</label>
            <input
              type="email"
              id="email"
              placeholder="enter your email address"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <label htmlFor="whatsapp">Whatsapp:</label>
            <input
              type="text"
              id="whatsapp"
              placeholder="enter your whatsapp phone number"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("whatsapp", {
                pattern: {
                  value: /^[0-9+\-\s()]*$/,
                  message: "Please enter a valid phone number",
                },
              })}
            />
            {errors.whatsapp && <p className="error">{errors.whatsapp.message}</p>}

            <label htmlFor="telegram">Telegram:</label>
            <input
              type="text"
              id="telegram"
              placeholder="enter your telegram username. Eg: @henro19"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("telegram")}
            />
            {errors.telegram && <p className="error">{errors.telegram.message}</p>}

            <label htmlFor="twitter">Twitter:</label>
            <input
              type="text"
              id="twitter"
              placeholder="enter your twitter username. Eg: HenryEyo14"
              className="border border-border w-full max-w-full h-14 flex gap-5 justify-between items-center rounded px-6 mb-6"
              {...register("twitter")}
            />
            {errors.twitter && <p className="error">{errors.twitter.message}</p>}

            {/* Changed to button type="submit" to trigger the form submission */}
            <button type="submit" className="primary-button max-w-[429px] mx-auto mt-10">Preview and Save</button>
          </div>
        )}
      </form>
    </>
  );
}
