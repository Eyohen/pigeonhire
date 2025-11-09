"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/app/utils/formatDate";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { createConnector } from "@/app/apis/connector";
import { toast } from "react-toastify";

export default function ConnectorPreview() {
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);
  const [connectorData, setConnectorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    // Load form data from localStorage
    try {
      const savedData = localStorage.getItem('connectorFormData');
      if (savedData) {
        setConnectorData(JSON.parse(savedData));
      }
    } catch (error) {
      console.error('Error loading connector data from localStorage:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = async () => {
    setFormLoading(true);
    try {
      const response = await createConnector(connectorData, token);
      console.log("createConnector", response);
      toast.success("Connector created successfully!");
      localStorage.removeItem('connectorFormData');
      router.push("/user");
    } catch (error) {
      console.log("Error creating connector:", error);
      toast.error(error?.response?.data?.msg || "Error creating connector. Please try again.");
    } finally {
      setFormLoading(false);
    }
  };

  if (loading) {
    return <div>Loading preview data...</div>;
  }

  if (!connectorData) {
    return (
      <div>
        <div>No connector data found. Please go back and complete the form.</div>
        <Link href="/user/list-connector">
          <button>Go Back to Form</button>
        </Link>
      </div>
    );
  }

  const fullName = `${connectorData.firstName || ''} ${connectorData.lastName || ''}`.trim();

  return (
    <div>
      <div>Preview</div>
      <br />

      <div className="w-full h-[136px] bg-[#FAFAFA] mb-4"></div>
      <br />

      <div className="grid grid-cols-[191px_auto] gap-x-4 gap-y-8 items-center [&>:nth-child(odd)]:text-[#8D8D8D] [&>:nth-child(even)]:text-lg [&>:nth-child(even)]:font-medium [&>:nth-child(even)]:leading-[140%]">
        <div>Name:</div>
        <div>{fullName || "Not provided"}</div>

        <div>Organization:</div>
        <div>{connectorData.communityName || "Not provided"}</div>

        <div>Description:</div>
        <div>{connectorData.description || "Not provided"}</div>

        <div>Role:</div>
        <div>{connectorData.role || "Not provided"}</div>

        <div>Source of Information:</div>
        <div>{connectorData.sourceOfInfo || "Not provided"}</div>

        <div>Location:</div>
        <div>
          {connectorData.location}
          {connectorData.state ? `, ${connectorData.state}` : ""}
        </div>

        <div>Contact information:</div>
        <div>{connectorData.phone || "Not provided"}</div>

        <div>Email:</div>
        <div>{connectorData.email || "Not provided"}</div>
      </div>

      <div className="w-full h-px bg-[#E5E5E5] my-6"></div>

      <div className="grid grid-cols-[191px_auto] gap-x-4 gap-y-8 items-center [&>:nth-child(odd)]:text-[#8D8D8D] [&>:nth-child(even)]:text-lg [&>:nth-child(even)]:font-medium [&>:nth-child(even)]:leading-[140%]">
        <div>Connection type:</div>
        <div>{connectorData.connectionType || "Not provided"}</div>

        <div>Post frequency:</div>
        <div className="flex gap-2">
          <div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">{connectorData.postFrequency ? `${connectorData.postFrequency} days/week` : "Not provided"}</div>
        </div>



        <div>Communication platform:</div>
        <div className="flex gap-2">
          <div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">{connectorData.connectionPlatform || "Not provided"}</div>
        </div>

        <div>Social media:</div>
        <div className="flex gap-2">
          {connectorData.instagram && <div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">Instagram

            {/* : {connectorData.instagram} */}

            </div>}
          {connectorData.twitter && <div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">Twitter
            {/* : {connectorData.twitter} */}
            </div>}
          {connectorData.linkedIn && <div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">LinkedIn
            {/* : {connectorData.linkedIn} */}
            </div>}
          {connectorData.whatsapp && <div className="text-lg font-medium bg-[#F5F5F5] border border-[#F6911F33] px-2 py-1.5 rounded-[18px]">WhatsApp
            {/* : {connectorData.whatsapp} */}
            </div>}
          {!connectorData.instagram && !connectorData.twitter &&
           !connectorData.linkedIn && !connectorData.whatsapp && "Not provided"}
        </div>

        <div>Special achievements:</div>
        <div>{connectorData.recognition || "Not provided"}</div>
      </div>

      <div className="w-full h-px bg-[#E5E5E5] my-6"></div>

      <div className="grid grid-cols-[191px_auto] gap-x-4 gap-y-8 items-center [&>:nth-child(odd)]:text-[#8D8D8D] [&>:nth-child(even)]:text-lg [&>:nth-child(even)]:font-medium [&>:nth-child(even)]:leading-[140%]">
      <div>Access requirements:</div>
      <div>{connectorData.accessRequirement || "Not provided"}</div>
        <div>Unique selling points:</div>
        <div>{connectorData.usp || "Not provided"}</div>

        <div>Additional information:</div>
        <div>{connectorData.additionalInfo || "Not provided"}</div>

        <div>Other contact information:</div>
        <div>{connectorData.otherContact || "Not provided"}</div>

        <div>Link to website:</div>
        <div>{connectorData.website || "Not provided"}</div>
      </div>

      <button onClick={handleSubmit} disabled={formLoading} className="w-full max-w-[429px] h-[50px] flex items-center justify-center gap-2.5 bg-[#df7c0d] rounded-[28px] font-medium text-lg text-white shadow-[0px_2px_8px_0px_#00000040_inset] border-none mx-auto mt-10 phone:w-[120px] phone:text-[11px] phone:h-8">
        {formLoading ? "Loading..." : "List"}
      </button>
    </div>
  );
}