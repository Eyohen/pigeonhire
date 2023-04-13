import React, { useState, useEffect } from "react";
import { Menu, Space, Typography, Card, Table } from "antd";
import {
  AppstoreOutlined,
  PieChartOutlined,
  BarChartOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  FireOutlined,
  SoundOutlined,
  FileTextOutlined,
  WalletOutlined,
  PlusOutlined,
  LeftOutlined,
  PlusCircleOutlined,
  CalendarOutlined,
  DownOutlined,
  SearchOutlined,
  CloudDownloadOutlined,
  TableOutlined,
  DatabaseOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
// import DropDown from "../TimeDrop";
// import DataTable, { createTheme } from "react-data-table-component";
// import axios from "axios";

function GridView() {
  return (
    <div
      className=""
      style={{
        height: 187,
        width: 184,
        backgroundColor: "white",
        // boxShadow: ` 3px 3px 3px 3px ${"#E8E8E8"}`,
        boxShadow: ` 0px 0px 50px ${"#E8E8E8"}`,
        borderRadius: 15,
        marginTop: 30,
        marginLeft: 26,
      }}
    >
      <h3
        style={{
          fontWeight: "300",
          fontSize: 16,
          color: "#333333",
          borderRadius: 5,
          marginLeft: 20,
          marginTop: 25,
        }}
      >
        P-Square
      </h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NotificationOutlined
          style={{
            fontSize: 12,
            color: "#006666",

            marginLeft: 20,
          }}
        />
        <h6
          style={{
            fontWeight: "300",
            fontSize: 10,
            color: "#333333",
            marginLeft: 5,
            marginTop: 0,
          }}
        >
          5 Assets
        </h6>
        <TableOutlined
          style={{
            fontWeight: "300",
            fontSize: 10,
            color: "#006666",
            marginLeft: 5,
            marginTop: 0,
          }}
        />
        <h6
          style={{
            fontWeight: "300",
            fontSize: 10,
            color: "#333333",
            marginLeft: 5,
            marginTop: 0,
          }}
        >
          5 Products
        </h6>
      </div>
      <BarChartOutlined
        style={{
          fontSize: 12,
          color: "#006666",
          marginLeft: 20,
          marginTop: -90,
        }}
      />
      <h6
        style={{
          fontWeight: "300",
          fontSize: 10,
          color: "#333333",
          marginLeft: 38,
          marginTop: -14,
        }}
      >
        23M Revenue
      </h6>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNPOPDCWiEvN0x11fc_02MzdhtzcLOwg-qg&usqp=CAU"
          alt=""
          style={{
            width: 30,
            height: 30,
            borderRadius: 50,
            marginLeft: 20,
            marginTop: 10,
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
          style={{
            width: 30,
            height: 30,
            borderRadius: 50,
            marginLeft: -20,
            marginTop: 10,
          }}
        />
        <img
          src="https://img.freepik.com/free-photo/lovely-pretty-woman-embraces-herself-feels-good-comfortable-fullfilled_273609-40762.jpg"
          alt=""
          style={{
            width: 30,
            height: 30,
            borderRadius: 50,
            marginLeft: -20,
            marginTop: 10,
          }}
        />
        <img
          src="https://media.istockphoto.com/id/1181209880/photo/portrait-of-her-she-nice-attractive-charming-lovely-creative-wavy-haired-girl-creating.jpg?s=612x612&w=0&k=20&c=SVAHqs4Ye81WljXSdiuZD-IL4g-u4NJcPBPERIH4WPg="
          alt=""
          style={{
            width: 30,
            height: 30,
            borderRadius: 50,
            marginLeft: -20,
            marginTop: 10,
          }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNPOPDCWiEvN0x11fc_02MzdhtzcLOwg-qg&usqp=CAU"
          alt=""
          style={{
            width: 30,
            height: 30,
            borderRadius: 50,
            marginLeft: -20,
            marginTop: 10,
          }}
        />
      </div>
    </div>
  );
}

function Artistes() {
  const [toggle, setToggle] = useState(false);

  const handleClickTable = () => {
    setToggle((toggle) => !toggle);
  };
  const navigate = useNavigate();

  const [openDrop, setOpenDrop] = useState(false);

  const navigateAddNew = () => {
    navigate("/addnew");
  };

  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(4);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  // const columns = [
  //   // { name: "name", selector: (row) => row.name },
  //   // { name: "username", selector: (row) => row.username },
  //   // { name: "email", selector: (row) => row.email },
  //   { name: "ASSETS", selector: (row) => row.name },
  //   { name: "PRODUCTS", selector: (row) => row.username },
  //   { name: "STREAMS", selector: (row) => row.email },
  //   { name: "DOWNLOADS", selector: (row) => row.name },
  //   { name: "REVENUE", selector: (row) => row.username },
  //   { name: "ACTION", selector: (row) => row.email },
  // ];

  // const customStyles = {
  //   rows: {
  //     style: {
  //       minHeight: "42px", // override the row height
  //       minWidth: "1234px",
  //     },
  //   },
  //   headCells: {
  //     style: {
  //       paddingLeft: "8px", // override the cell padding for head cells
  //       paddingRight: "8px",
  //     },
  //   },
  //   cells: {
  //     style: {
  //       paddingLeft: "8px", // override the cell padding for data cells
  //       paddingRight: "8px",
  //       //backgroundColor: "#484848",
  //     },
  //   },
  // };

  // createTheme(
  //   "solarized",
  //   {
  //     text: {
  //       primary: "#268bd2",
  //       secondary: "#2aa198",
  //     },
  //     background: {
  //       default: "#002b36",
  //     },
  //     context: {
  //       background: "#cb4b16",
  //       text: "#FFFFFF",
  //     },
  //     divider: {
  //       default: "#073642",
  //     },
  //     action: {
  //       button: "rgba(0,0,0,.54)",
  //       hover: "rgba(0,0,0,.08)",
  //       disabled: "rgba(0,0,0,.12)",
  //     },
  //   },
  //   "dark"
  // );

  // useEffect(() => {
  //   fetchTableData();
  // }, []);

  // useEffect(() => {
  //   const result = user.filter((data) => {
  //     return data.name.toLowerCase().match(search.toLowerCase());
  //   });
  //   setFilterData(result);
  // }, [search]);

  // async function fetchTableData() {
  //   setLoading(true);
  //   // const URL = "https://jsonplaceholder.typicode.com/users";
  //   // const response = await fetch(URL);

  //   // const users = await response.json();
  //   // setData(users);
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     setUser(response.data);
  //     setFilterData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   setLoading(false);
  // }

  return (
    <div className="">
      <h2
        style={{
          fontWeight: "700",
          fontSize: 17,
          color: "#333333",
          marginTop: 50,
          marginLeft: 0,
        }}
      >
        Artistes
      </h2>
      <h3
        style={{
          fontWeight: "300",
          fontSize: 12,
          color: "#888888",
          marginTop: -5,
          marginLeft: -900,
        }}
      >
        Here's whats happening on your dashboard today
      </h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SearchOutlined
          style={{
            fontWeight: "300",
            fontSize: 14,
            color: "#888888",
            marginTop: 0,
            marginLeft: 0,
          }}
        />
        <h3
          style={{
            fontWeight: "300",
            fontSize: 12,
            color: "#888888",
            marginTop: 0,
            marginLeft: 10,
          }}
        >
          Search
        </h3>
        <h3
          style={{
            fontWeight: "300",
            fontSize: 12,
            color: "#888888",
            marginTop: 0,
            marginLeft: 75,
            position: "absolute",
          }}
        >
          Type: All
        </h3>
        <DownOutlined
          style={{
            fontWeight: "300",
            fontSize: 14,
            color: "#888888",
            marginTop: 0,
            marginLeft: 70,
          }}
        />
        <h3
          style={{
            fontWeight: "300",
            fontSize: 12,
            color: "#888888",
            marginTop: 0,
            marginLeft: 155,
            position: "absolute",
          }}
        >
          Artiste: All
        </h3>
        <DownOutlined
          style={{
            fontWeight: "300",
            fontSize: 14,
            color: "#888888",
            marginTop: 0,
            marginLeft: 80,
          }}
        />
        <TableOutlined
          style={{
            // fontWeight: "300",
            // fontSize: 14,
            color: "#888888",
            marginTop: 0,
            paddingLeft: 970,
            position: "absolute",
          }}
        />
        <buton onClick={handleClickTable}>
          <DatabaseOutlined
            style={{
              // fontWeight: "300",
              // fontSize: 14,
              color: "#006666",
              marginTop: 0,
              paddingLeft: 760,
              position: "absolute",
            }}
          />
        </buton>
        <button
          style={{
            height: 40,
            width: 120,
            borderRadius: 5,
            marginLeft: 820,
            marginTop: -15,
            backgroundColor: "#DBECEC",
          }}
          className="download"
          onClick={() => setOpenDrop((prev) => !prev)}
        >
          <CloudDownloadOutlined
            style={{ marginTop: 12, marginLeft: -80, color: "#006666" }}
          />
          <h6
            style={{
              marginTop: -15,
              marginLeft: -10,
              fontWeight: "400",
              fontSize: 12,
              color: "#006666",
            }}
          >
            Download
          </h6>
        </button>
        <button
          style={{
            height: 40,
            width: 120,
            backgroundColor: "#006666",
            borderRadius: 5,
            marginLeft: 20,
            marginTop: -15,
          }}
          className="button"
          onClick={navigateAddNew}
        >
          <PlusOutlined
            style={{
              color: "#FFFFFF",
              marginTop: 12,
              marginLeft: -60,
              backgroundColor: "#FFFFFFF",
            }}
          />
          <h6
            style={{
              color: "#FFFFFF",
              marginTop: -15,
              marginLeft: 20,
              fontWeight: "300",
              fontSize: 12,
            }}
          >
            Quick Add
          </h6>
        </button>
      </div>
      {toggle ? (
        <div>
          <div className="">
            <div
              className="card"
              style={{
                marginTop: 52,
              }}
            >
              {/* <div>
            <input
              type="text"
              placeholder="Enter label name"
              style={{ borderWidth: 1.5, borderColor: "black" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div> */}
              {/* <DataTable
                // title="Data"
                progressPending={loading}
                columns={columns}
                data={filterData}
                pagination
                selectableRows
                customStyles={customStyles}
                // theme="solarized"
                highlightOnHover
                pointerOnHover
              /> */}
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <GridView />
          <GridView />
          <GridView />
          <GridView />
          <GridView />
          <GridView />
        </div>
      )}
    </div>
  );
}

export default Artistes;
