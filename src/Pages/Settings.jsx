import React, { useState } from "react";
import { Menu, Space, Typography, Card, Table } from "antd";
import {
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
  CreditCardOutlined,
  BankOutlined,
  EditOutlined,
} from "@ant-design/icons";

import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import LinkedAccount from "./LinkedAccount";

function Settings() {
  const navigate = useNavigate();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [nick, setNick] = useState("");
  const [phone, setPhone] = useState("");
  const [usertype, setUserType] = useState("");
  const [email, setEmail] = useState("");

  const [buttonColor, setButtonColor] = useState(false);
  const [toggleaddress, setToggleAddress] = useState(false);
  const [togglebank, setToggleBank] = useState(false);
  const [togglecustom, setToggleCustom] = useState(false);

  //const { name, email } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonColor(!buttonColor);
  };

  const handleClickAddress = () => {
    setToggleAddress((toggleaddress) => !toggleaddress);
  };
  const handleClickBank = () => {
    setToggleBank((togglebank) => !togglebank);
  };
  const handleClickCustom = () => {
    setToggleCustom((togglecustom) => !togglecustom);
  };
  return (
    <div>
      <div className="">
        <LeftOutlined
          style={{ marginTop: 24, marginLeft: 0, color: "#556477" }}
        />
        <h3
          style={{
            marginTop: -15,
            marginLeft: 20,
            fontWeight: "300",
            fontSize: 13,
            color: "#556477",
          }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </h3>
      </div>
      <div
        className=""
        style={{
          marginTop: 0,
          marginLeft: 0,
          color: "#333333",
          fontWeight: "600",
          fontSize: 21,
        }}
      >
        Settings
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            height: 64,
            width: 64,
            borderRadius: 50,
            marginLeft: 0,
            marginTop: 45,
            backgroundColor: "#E7E9EE",
          }}
        ></div>

        <h5
          style={{
            marginLeft: 20,
            marginTop: 60,
            color: "#556477",
            fontWeight: "300",
            fontSize: 14,
          }}
        >
          Profile Picture
        </h5>
        <h5
          style={{
            marginLeft: -90,
            marginTop: 80,
            color: "#006666",
            fontWeight: "300",
            fontSize: 14,
          }}
        >
          Upload Image
        </h5>
      </div>

      <div
        style={{
          marginTop: 80,
          // color: "#006666",
          fontWeight: "400",
          fontSize: 18,
        }}
      >
        User Profile
      </div>

      <div>
        <form className="container" style={{ marginLeft: -50, marginTop: 30 }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="field">
              <label
                style={{
                  color: "#333333",
                  fontSize: 13,
                  fontWeight: "320",
                  // marginLeft: 30,
                }}
              >
                Your Name
              </label>
              <input
                className="form-control"
                id="inputID"
                style={{
                  borderWidth: 1,
                  borderRadius: 4,
                  width: 441,
                  height: 32,
                  borderColor: "#FFA500",
                  //   opacity: 0.2,
                  marginBottom: 20,
                }}
                type="text"
                name="fname"
                placeholder="Enter First name"
                value={fName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div className="field">
              <label
                style={{
                  color: "#333333",
                  fontSize: 13,
                  fontWeight: "320",
                  // paddingLeft: 40,
                }}
              >
                Email Address
              </label>
              <input
                className="form-control"
                style={{
                  borderWidth: 1.2,
                  borderRadius: 4,
                  width: 441,
                  height: 32,
                  borderColor: "#FFA500",
                  //   opacity: 0.2,
                  marginBottom: 20,
                }}
                type="text"
                id="inputID"
                name="lname"
                placeholder="Enter last Name"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="field">
              <label
                style={{
                  color: "#333333",
                  fontSize: 13,
                  fontWeight: "320",
                  // paddingLeft: 40,
                }}
              >
                Phone Number
              </label>
              <input
                className="form-control"
                style={{
                  borderWidth: 1.2,
                  borderRadius: 4,
                  width: 441,
                  height: 32,
                  borderColor: "#FFA500",
                  //   opacity: 0.2,
                  marginBottom: 20,
                }}
                type="text"
                id="inputID"
                name="labelname"
                placeholder="Enter Nickname"
                value={nick}
                onChange={(e) => setNick(e.target.value)}
              />
            </div>
            <div className="field">
              <label
                style={{
                  color: "#333333",
                  fontSize: 13,
                  fontWeight: "320",
                  // paddingLeft: 40,
                }}
              >
                New Password
              </label>
              <input
                className="form-control"
                style={{
                  borderWidth: 1.2,
                  borderRadius: 4,
                  width: 441,
                  height: 32,
                  borderColor: "#FFA500",
                  //   opacity: 0.2,
                  marginBottom: 20,
                }}
                type="text"
                id="inputID"
                name="labelname"
                placeholder="9062056518"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <div
        style={{
          marginTop: 80,
          // color: "#006666",
          fontWeight: "400",
          fontSize: 18,
        }}
      >
        Preferences
      </div>
      <div>
        <form className="container" style={{ marginLeft: -50, marginTop: 30 }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="field">
              <label
                style={{
                  color: "#333333",
                  fontSize: 13,
                  fontWeight: "320",
                  // marginLeft: 30,
                }}
              >
                Local Currency
              </label>
              <input
                className="form-control"
                id="inputID"
                style={{
                  borderWidth: 1,
                  borderRadius: 4,
                  width: 441,
                  height: 32,
                  borderColor: "#FFA500",
                  //   opacity: 0.2,
                  marginBottom: 20,
                }}
                type="text"
                name="fname"
                placeholder="Enter First name"
                value={fName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div className="field">
              <label
                style={{
                  color: "#333333",
                  fontSize: 13,
                  fontWeight: "320",
                  // paddingLeft: 40,
                }}
              >
                Time Zone
              </label>
              <input
                className="form-control"
                style={{
                  borderWidth: 1.2,
                  borderRadius: 4,
                  width: 441,
                  height: 32,
                  borderColor: "#FFA500",
                  //   opacity: 0.2,
                  marginBottom: 20,
                }}
                type="text"
                id="inputID"
                name="lname"
                placeholder="Enter last Name"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>
          {/* <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="field">
              <label
                style={{
                  color: "#333333",
                  fontSize: 13,
                  fontWeight: "320",
                  // paddingLeft: 40,
                }}
              >
                Phone Number
              </label>
              <input
                className="form-control"
                style={{
                  borderWidth: 1.2,
                  borderRadius: 4,
                  width: 441,
                  height: 32,
                  borderColor: "#FFA500",
                  //   opacity: 0.2,
                  marginBottom: 20,
                }}
                type="text"
                id="inputID"
                name="labelname"
                placeholder="Enter Nickname"
                value={nick}
                onChange={(e) => setNick(e.target.value)}
              />
            </div>
            <div className="field">
              <label
                style={{
                  color: "#333333",
                  fontSize: 13,
                  fontWeight: "320",
                  // paddingLeft: 40,
                }}
              >
                New Password
              </label>
              <input
                className="form-control"
                style={{
                  borderWidth: 1.2,
                  borderRadius: 4,
                  width: 441,
                  height: 32,
                  borderColor: "#FFA500",
                  //   opacity: 0.2,
                  marginBottom: 20,
                }}
                type="text"
                id="inputID"
                name="labelname"
                placeholder="9062056518"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div> */}
        </form>
      </div>
      <div
        style={{
          marginTop: 80,
          // color: "#006666",
          fontWeight: "400",
          fontSize: 18,
        }}
      >
        Linked Accounts or Cards
      </div>
      <LinkedAccount type={<CreditCardOutlined />} bank="Debit Card" />
      <LinkedAccount type={<BankOutlined />} bank="Diamond Bank" />
      <LinkedAccount type={<WalletOutlined />} bank="Bitcoin" />
    </div>
  );
}

export default Settings;
