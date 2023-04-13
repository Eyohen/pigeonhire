import React from "react";
import TabletTiles from "./TabletTiles";
import LineData from "./LineChart";
import { HiChevronRight } from "react-icons/hi2";
import UserTiles from "./UserTiles";
import LockedTiles from "./LockedTiles";

function LockedCard({ title }) {
  return (
    <div
      style={{
        height: 570,
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
        <div>
          <div
            style={{
              color: "#012841",
              fontWeight: "600",
              fontSize: 18,
              paddingLeft: 20,
              marginTop: 0,
            }}
          >
            Locked Balance History
          </div>
          <div
            style={{
              color: "#B5B5C3",
              fontWeight: "600",
              fontSize: 16,
              paddingLeft: 20,
              marginTop: 0,
              // display: "flex",
              // flexDirection: "row",
            }}
          >
            Showing users and balance
          </div>
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          marginRight: 190,
        }}
      >
        <h6 className="label">Brands</h6>
        <h6 className="label">Influencers</h6>
        <h6 className="label"> Affiliates</h6>
      </div>
      <div className="line"></div> */}
      <div className="tablehead2"></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: -60,
          marginLeft: -60,
        }}
      >
        <h6 className="lockedname">NAME</h6>
        <h6 className="lockedusertype">USER TYPE</h6>
        <h6 className="lockedamount">AMOUNT</h6>
        {/* <h6 className="fullname">SIGNUP DATE</h6>
        <h6 className="fullname">UNIQUE ID</h6>
        <h6 className="fullname">STATE</h6> */}
      </div>
      {/* <LineData /> */}

      <div style={{ marginTop: -50 }}>
        <LockedTiles />
        <LockedTiles />
        <LockedTiles />
        <LockedTiles />
        <LockedTiles />
        <LockedTiles />
        <LockedTiles />
        <LockedTiles />
        <LockedTiles />
      </div>
    </div>
  );
}

export default LockedCard;
