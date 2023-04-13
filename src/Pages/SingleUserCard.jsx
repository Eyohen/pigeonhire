import React from "react";
import TabletTiles from "./TabletTiles";
import LineData from "./LineChart";
import { SlArrowLeft, SlUser, SlEnvolope, SlCallOut } from "react-icons/sl";

import UserTiles from "./UserTiles";

function SingleUserCard({ title }) {
  return (
    <div
      style={{
        height: 743,
        width: 953,
        backgroundColor: "white",
        // boxShadow: ` 3px 3px 3px 3px ${"#E8E8E8"}`,
        boxShadow: ` 0px 0px 50px ${"#E8E8E8"}`,
        borderRadius: 15,
        marginTop: 15,
        marginLeft: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 15,
        }}
      >
        <div className="cube">
          <h6 className="leftarrow">
            <SlArrowLeft />
          </h6>
        </div>
        <div
          className="name"
          //   style={{
          //     color: "#012841",
          //     fontWeight: "600",
          //     fontSize: 18,
          //     paddingLeft: 20,
          //     marginTop: 0,
          //   }}
        >
          User Information
        </div>
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNPOPDCWiEvN0x11fc_02MzdhtzcLOwg-qg&usqp=CAU"
          alt=""
          style={{
            width: 152,
            height: 152,
            borderRadius: 15,
            marginLeft: 20,
            marginTop: 30,
          }}
        />
      </div>
      <div className="row">
        <h6 className="john">John Smith</h6>
        <div className="onboard">
          <h6 className="onboardtext">Onboarded</h6>
        </div>
      </div>

      <div className="row">
        <h6 className="person">
          <SlUser />
        </h6>

        <h6 className="persontext">Brand Owner</h6>
      </div>

      <div className="row">
        <h6 className="envelope">
          <SlEnvolope />
        </h6>

        <h6 className="envelopetext">Johnson@myemail.com</h6>
      </div>

      <div className="row">
        <h6 className="call">
          <SlCallOut />
        </h6>

        <h6 className="calltext">+234 816 809 4563</h6>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          marginRight: 190,
        }}
      >
        <h6 className="label">General</h6>
        <h6 className="label">Brands</h6>
      </div>
      <div className="line"></div>

      <div className="row">
        <div>
          <h6 className="nigeria">Nigeria</h6>
          <h6 className="country">country</h6>
        </div>
        <div>
          <h6 className="lagos">Lagos</h6>
          <h6 className="state">State</h6>
        </div>
        <div>
          <h6 className="lagos">D01093</h6>
          <h6 className="state">Unique ID</h6>
        </div>
      </div>
      <div>
        <h6 className="jakande">36, Abule-Agoro Bypass Street, Jakande</h6>
        <h6 className="address">Address</h6>
      </div>
      <div className="row">
        <div>
          <h6 className="three">300,000</h6>
          <h6 className="available">Available Balance</h6>
        </div>
        <div>
          <h6 className="zero">00.00</h6>
          <h6 className="locked">Locked Balance</h6>
        </div>
      </div>
      <div>
        <h6 className="jakande">
          Entertainment, Sales, Real Estate, Lifestyle
        </h6>
        <h6 className="address">Interest</h6>
      </div>
      <div className="row">
        <div>
          <h6 className="three">Abuja</h6>
          <h6 className="available">State of Interest</h6>
        </div>
        <div>
          <h6 className="zero">English, Pidgin, Igbo</h6>
          <h6 className="locked">Language of Interest</h6>
        </div>
      </div>
    </div>
  );
}

export default SingleUserCard;
