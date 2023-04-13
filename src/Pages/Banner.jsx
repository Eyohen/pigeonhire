import React from "react";

function Banner() {
  return (
    <div className="banner">
      <h6 className="bannertext">
        You have a total of{" "}
        <span style={{ color: "#FF69B4" }}>₦921,780.00</span> available <br />
        in <span style={{ color: "#FF69B4" }}>13</span> user’s wallet.
      </h6>
    </div>
  );
}

export default Banner;
