import React from "react";
import { Image, Space, Badge, Typography } from "antd";

function AuthFooter() {
  return (
    <div className="AppFooter" style={{}}>
      <Typography.Link
        style={{ color: "#FFFFFF", fontSize: 10, fontWeight: "200" }}
      >
        (c)2020 Palm Media. All Rights
      </Typography.Link>

      <Typography.Link
        style={{ color: "#FFFFFF", fontSize: 10, fontWeight: "200" }}
      >
        Privacy Policy . legal
      </Typography.Link>
    </div>
  );
}

export default AuthFooter;
