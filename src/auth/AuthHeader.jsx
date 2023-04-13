import React, { useState } from "react";
import { Image, Space, Badge, Typography } from "antd";
import { BellOutlined } from "@ant-design/icons";
// import { ReactComponent as Logo } from "../royaltilogo.svg";
import { menuItems } from "./menuItems";
//const menuItems = require("menuItems");

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

function AuthHeader() {
  const [openDrop, setOpenDrop] = useState(false);
  const drop = (openDrop) => {
    setOpenDrop(openDrop);
  };
  return (
    <div className="AppHeader">
      {/* <Logo style={{ paddingLeft: 20 }} /> */}
      <h3 style={{ color: "white", marginLeft: 20 }}>PigeonHire Admin</h3>
      <Space>
        <Typography.Text style={{ color: "white" }}>
          <div onMouseOver={drop}>What's New?</div>
        </Typography.Text>
        <Badge count={20} style={{ fontSize: "50%", width: 15, height: 20 }}>
          <BellOutlined style={{ color: "#888888" }} />
        </Badge>

        {openDrop ? <DropDown /> : null}
      </Space>
    </div>
  );
}

export default AuthHeader;
