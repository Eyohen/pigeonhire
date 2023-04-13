import React from "react";

function HistoryTiles({ type, currency, bank, amount }) {
  return (
    <div
      style={{
        height: 50,
        width: 1000,
        backgroundColor: "black",
        borderRadius: 10,
        marginTop: 50,
        marginLeft: 200,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h6
          style={{
            color: "orange",
            marginLeft: 50,
          }}
        >
          {type}
        </h6>
        <h6
          style={{
            color: "orange",
            marginLeft: 200,
          }}
        >
          {currency}
        </h6>
        <h6
          style={{
            color: "orange",
            marginLeft: 250,
            position: "relative",
          }}
        >
          {bank}
        </h6>
        <h6
          style={{
            color: "orange",
            marginLeft: 260,
          }}
        >
          {amount}
        </h6>
      </div>
    </div>
  );
}

export default HistoryTiles;
