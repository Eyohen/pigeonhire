"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getCommunity } from "@/app/apis/community";
import { toast } from "react-toastify";
import axios from "axios";
import NavigationDirectory from "@/app/components/navigationDirectory";

export default function EditCommunity() {
  const { id } = useParams();
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const response = await getCommunity(id);
        const community = response?.data;

        if (community) {
          // Populate form fields
          setValue("name", community.name);
          setValue("description", community.description);
          setValue("email", community.email);
          setValue("phone", community.phone);
          setValue("location", community.location);
          setValue("state", community.state);
          setValue("website", community.website);
          setValue("whatsapp", community.whatsapp);
          setValue("telegram", community.telegram);
          setValue("twitter", community.twitter);
          setValue("linkedin", community.linkedin);
          setValue("communityType", community.communityType);
          setValue("communityInterest", community.communityInterest);
          setValue("size", community.size);
          setValue("engagementLevel", community.engagementLevel);
          setValue("frequency", community.frequency);
          setValue("accessType", community.accessType);
          setValue("communicationPlatform", community.communicationPlatform);
          setValue("recognition", community.recognition);
          setValue("additionalService", community.additionalService);
        }
      } catch (error) {
        console.error("Error fetching community:", error);
        toast.error("Failed to load community data");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCommunity();
    }
  }, [id, setValue]);

  const onSubmit = async (data) => {
    setSubmitting(true);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_URL}/communities/${id}`,
        data,
        config
      );

      if (response.status === 200) {
        toast.success("Community updated successfully!");
        router.push("/user/manage-network");
      }
    } catch (error) {
      console.error("Error updating community:", error);
      toast.error(error?.response?.data?.message || "Failed to update community");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-[921px]">
        <div className="text-center py-12">Loading community data...</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[921px]">
      <NavigationDirectory
        links={[
          {
            name: "Home",
            link: "/user",
          },
          {
            name: "Manage Network",
            link: "/user/manage-network",
          },
          {
            name: "Edit Community",
          },
        ]}
      />

      <div className="w-full font-semibold text-2xl mb-6 mt-4">Edit Community</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="block mb-2 font-medium">Name *</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="border border-[#e5e5e5] w-full max-w-[599px] h-14 flex gap-5 justify-between items-center rounded-3xl px-6 mb-6"
        />
        {errors.name && <p className="text-red-500 text-sm -mt-4 mb-4">{errors.name.message}</p>}

        <label htmlFor="description" className="block mb-2 font-medium">Description</label>
        <textarea
          id="description"
          {...register("description")}
          className="border border-[#e5e5e5] w-full max-w-[599px] flex gap-5 justify-between items-center rounded px-6 mb-6 pt-4 h-[134px]"
        />

        <div className="grid grid-cols-2 gap-6 max-w-full mb-6">
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-full mb-6">
          <div>
            <label htmlFor="location" className="block mb-2 font-medium">Location</label>
            <input
              type="text"
              id="location"
              {...register("location")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
          <div>
            <label htmlFor="state" className="block mb-2 font-medium">State</label>
            <input
              type="text"
              id="state"
              {...register("state")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
        </div>

        <label htmlFor="website" className="block mb-2 font-medium">Website</label>
        <input
          type="text"
          id="website"
          {...register("website")}
          className="border border-[#e5e5e5] w-full max-w-[599px] h-14 rounded-3xl px-6 mb-6"
        />

        <div className="grid grid-cols-2 gap-6 max-w-full mb-6">
          <div>
            <label htmlFor="whatsapp" className="block mb-2 font-medium">WhatsApp</label>
            <input
              type="text"
              id="whatsapp"
              {...register("whatsapp")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
          <div>
            <label htmlFor="telegram" className="block mb-2 font-medium">Telegram</label>
            <input
              type="text"
              id="telegram"
              {...register("telegram")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-full mb-6">
          <div>
            <label htmlFor="twitter" className="block mb-2 font-medium">Twitter</label>
            <input
              type="text"
              id="twitter"
              {...register("twitter")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="block mb-2 font-medium">LinkedIn</label>
            <input
              type="text"
              id="linkedin"
              {...register("linkedin")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
        </div>

        <label htmlFor="communityType" className="block mb-2 font-medium">Community Type</label>
        <input
          type="text"
          id="communityType"
          {...register("communityType")}
          className="border border-[#e5e5e5] w-full max-w-[599px] h-14 rounded-3xl px-6 mb-6"
        />

        <label htmlFor="communityInterest" className="block mb-2 font-medium">Community Interest</label>
        <input
          type="text"
          id="communityInterest"
          {...register("communityInterest")}
          className="border border-[#e5e5e5] w-full max-w-[599px] h-14 rounded-3xl px-6 mb-6"
        />

        <label htmlFor="size" className="block mb-2 font-medium">Size</label>
        <input
          type="text"
          id="size"
          {...register("size")}
          className="border border-[#e5e5e5] w-full max-w-[599px] h-14 rounded-3xl px-6 mb-6"
        />

        <label htmlFor="engagementLevel" className="block mb-2 font-medium">Engagement Level</label>
        <input
          type="text"
          id="engagementLevel"
          {...register("engagementLevel")}
          className="border border-[#e5e5e5] w-full max-w-[599px] h-14 rounded-3xl px-6 mb-6"
        />

        <label htmlFor="frequency" className="block mb-2 font-medium">Post Frequency</label>
        <input
          type="text"
          id="frequency"
          {...register("frequency")}
          className="border border-[#e5e5e5] w-full max-w-[599px] h-14 rounded-3xl px-6 mb-6"
        />

        <label htmlFor="accessType" className="block mb-2 font-medium">Access Type</label>
        <input
          type="text"
          id="accessType"
          {...register("accessType")}
          className="border border-[#e5e5e5] w-full max-w-[599px] h-14 rounded-3xl px-6 mb-6"
        />

        <label htmlFor="communicationPlatform" className="block mb-2 font-medium">Communication Platform</label>
        <input
          type="text"
          id="communicationPlatform"
          {...register("communicationPlatform")}
          className="border border-[#e5e5e5] w-full max-w-[599px] h-14 rounded-3xl px-6 mb-6"
        />

        <label htmlFor="recognition" className="block mb-2 font-medium">Special Recognition/Awards</label>
        <textarea
          id="recognition"
          {...register("recognition")}
          className="border border-[#e5e5e5] w-full max-w-[599px] rounded px-6 mb-6 pt-4 h-[134px]"
        />

        <label htmlFor="additionalService" className="block mb-2 font-medium">Additional Services</label>
        <textarea
          id="additionalService"
          {...register("additionalService")}
          className="border border-[#e5e5e5] w-full max-w-[599px] rounded px-6 mb-6 pt-4 h-[134px]"
        />

        <div className="flex gap-4 mt-8">
          <button
            type="button"
            onClick={() => router.push("/user/manage-network")}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Updating..." : "Update Community"}
          </button>
        </div>
      </form>
    </div>
  );
}
