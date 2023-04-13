import React from "react";
import HistoryTiles from "./HistoryTiles";

function History() {
  return (
    <div className="history">
      <div style={{ marginTop: 40, fontSize: 20, fontWeight: "400" }}>
        Transaction History
      </div>
      <HistoryTiles
        type="withdrawn"
        bank="Union Bank"
        currency="USD"
        amount="USD-0.125"
      />
      <HistoryTiles
        type="withdrawn"
        bank="Access Bank"
        currency="Naira"
        amount="N-0.125"
      />
      <HistoryTiles
        type="paid to"
        bank="Zenith Bank"
        currency="Pounds"
        amount="E-0.125"
      />
      <HistoryTiles
        type="withdrawn"
        bank="Union Bank"
        currency="USD"
        amount="-0.125 USD"
      />
      <HistoryTiles
        type="withdrawn"
        bank="Union Bank"
        currency="USD"
        amount="-0.125 USD"
      />
    </div>
  );
}

export default History;
