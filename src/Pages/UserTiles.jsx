import React from "react";
import { useNavigate } from "react-router-dom";

function UserTiles() {
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
        <h6 className="fullname">John Smith</h6>
        <h6 className="fullname" style={{ color: "#5E5ADB", marginLeft: 80 }}>
          Johnson@myemail.com
        </h6>
        <h6 className="fullname">
          <div
            style={{
              height: 20,
              width: 96,
              backgroundColor: "#E1FCEF",
              borderRadius: 5,
              marginTop: -20,
              marginLeft: -80,
            }}
          >
            <h6 style={{ color: "#14804A", marginLeft: 25, paddingTop: 5 }}>
              Onboarded
            </h6>
          </div>
        </h6>
        <h6 className="fullname" style={{ marginLeft: 40 }}>
          15 Mar 2021
        </h6>
        <h6 className="fullname" style={{ marginLeft: 130 }}>
          D302912
        </h6>
        <h6 className="fullname">Lagos</h6>
      </div>
      {/* <LineData /> */}
    </div>
  );
}

export default UserTiles;
