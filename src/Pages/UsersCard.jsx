import React, { useState } from "react";
import TabletTiles from "./TabletTiles";
import LineData from "./LineChart";
import { HiChevronRight } from "react-icons/hi2";
import UserTiles from "./UserTiles";

function UsersCard({ title }) {
  const [currentTab, setCurrentTab] = useState(1);
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
            All Users
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
            13,040
          </div>
        </div>
        <div
          style={{
            height: 48,
            width: 123,
            backgroundColor: "#DEDEEB",
            borderRadius: 10,

            marginRight: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h6
            style={{
              color: "#B5B5C3",
              fontWeight: "500",
              fontSize: 14,
              paddingLeft: 20,
              marginTop: 15,
              // display: "flex",
              // flexDirection: "row",
            }}
          >
            View all <HiChevronRight />
          </h6>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          marginRight: 190,
        }}
      >
        <h6
          style={{ cursor: "pointer" }}
          className="label"
          onClick={() => setCurrentTab(1)}
        >
          Brands
        </h6>
        <h6
          style={{ cursor: "pointer" }}
          className="label"
          onClick={() => setCurrentTab(2)}
        >
          Influencers
        </h6>
        <h6
          style={{ cursor: "pointer" }}
          className="label"
          onClick={() => setCurrentTab(3)}
        >
          Affiliates
        </h6>
      </div>
      <div
        style={{
          height: 4,
          width: 83,
          backgroundColor: "#FF8700",
          marginLeft: 5,
          display: currentTab === 1 ? "block" : "none",
          position: "absolute",
          marginTop: -23,
        }}
      ></div>
      <div
        style={{
          height: 4,
          width: 83,
          backgroundColor: "#FF8700",
          marginLeft: 93,
          position: "absolute",
          display: currentTab === 2 ? "block" : "none",
          marginTop: -23,
        }}
      ></div>
      <div
        style={{
          height: 4,
          width: 83,
          backgroundColor: "#FF8700",
          marginLeft: 190,
          display: currentTab === 3 ? "block" : "none",
          position: "absolute",
          marginTop: -23,
        }}
      ></div>
      <div className="line"></div>
      <div className="tablehead"></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: -60,
          marginLeft: -60,
        }}
      >
        <h6 className="fullname">FULL NAME</h6>
        <h6 className="fullname">EMAIL</h6>
        <h6 className="fullname">STATUS</h6>
        <h6 className="fullname">SIGNUP DATE</h6>
        <h6 className="fullname">UNIQUE ID</h6>
        <h6 className="fullname">STATE</h6>
      </div>
      {/* <LineData /> */}
      <div style={{ marginTop: -30 }}>
        <UserTiles />
        <UserTiles />
        <UserTiles />
        <UserTiles />
        <UserTiles />
        <UserTiles />
        <UserTiles />
        <UserTiles />
        <UserTiles />
        <UserTiles />
      </div>
    </div>
  );
}

export default UsersCard;
