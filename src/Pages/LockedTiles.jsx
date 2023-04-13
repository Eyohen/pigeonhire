import React from "react";
import { useNavigate } from "react-router-dom";

function LockedTiles() {
  const navigate = useNavigate();
  const UserTiles = () => {
    navigate("/singleuser");
  };
  return (
    <div onClick={UserTiles}>
      <div className="tablebody"></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: -60,
          marginLeft: -60,
          marginBottom: -40,
        }}
      >
        <h6 className="lockedname">John Smith</h6>
        <h6 className="brandowner">Brand Owner</h6>

        <h6 className="threehundred">₦300,000</h6>
      </div>
    </div>
  );
}

export default LockedTiles;
