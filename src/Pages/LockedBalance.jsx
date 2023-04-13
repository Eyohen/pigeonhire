import React from "react";
import Tablets from "./Tablets";
import Banner from "./Banner";

import LockedCard from "./LockedCard";

function LockedBalance() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: 90 }}>
        <Tablets title="Signup Chart" numbers={"12,030"} />
        <div>
          <Banner />
          <LockedCard />
        </div>
      </div>
    </div>
  );
}

export default LockedBalance;
