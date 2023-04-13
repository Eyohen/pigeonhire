import React from "react";

function TabletTiles({ background }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 15,
          height: 50,
          backgroundColor: background,
          marginBottom: 10,
        }}
      >
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNPOPDCWiEvN0x11fc_02MzdhtzcLOwg-qg&usqp=CAU"
            alt=""
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              marginLeft: 20,
              marginTop: 20,
            }}
          />
          <div>
            <h5
              style={{
                color: "#333333",
                fontSize: 16,
                fontWeight: "400",
                marginTop: -40,
                marginLeft: 75,
              }}
            >
              John Smith
            </h5>
            <h6
              style={{
                color: "#ABADBF",
                fontSize: 13,
                fontWeight: "400",
                marginTop: -20,
                marginLeft: 77,
              }}
            >
              john.smith@wolfkit.com
            </h6>
          </div>
        </div>
        <div>
          <div
            style={{
              color: "#333333",
              fontSize: 16,
              fontWeight: "400",
              marginTop: -12,
              marginRight: 20,
            }}
          >
            D01093
          </div>
          <div
            style={{
              color: "#ABADBF",
              fontSize: 14,
              fontWeight: "300",
              marginTop: 6,
              marginRight: 20,
            }}
          >
            Unique ID
          </div>
        </div>
        <div>
          <div
            style={{
              color: "#333333",
              fontSize: 16,
              fontWeight: "400",
              marginTop: -12,
              marginRight: 50,
            }}
          >
            Lagos
          </div>
          <div
            style={{
              color: "#ABADBF",
              fontSize: 14,
              fontWeight: "300",
              marginTop: 6,
              marginRight: 50,
            }}
          >
            State
          </div>
        </div>
        {/* <div
          style={{
            color: "#333333",
            fontSize: 14,
            fontWeight: "300",
            marginTop: -36,
            marginRight: 20,
          }}
        >
          $4500.00
        </div> */}
      </div>
    </>
  );
}

export default TabletTiles;
