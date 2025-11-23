"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getConnector } from "@/app/apis/connector";
import { toast } from "react-toastify";
import axios from "axios";
import NavigationDirectory from "@/app/components/navigationDirectory";

export default function EditConnector() {
  const { id } = useParams();
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchConnector = async () => {
      try {
        const response = await getConnector(id);
        const connector = response?.data;

        if (connector) {
          // Populate form fields
          setValue("firstName", connector.firstName);
          setValue("lastName", connector.lastName);
          setValue("email", connector.email);
          setValue("phone", connector.phone);
          setValue("role", connector.role);
          setValue("description", connector.description);
          setValue("communityName", connector.communityName);
          setValue("website", connector.website);
          setValue("linkedIn", connector.linkedIn);
          setValue("whatsapp", connector.whatsapp);
          setValue("telegram", connector.telegram);
          setValue("twitter", connector.twitter);
          setValue("instagram", connector.instagram);
          setValue("accessRequirement", connector.accessRequirement);
          setValue("connectionType", connector.connectionType);
          setValue("connectionPlatform", connector.connectionPlatform);
          setValue("sourceOfInfo", connector.sourceOfInfo);
          setValue("recognition", connector.recognition);
          setValue("usp", connector.usp);
          setValue("additionalInfo", connector.additionalInfo);
        }
      } catch (error) {
        console.error("Error fetching connector:", error);
        toast.error("Failed to load connector data");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchConnector();
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
        `${process.env.NEXT_PUBLIC_URL}/connectors/${id}`,
        data,
        config
      );

      if (response.status === 200) {
        toast.success("Connector updated successfully!");
        router.push("/user/manage-network");
      }
    } catch (error) {
      console.error("Error updating connector:", error);
      toast.error(error?.response?.data?.message || "Failed to update connector");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-[921px]">
        <div className="text-center py-12">Loading connector data...</div>
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
            name: "Edit Connector",
          },
        ]}
      />

      <div className="w-full font-semibold text-2xl mb-6 mt-4">Edit Connector</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6 max-w-full mb-6">
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium">First Name *</label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 font-medium">Last Name *</label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        <label htmlFor="description" className="block mb-2 font-medium">Description</label>
        <textarea
          id="description"
          {...register("description")}
          className="border border-[#e5e5e5] w-full max-w-[599px] rounded px-6 mb-6 pt-4 h-[134px]"
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
            <label htmlFor="role" className="block mb-2 font-medium">Role</label>
            <input
              type="text"
              id="role"
              {...register("role")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
          <div>
            <label htmlFor="communityName" className="block mb-2 font-medium">Community Name</label>
            <input
              type="text"
              id="communityName"
              {...register("communityName")}
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
            <label htmlFor="linkedIn" className="block mb-2 font-medium">LinkedIn</label>
            <input
              type="text"
              id="linkedIn"
              {...register("linkedIn")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
          <div>
            <label htmlFor="whatsapp" className="block mb-2 font-medium">WhatsApp</label>
            <input
              type="text"
              id="whatsapp"
              {...register("whatsapp")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-full mb-6">
          <div>
            <label htmlFor="telegram" className="block mb-2 font-medium">Telegram</label>
            <input
              type="text"
              id="telegram"
              {...register("telegram")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
          <div>
            <label htmlFor="twitter" className="block mb-2 font-medium">Twitter</label>
            <input
              type="text"
              id="twitter"
              {...register("twitter")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
        </div>

        <label htmlFor="instagram" className="block mb-2 font-medium">Instagram</label>
        <input
          type="text"
          id="instagram"
          {...register("instagram")}
          className="border border-[#e5e5e5] w-full max-w-[599px] h-14 rounded-3xl px-6 mb-6"
        />

        <div className="grid grid-cols-2 gap-6 max-w-full mb-6">
          <div>
            <label htmlFor="connectionType" className="block mb-2 font-medium">Connection Type</label>
            <input
              type="text"
              id="connectionType"
              {...register("connectionType")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
          <div>
            <label htmlFor="connectionPlatform" className="block mb-2 font-medium">Connection Platform</label>
            <input
              type="text"
              id="connectionPlatform"
              {...register("connectionPlatform")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-full mb-6">
          <div>
            <label htmlFor="accessRequirement" className="block mb-2 font-medium">Access Requirement</label>
            <input
              type="text"
              id="accessRequirement"
              {...register("accessRequirement")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
          <div>
            <label htmlFor="sourceOfInfo" className="block mb-2 font-medium">Source of Information</label>
            <input
              type="text"
              id="sourceOfInfo"
              {...register("sourceOfInfo")}
              className="border border-[#e5e5e5] w-full h-14 rounded-3xl px-6"
            />
          </div>
        </div>

        <label htmlFor="recognition" className="block mb-2 font-medium">Special Recognition/Achievements</label>
        <textarea
          id="recognition"
          {...register("recognition")}
          className="border border-[#e5e5e5] w-full max-w-[599px] rounded px-6 mb-6 pt-4 h-[134px]"
        />

        <label htmlFor="usp" className="block mb-2 font-medium">Unique Selling Points</label>
        <textarea
          id="usp"
          {...register("usp")}
          className="border border-[#e5e5e5] w-full max-w-[599px] rounded px-6 mb-6 pt-4 h-[134px]"
        />

        <label htmlFor="additionalInfo" className="block mb-2 font-medium">Additional Information</label>
        <textarea
          id="additionalInfo"
          {...register("additionalInfo")}
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
            {submitting ? "Updating..." : "Update Connector"}
          </button>
        </div>
      </form>
    </div>
  );
}
