import React from "react";

function Tablets({ title, numbers }) {
  return (
    <div
      style={{
        height: 503,
        width: 345,
        backgroundColor: "white",
        // boxShadow: ` 3px 3px 3px 3px ${"#E8E8E8"}`,
        boxShadow: ` 0px 0px 50px ${"#E8E8E8"}`,
        borderRadius: 15,
        marginTop: 15,
        marginLeft: 25,
      }}
    >
      <div
        style={{
          color: "#3F4254",
          fontWeight: "600",
          fontSize: 18,
          paddingLeft: 20,
          marginTop: 15,
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#B5B5C3",
          fontWeight: "600",
          fontSize: 16,
          paddingLeft: 20,
          marginTop: 5,
        }}
      >
        {numbers}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 15,
          marginTop: 300,
        }}
      >
        <div className="brands">
          <h6 className="label">Brands</h6>
        </div>
        <div className="affiliates">
          <h6 className="label">Affiliates</h6>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 15,
          // marginTop: 300,
        }}
      >
        <div className="influence">
          <h6 className="label">Influencers</h6>
        </div>
        <div className="yet">
          <h6 className="yetlabel">Yet to onboard</h6>
        </div>
      </div>
    </div>
  );
}

export default Tablets;
