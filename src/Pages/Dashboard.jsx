import React, { useState, useEffect } from "react";
import { Menu, Space, Typography, Card, Table } from "antd";
import { TfiMapAlt, TfiLock, TfiUnlock, TfiMoney } from "react-icons/tfi";
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
// import DataTable, { createTheme } from "react-data-table-component";
// import axios from "axios";
import GridView from "./GridView";
import Tablets from "./Tablets";
import TabletTiles from "./TabletTiles";
import Dashcard from "./Dashcard";
import Dashcard2 from "./Dashcard2";
import External from "./External";

function Dashboard() {
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
    <div className="flex">
      <External />
      <div className="dashboard">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 0,
            marginLeft: 0,
          }}
        >
          <GridView
            name="Onboarded Users"
            numbers="10.2K"
            something={
              <TfiUnlock
                style={{
                  fontSize: 40,
                  fontWeight: "100",
                  marginTop: 30,
                  marginLeft: 25,
                }}
              />
            }
          />
          <GridView
            name="Total Income"
            numbers="2.4M"
            something={
              <TfiMoney
                style={{
                  fontSize: 40,
                  fontWeight: "100",
                  marginTop: 30,
                  marginLeft: 25,
                }}
              />
            }
          />
          <GridView
            name="Available Balance"
            numbers="921K"
            something={
              <TfiUnlock
                style={{
                  fontSize: 40,
                  fontWeight: "100",
                  marginTop: 30,
                  marginLeft: 25,
                }}
              />
            }
          />
          <GridView
            name="Locked Balance"
            numbers="700K"
            something={
              <TfiLock
                style={{
                  fontSize: 40,
                  fontWeight: "100",
                  marginTop: 30,
                  marginLeft: 25,
                }}
              />
            }
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row", marginLeft: 0 }}>
          <Tablets title="Signup Chart" numbers={"12,030"} />
          <Dashcard />
        </div>
        <Dashcard2 />
        {/* <div style={{ display: "flex", flexDirection: "row", marginLeft: 350 }}> */}

        {/* <Dashcard2 /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
