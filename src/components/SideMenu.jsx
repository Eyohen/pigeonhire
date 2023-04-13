import React, { useState } from "react";
// import { Menu, Space } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  NotificationOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  MenuOutlined,
  FireOutlined,
  SoundOutlined,
  FileTextOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { PrimaryNav, MenuLink, Menu, Hamburger } from "./NavElement";
// const SideMenu = () => {
//   return (
//     <div className="SideMenu">
//       {/* <PrimaryNav> */}
//       <Hamburger />
//       <Menu>
//         <MenuLink to="/" activeStyle>
//           Home
//         </MenuLink>
//         <MenuLink to="/users" activeStyle>
//           About
//         </MenuLink>
//         <MenuLink to="/products" activeStyle>
//           Products
//         </MenuLink>
//         <MenuLink to="/blog" activeStyle>
//           Blog
//         </MenuLink>
//       </Menu>
//       {/* </PrimaryNav> */}
//     </div>
//   );
// };

function Menu({ text, icon, route }) {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);

  return (
    <NavLink
      className={({ isActive }) => (isActive ? "menu side_menu_bg" : "menu")}
      to={route}
    >
      <div className="menuicon">{icon}</div>

      <h6 className="menutext">{text}</h6>
    </NavLink>
  );
}

function SideMenu() {
  const navigate = useNavigate();
  const [isActive, setisActive] = useState(false);
  return (
    <div className="SideMenu">
      <div
        style={{
          color: "#888888",
          fontSize: 11,
          marginTop: 20,
          marginLeft: 20,
        }}
      ></div>
      <Menu text="Dashboard" icon={<AppstoreOutlined />} route={"/"} />
      <Menu text="All Users" icon={<UserOutlined />} route={"/users"} />
      <Menu
        text="Campaign"
        icon={<NotificationOutlined />}
        route={"/campaigns"}
      />
      <Menu
        text="Help Content"
        icon={<MenuOutlined />}
        route={"/help-content"}
      />
      <Menu text="Settings" icon={<SettingOutlined />} route={"/settings"} />
      {/* <Menu
        //{!isActive ? style={{ color: "#888888", fontSize: 11 }} : style={{ color: "#888888", fontSize: 11 }} }
        style={{ color: "#888888", fontSize: 11 }}
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined style={{ marginTop: -190 }} />,
            key: "/",
          },
          {
            label: "All Users",
            icon: <UserOutlined />,
            key: "/users",
          },
          {
            label: "Campaign",
            icon: <NotificationOutlined />,
            key: "/campaign",
          },
          {
            label: "Help Content",
            icon: <MenuOutlined />,
            key: "/help",
          },
          {
            label: "Settings",
            icon: <SettingOutlined />,
            key: "/settings",
          },
        ]}
      ></Menu> */}
    </div>
  );
}

export default SideMenu;
