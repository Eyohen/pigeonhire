import React, { useState } from "react";
import { Image, Space, Badge, Typography } from "antd";
import { BellOutlined } from "@ant-design/icons";
// import { ReactComponent as Logo } from "../royaltilogo.svg";
import { menuItems } from "./menuItems";
import { SlMagnifier, SlBell } from "react-icons/sl";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import logo from "../Images/logo.png";

function Menu() {
  return menuItems.map((menu, index) => {
    return (
      <div
        key={index}
        style={{
          fontSize: 20,
          fontWeight: "300",
          color: "#FFA500",
          marginLeft: 60,
          marginTop: 30,
        }}
      >
        <div
          style={{
            marginLeft: -40,

            position: "absolute",
          }}
        >
          {menu.icon}
        </div>
        {menu.title}
      </div>
    );
  });
}

function DropDown() {
  return (
    <div
      style={{
        height: 300,
        width: 200,
        backgroundColor: "white",
        position: "absolute",
        marginTop: 10,
        marginLeft: -150,
        borderRadius: 20,
        boxShadow: ` 0px 0px 50px ${"#E8E8E8"}`,
      }}
    >
      <Menu />
    </div>
  );
}

function AppHeader() {
  const [openDrop, setOpenDrop] = useState(false);
  const drop = (openDrop) => {
    setOpenDrop(openDrop);
  };
  return (
    <div className="AppHeader">
      <div className="row">
        <img src={logo} className="App-logo" alt="" />
        <h6 className="title">Pigeonhire</h6>
        <div className="vertiline"></div>
        <h6 className="smalltitle">Administrator</h6>

        <SlMagnifier className="search" />
        <SlBell className="bell" />
        <div className="profile" onclick={drop}>
          <BsFillPersonFill className="icon" />
        </div>
      </div>
      {/* <Logo style={{ paddingLeft: 20 }} /> */}

      {/* <h3 style={{ color: "black", marginLeft: 20, fontSize: "100" }}>
        Administrator
      </h3>
      <Space>
        <Typography.Text style={{ color: "white" }}>
          <div onclick={drop}>What's New?</div>
        </Typography.Text>
        <Badge count={20} style={{ fontSize: "50%", width: 15, height: 20 }}>
          <BellOutlined style={{ color: "#888888" }} />
        </Badge>

        {openDrop ? <DropDown /> : null}
      </Space> */}
    </div>
  );
}

export default AppHeader;
