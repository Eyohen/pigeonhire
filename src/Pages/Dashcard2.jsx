import React from "react";
import TabletTiles from "./TabletTiles";
import LineData from "./LineChart";
import { HiChevronRight } from "react-icons/hi2";
import { SlOptionsVertical } from "react-icons/sl";

function Dashcard2({ title }) {
  return (
    <div
      style={{
        height: 450,
        width: 985,
        backgroundColor: "white",
        // boxShadow: ` 3px 3px 3px 3px ${"#E8E8E8"}`,
        boxShadow: ` 0px 0px 50px ${"#E8E8E8"}`,
        borderRadius: 15,
        marginTop: 15,
        marginLeft: 20,
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
            Signup Chart
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
            Location
          </div>
        </div>
        <div
          style={{
            height: 48,
            width: 48,
            backgroundColor: "#DEDEEB",
            borderRadius: 10,

            marginRight: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <SlOptionsVertical
            style={{
              color: "#687076",
              fontWeight: "500",
              fontSize: 14,
              paddingLeft: 15,
              marginTop: 15,
              // display: "flex",
              // flexDirection: "row",
            }}
          />
        </div>
      </div>
      {/* <LineData /> */}
      {/* <TabletTiles />
      <TabletTiles />
      <TabletTiles />
      <TabletTiles />
      <TabletTiles /> */}
    </div>
  );
}

export default Dashcard2;
