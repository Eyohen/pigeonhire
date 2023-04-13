import React, { useState } from "react";
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
} from "@ant-design/icons";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";

function Addnew() {
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
        Add New User
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
                First name
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
                Last Name
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
                Nick name
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
                placeholder="9062056518"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                User Type
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
                placeholder="Enter email address"
                value={usertype}
                onChange={(e) => setUserType(e.target.value)}
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
                Email address
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
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <h3
            style={{
              color: "#556477",
              fontSize: 15,
              fontWeight: "400",
              marginLeft: 50,
            }}
          >
            User Role
          </h3>
          {/* <Checkbox
            style={{
              fontWeight: "300",
              fontSize: 12,
              color: "#888888",
              marginLeft: 50,
            }}
            className="my-checkbox"
          > */}
          <PlusCircleOutlined
            style={{ marginTop: 4, marginLeft: 50, color: "#006666" }}
          />
          <h3
            style={{
              color: "#556477",
              fontSize: 15,
              fontWeight: "400",
              marginLeft: 70,
              marginTop: -17,
            }}
          >
            User
          </h3>
          <h4
            style={{
              color: " #828E9E",
              fontSize: 13,
              fontWeight: "300",
              marginLeft: 50,
              marginTop: -12,
            }}
          >
            For Artistes, Producers and other Songwriters. This user type can be
            granted permission to view specific Artiste profiles, Catalog items
            and Accounting; but not edit.
          </h4>
          <PlusCircleOutlined
            style={{ marginTop: 4, marginLeft: 50, color: "#006666" }}
          />
          <h3
            style={{
              color: "#556477",
              fontSize: 15,
              fontWeight: "400",
              marginLeft: 70,
              marginTop: -17,
            }}
          >
            Administrator
          </h3>
          <h4
            style={{
              color: " #828E9E",
              fontSize: 13,
              fontWeight: "300",
              marginLeft: 50,
              marginTop: -12,
            }}
          >
            For Team members requiring access to manage everything except the
            Workspace.
          </h4>
          <PlusCircleOutlined
            style={{ marginTop: 4, marginLeft: 50, color: "#006666" }}
          />
          <h3
            style={{
              color: "#556477",
              fontSize: 15,
              fontWeight: "400",
              marginLeft: 70,
              marginTop: -17,
            }}
          >
            Owner
          </h3>
          <h4
            style={{
              color: " #828E9E",
              fontSize: 13,
              fontWeight: "300",
              marginLeft: 50,
              marginTop: -12,
            }}
          >
            For Team members requiring access to manage everything except the
            Workspace.
          </h4>
          <h3
            style={{
              color: "#556477",
              fontSize: 15,
              fontWeight: "400",
              marginLeft: 50,
            }}
          >
            Address
          </h3>
          {toggleaddress ? (
            <div>
              <div className="field">
                <label
                  style={{
                    color: "#333333",
                    fontSize: 13,
                    fontWeight: "320",
                    // marginLeft: 30,
                  }}
                >
                  Address 1
                </label>
                <input
                  className="form-control"
                  id="inputID"
                  style={{
                    borderWidth: 1,
                    borderRadius: 4,
                    width: 936,
                    height: 32,

                    borderColor: "#FFA500",
                    marginBottom: 20,
                  }}
                  type="text"
                  name="fname"
                  placeholder="Enter First name"
                  value={fName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="field">
                  <label
                    style={{
                      color: "#333333",
                      fontSize: 13,
                      fontWeight: "320",
                      // marginLeft: 30,
                    }}
                  ></label>
                  <input
                    className="form-control"
                    id="inputID"
                    style={{
                      borderWidth: 1,
                      borderRadius: 4,
                      width: 441,
                      height: 32,
                      //   borderColor: "#D0F0C0",
                      borderColor: "#FFA500",
                      marginBottom: 20,
                    }}
                    type="text"
                    name="fname"
                    placeholder="Lagos"
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
                  ></label>
                  <input
                    className="form-control"
                    style={{
                      borderWidth: 1.2,
                      borderRadius: 4,
                      width: 441,
                      height: 32,
                      borderColor: "#FFA500",

                      marginBottom: 20,
                    }}
                    type="text"
                    id="inputID"
                    name="lname"
                    placeholder="Nigeria"
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {/* <div>
          <div className="field">
            <label
              style={{
                color: "#333333",
                fontSize: 13,
                fontWeight: "320",
                // marginLeft: 30,
              }}
            >
              Address 1
            </label>
            <input
              className="form-control"
              id="inputID"
              style={{
                borderWidth: 1,
                borderRadius: 4,
                width: 936,
                height: 32,
               borderColor: "#FFA500",
                marginBottom: 20,
              }}
              type="text"
              name="fname"
              placeholder="Enter First name"
              value={fName}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
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
               
              </label>
              <input
                className="form-control"
                id="inputID"
                style={{
                  borderWidth: 1,
                  borderRadius: 4,
                  width: 441,
                  height: 32,
                  borderColor: "#D0F0C0",
                  marginBottom: 20,
                }}
                type="text"
                name="fname"
                placeholder="Lagos"
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
               
              </label>
              <input
                className="form-control"
                style={{
                  borderWidth: 1.2,
                  borderRadius: 4,
                  width: 441,
                  height: 32,
                  borderColor: "#D0F0C0",
                  marginBottom: 20,
                }}
                type="text"
                id="inputID"
                name="lname"
                placeholder="Nigeria"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div> 
          </div> */}
          <buton onClick={handleClickAddress}>
            <PlusOutlined
              style={{ marginTop: 4, marginLeft: 50, color: "#FFA500" }}
            />
            <div
              style={{
                marginTop: -18,
                marginLeft: 70,
                //color: "#006666",
                color: "#FFA500",
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              Add Address
            </div>
          </buton>
          <h3
            style={{
              color: "#556477",
              fontSize: 15,
              fontWeight: "400",
              marginLeft: 50,
            }}
          >
            bank
          </h3>
          {togglebank ? (
            <div>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
              >
                <div className="field">
                  <label
                    style={{
                      color: "#333333",
                      fontSize: 13,
                      fontWeight: "320",
                      // marginLeft: 30,
                    }}
                  >
                    Bank Name
                  </label>
                  <input
                    className="form-control"
                    id="inputID"
                    style={{
                      borderWidth: 1,
                      borderRadius: 4,
                      width: 441,
                      height: 32,
                      //   borderColor: "#D0F0C0",
                      borderColor: "#FFA500",
                      marginBottom: 20,
                    }}
                    type="text"
                    name="fname"
                    placeholder="GTBank"
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
                    {/* Last Name */}
                  </label>
                  <input
                    className="form-control"
                    style={{
                      borderWidth: 1.2,
                      borderRadius: 4,
                      width: 441,
                      height: 32,
                      borderColor: "#FFA500",
                      marginBottom: 20,
                      marginTop: 18,
                    }}
                    type="text"
                    id="inputID"
                    name="lname"
                    placeholder="Noah Nelson"
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
                    {/* Nick name */}
                  </label>
                  <input
                    className="form-control"
                    style={{
                      borderWidth: 1.2,
                      borderRadius: 4,
                      width: 441,
                      height: 32,
                      borderColor: "#FFA500",
                      //borderColor: "#D0F0C0",
                      marginBottom: 20,
                    }}
                    type="text"
                    id="inputID"
                    name="labelname"
                    placeholder="017253562829299"
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
                    {/* Phone Number */}
                  </label>
                  <input
                    className="form-control"
                    style={{
                      borderWidth: 1.2,
                      borderRadius: 4,
                      width: 441,
                      height: 32,
                      borderColor: "#FFA500",
                      // borderColor: "#D0F0C0",
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
            </div>
          ) : (
            <div></div>
          )}

          <buton onClick={handleClickBank}>
            <PlusOutlined
              style={{ marginTop: 4, marginLeft: 50, color: "#FFA500" }}
            />
            <div
              style={{
                marginTop: -18,
                marginLeft: 70,
                color: "#FFA500",
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              Add Bank details
            </div>
          </buton>
          <h3
            style={{
              color: "#556477",
              fontSize: 15,
              fontWeight: "400",
              marginLeft: 50,
            }}
          >
            Custom Fields
          </h3>
          {togglecustom ? (
            <div>
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
                    {/* First name */}
                  </label>
                  <input
                    className="form-control"
                    id="inputID"
                    style={{
                      borderWidth: 1,
                      borderRadius: 4,
                      width: 441,
                      height: 32,
                      //   borderColor: "#D0F0C0",
                      borderColor: "#FFA500",
                      marginBottom: 20,
                    }}
                    type="text"
                    name="fname"
                    placeholder="E.g Email"
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
                    {/* Last Name */}
                  </label>
                  <input
                    className="form-control"
                    style={{
                      borderWidth: 1.2,
                      borderRadius: 4,
                      width: 441,
                      height: 32,
                      borderColor: "#FFA500",
                      //   borderColor: "#D0F0C0",
                      marginBottom: 20,
                    }}
                    type="text"
                    id="inputID"
                    name="lname"
                    placeholder="E.g jane@gmail.com"
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <buton onClick={handleClickCustom}>
            <PlusOutlined
              style={{ marginTop: 4, marginLeft: 50, color: "#FFA500" }}
            />
            <div
              style={{
                marginTop: -18,
                marginLeft: 70,
                color: "#FFA500",
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              Add Custom Fields
            </div>
          </buton>
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              borderWidth: 0,
              marginLeft: 50,

              marginTop: 40,
              width: 76,
              height: 42,
              //backgroundColor: buttonColor ? "#006666" : "#ACE1AF",
              //backgroundColor: "#5F9EA0",
              backgroundColor: "#FFA500",
              // opacity: 0.5,
              color: "#ffffff",
              borderRadius: 4,
            }}
            className="save"
          >
            Save
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              borderWidth: 0,
              marginLeft: 30,

              marginTop: 40,
              width: 76,
              height: 42,
              //backgroundColor: buttonColor ? "#006666" : "#ACE1AF",
              backgroundColor: "#FFFF00",
              opacity: 0.5,
              color: "#ffffff",
              borderRadius: 4,
            }}
            className="cancel"
          >
            Cancel
          </button>
        </form>
        <h6 style={{ marginLeft: 190, fontSize: 13, fontWeight: 320 }}>
          Already have an account?
          <a href="#" style={{ color: "#006666", marginLeft: 5 }}>
            Login
          </a>
        </h6>
      </div>
    </div>
  );
}

export default Addnew;
