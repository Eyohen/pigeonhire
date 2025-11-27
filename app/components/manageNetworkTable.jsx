"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import DeleteModal from "./deleteModal";
import { getUserCommunities } from "../apis/community";
import { getUserConnectors } from "../apis/connector";
import { useSelector } from "react-redux";

export default function ManageNetworkTable() {
  const { userInfo, token } = useSelector((state) => state.auth);
  const [userType, setUserType] = useState("communities");
  const [anchorElFour, setAnchorElFour] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [connectors, setConnectors] = useState([]);
  const [loading, setLoading] = useState(true);

  const openerFour = Boolean(anchorElFour);

  useEffect(() => {
    if (userInfo?.user?.id) {
      fetchData();
    }
  }, [userType, userInfo]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (userType === "communities") {
        console.log("=== DEBUGGING MANAGE NETWORKS ===");
        console.log("User ID:", userInfo?.user?.id);
        console.log("Token:", token ? "Present" : "Missing");

        const response = await getUserCommunities(userInfo?.user?.id, token);

        console.log("Full API Response:", response);
        console.log("Response data:", response?.data);
        console.log("Communities array:", response?.data?.communities);
        console.log("Number of communities:", response?.data?.communities?.length || 0);

        setCommunities(response?.data?.communities || []);
      } else {
        const response = await getUserConnectors(userInfo?.user?.id, token);
        setConnectors(response?.data?.connectors || []);
      }
    } catch (error) {
      console.error("Error fetching user networks:", error);
      console.error("Error details:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseFour = () => {
    setAnchorElFour(null);
    setSelectedItem(null);
  };

  const handleClickFour = (event, item) => {
    setAnchorElFour(event.currentTarget);
    setSelectedItem(item);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  };

  return (
    <div className="w-full h-fit border border-[#EFEFEF] rounded-xl relative pb-2.5 max-sm:overflow-x-auto">
      <div className="flex items-center justify-between px-6 py-2 border-b border-[#EFEFEF] bg-[#FAFAFA] rounded-t-xl max-sm:w-[800px]">
        <div className="flex items-center gap-2.5 bg-[#F0F2F5] rounded-lg p-2">
          <button
            className={`font-medium min-w-[115px] h-[46px] outline-none rounded border-none px-3 ${
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
            className={`font-medium min-w-[115px] h-[46px] outline-none rounded border-none px-3 ${
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
        <table className="w-full text-black">
          <thead className="w-full border-b border-[rgba(177,177,177,0.4)]">
            <tr>
              <th className="py-5 bg-[#F5F5F5] text-center">Date</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Community name</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Category</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Record Type</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Total profile view</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Contact clicks</th>
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
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : communities.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">
                  No communities found. <Link href="/user/list-community" className="text-primary hover:underline">Create one</Link>
                </td>
              </tr>
            ) : (
              communities.map((community) => (
                <tr key={community.id} className="border-b border-[#E5E5E5]">
                  <td className="py-5 bg-white text-center">{formatDate(community.createdAt)}</td>
                  <td className="py-5 bg-white text-center">{community.name}</td>
                  <td className="py-5 bg-white text-center">{community.communityInterest || 'N/A'}</td>
                  <td className="py-5 bg-white text-center">
                    {community.recordType === "owner record" ? (
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full whitespace-nowrap">
                        owner record
                      </span>
                    ) : community.recordType === "public record" ? (
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full whitespace-nowrap">
                        public record
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-5 bg-white text-center">{community.profileViews || 0}</td>
                  <td className="py-5 bg-white text-center">{community.contactClicks || 0}</td>
                  <td className="py-5 bg-white text-center pr-2.5 cursor-pointer" onClick={(e) => handleClickFour(e, community)}>
                    <Image
                      src={"/assets/icons/more.svg"}
                      width={16}
                      height={16}
                      alt=""
                    />
                  </td>
                </tr>
              ))
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
              <Link href={`/user/manage-network/community/edit/${selectedItem?.id}`}>
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
              <Link href={`/user/manage-network/community/${selectedItem?.id}`}>
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
                  setDeleteOpen(true);
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </tbody>
        </table>
      )}
      {userType === "connector" && (
        <table className="w-full text-black">
          <thead className="w-full border-b border-[rgba(177,177,177,0.4)]">
            <tr>
              <th className="py-5 bg-[#F5F5F5] text-center">Date</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Name</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Category</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Role</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Record Type</th>
              <th className="py-5 bg-[#F5F5F5] text-center">Contact clicks</th>
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
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : connectors.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-gray-500">
                  No connectors found. <Link href="/user/list-connector" className="text-primary hover:underline">Create one</Link>
                </td>
              </tr>
            ) : (
              connectors.map((connector) => (
                <tr key={connector.id} className="border-b border-[#E5E5E5]">
                  <td className="py-5 bg-white text-center">{formatDate(connector.createdAt)}</td>
                  <td className="py-5 bg-white text-center">{`${connector.firstName} ${connector.lastName}`}</td>
                  <td className="py-5 bg-white text-center">{connector.community?.communityInterest || 'N/A'}</td>
                  <td className="py-5 bg-white text-center">{connector.role}</td>
                  <td className="py-5 bg-white text-center">
                    {connector.recordType === "owner record" ? (
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full whitespace-nowrap">
                        owner record
                      </span>
                    ) : connector.recordType === "public record" ? (
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full whitespace-nowrap">
                        public record
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-5 bg-white text-center">{connector.contactClicks || 0}</td>
                  <td className="py-5 bg-white text-center pr-2.5 cursor-pointer" onClick={(e) => handleClickFour(e, connector)}>
                    <Image
                      src={"/assets/icons/more.svg"}
                      width={16}
                      height={16}
                      alt=""
                    />
                  </td>
                </tr>
              ))
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
              <Link href={`/user/manage-network/connector/edit/${selectedItem?.id}`}>
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
              <Link href={`/user/manage-network/connector/${selectedItem?.id}`}>
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
                  setDeleteOpen(true);
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </tbody>
        </table>
      )}

      <DeleteModal open={deleteOpen} setOpen={setDeleteOpen} />
    </div>
  );
}
