"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, MenuItem, Select } from "@mui/material";
import Link from "next/link";
import DeleteModal from "./deleteModal";
import { getUserAnalytics } from "../apis/analyticsService"; // Adjust path as needed

export default function LeadsTable() {
  const [userType, setUserType] = useState("communities");
  const [anchorElFour, setAnchorElFour] = useState(null);
  const [open, setOpen] = useState(null);
  const [communityLeads, setCommunityLeads] = useState([]);
  const [connectorLeads, setConnectorLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const openerFour = Boolean(anchorElFour);
  const [deleteOpen, setDeleteOpen] = useState(false);

  // Fetch analytics data on component mount
  useEffect(() => {
    const fetchLeadsData = async () => {
      try {
        setLoading(true);
        const response = await getUserAnalytics();
        
        if (response.success) {
          const { detailedData } = response.data;
          
          // Filter leads by type
          const communityLeadsData = detailedData.leads.data.filter(
            lead => lead.leadType === 'community' && lead.community
          );
          
          const connectorLeadsData = detailedData.leads.data.filter(
            lead => lead.leadType === 'connector' && lead.connector
          );
          
          setCommunityLeads(communityLeadsData);
          setConnectorLeads(connectorLeadsData);
        }
      } catch (err) {
        console.error('Error fetching leads:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeadsData();
  }, []);

  const handleCloseFour = () => {
    setAnchorElFour(null);
  };

  const handleClickFour = (event) => {
    setAnchorElFour(event.currentTarget);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };

  const getCommunityCategory = (communityType) => {
    const categoryMap = {
      'Cultural and Identity-Based Communities': 'Cultural',
      'Professional': 'Business',
      'Educational': 'Education',
      'Hobby and Interest-Based': 'Hobby',
    };
    return categoryMap[communityType] || 'Business';
  };

  return (
    <div className="w-full h-fit border border-[#EFEFEF] rounded-xl relative pb-2.5 max-phone:overflow-x-auto">
      <div className="flex items-center justify-between px-6 py-2 border-b border-[#EFEFEF] bg-[#FAFAFA] rounded-t-xl max-phone:w-[800px]">
        <div className="flex items-center gap-2.5 bg-[#F0F2F5] rounded-lg p-2">
          <button
            className={`title-18 font-medium min-w-[115px] h-[46px] outline-none rounded border-none px-3 ${
              userType === "communities"
                ? "border border-secondary bg-white shadow-[0_2px_2px_-2px_rgba(246,145,31,0.1)] text-text"
                : "bg-transparent text-gray"
            }`}
            onClick={() => setUserType("communities")}
          >
            Communities
          </button>
          {!userType && <div className="w-px h-[19px] bg-[#E4E7EC]"></div>}
          <button
            className={`title-18 font-medium min-w-[115px] h-[46px] outline-none rounded border-none px-3 ${
              userType === "connector"
                ? "border border-secondary bg-white shadow-[0_2px_2px_-2px_rgba(246,145,31,0.1)] text-text"
                : "bg-transparent text-gray"
            }`}
            onClick={() => setUserType("connector")}
          >
            Connector
          </button>
        </div>
        <div></div>
      </div>

      {userType === "communities" && (
        <table className="w-full title-14 text-black">
          <thead className="w-full border-b border-[rgba(177,177,177,0.4)]">
            <tr>
              <th className="py-5 bg-[#F5F5F5] text-center">Date</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Community name</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Contact</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Category</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Contacted</th>
              <th className="py-5 bg-[#F5F5F5] text-center pr-2.5">
                <Image
                  src={"/assets/icons/more.svg"}
                  width={16}
                  height={16}
                  alt=""
                />
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {loading ? (
              <tr className="border-b border-[#E5E5E5]">
                <td colSpan="6" className="py-5 bg-white text-center">Loading...</td>
              </tr>
            ) : communityLeads.length > 0 ? (
              communityLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-[#E5E5E5]">
                  <td className="py-5 bg-white text-center">{formatDate(lead.createdAt)}</td>
                  <td className="py-5 bg-white text-center">{lead.community?.name || 'N/A'}</td>
                  <td className="py-5 bg-white text-center">{lead.community?.email || 'N/A'}</td>
                  <td className="py-5 bg-white text-center">{getCommunityCategory(lead.community?.communityType)}</td>
                  <td className="py-5 bg-white text-center">{lead.status === 'contacted' ? '✓' : ''}</td>
                  <td className="py-5 bg-white text-center pr-2.5 cursor-pointer" onClick={handleClickFour}>
                    <Image
                      src={"/assets/icons/more.svg"}
                      width={16}
                      height={16}
                      alt=""
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-b border-[#E5E5E5]">
                <td colSpan="6" className="py-5 bg-white text-center">
                  No community leads data found
                </td>
              </tr>
            )}

            <Menu
              id="basic-menu"
              anchorEl={anchorElFour}
              open={openerFour}
              onClose={handleCloseFour}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link href={"/user/manage-network/community/edit/1"}>
                <MenuItem
                  sx={{
                    width: "18.4rem",
                    fontSize: "1.4rem",
                    fontFamily: "Inter",
                    fontWeight: "500",
                    backgroundColor: "#fff !important",

                    "&:hover": {
                      color: "#063",
                      backgroundColor: "#fff",
                    },
                  }}
                  className="subMenu"
                >
                  Edit
                </MenuItem>
              </Link>
              <Link href={"/user/manage-network/community/1"}>
                <MenuItem
                  sx={{
                    width: "18.4rem",
                    fontSize: "1.4rem",
                    fontFamily: "Inter",
                    fontWeight: "500",
                    backgroundColor: "#fff !important",

                    "&:hover": {
                      color: "#063",
                      backgroundColor: "#fff",
                    },
                  }}
                  className="subMenu"
                >
                  View
                </MenuItem>
              </Link>
              <MenuItem
                sx={{
                  width: "18.4rem",
                  fontSize: "1.4rem",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  backgroundColor: "#fff !important",

                  "&:hover": {
                    color: "#063",
                    backgroundColor: "#fff",
                  },
                }}
                className="subMenu"
                onClick={() => {
                  handleCloseFour();
                  setOpen(true);
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </tbody>
        </table>
      )}
      {userType === "connector" && (
        <table className="w-full title-14 text-black">
          <thead className="w-full border-b border-[rgba(177,177,177,0.4)]">
            <tr>
              <th className="py-5 bg-[#F5F5F5] text-center">Date</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Connector name</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Role</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Contact</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Category</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Contacted</th>
              <th className="py-5 bg-[#F5F5F5] text-center pr-2.5">
                <Image
                  src={"/assets/icons/more.svg"}
                  width={16}
                  height={16}
                  alt=""
                />
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {loading ? (
              <tr className="border-b border-[#E5E5E5]">
                <td colSpan="7" className="py-5 bg-white text-center">Loading...</td>
              </tr>
            ) : connectorLeads.length > 0 ? (
              connectorLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-[#E5E5E5]">
                  <td className="py-5 bg-white text-center">{formatDate(lead.createdAt)}</td>
                  <td className="py-5 bg-white text-center">{`${lead.connector?.firstName || ''} ${lead.connector?.lastName || ''}`.trim() || 'N/A'}</td>
                  <td className="py-5 bg-white text-center">{lead.connector?.role || 'N/A'}</td>
                  <td className="py-5 bg-white text-center">{lead.connector?.email || 'N/A'}</td>
                  <td className="py-5 bg-white text-center">Business</td>
                  <td className="py-5 bg-white text-center">{lead.status === 'contacted' ? '✓' : ''}</td>
                  <td className="py-5 bg-white text-center pr-2.5 cursor-pointer" onClick={handleClickFour}>
                    <Image
                      src={"/assets/icons/more.svg"}
                      width={16}
                      height={16}
                      alt=""
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-b border-[#E5E5E5]">
                <td colSpan="7" className="py-5 bg-white text-center">
                  No connector leads data found
                </td>
              </tr>
            )}

            <Menu
              id="basic-menu"
              anchorEl={anchorElFour}
              open={openerFour}
              onClose={handleCloseFour}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link href={"/user/manage-network/connector/edit/1"}>
                <MenuItem
                  sx={{
                    width: "18.4rem",
                    fontSize: "1.4rem",
                    fontFamily: "Inter",
                    fontWeight: "500",
                    backgroundColor: "#fff !important",

                    "&:hover": {
                      color: "#063",
                      backgroundColor: "#fff",
                    },
                  }}
                  className="subMenu"
                >
                  Edit
                </MenuItem>
              </Link>
              <Link href={"/user/manage-network/connector/1"}>
                <MenuItem
                  sx={{
                    width: "18.4rem",
                    fontSize: "1.4rem",
                    fontFamily: "Inter",
                    fontWeight: "500",
                    backgroundColor: "#fff !important",

                    "&:hover": {
                      color: "#063",
                      backgroundColor: "#fff",
                    },
                  }}
                  className="subMenu"
                >
                  View
                </MenuItem>
              </Link>
              <MenuItem
                sx={{
                  width: "18.4rem",
                  fontSize: "1.4rem",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  backgroundColor: "#fff !important",

                  "&:hover": {
                    color: "#063",
                    backgroundColor: "#fff",
                  },
                }}
                className="subMenu"
                onClick={() => {
                  handleCloseFour();
                  setOpen(true);
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </tbody>
        </table>
      )}

      <DeleteModal open={open} setOpen={setOpen} />
    </div>
  );
}