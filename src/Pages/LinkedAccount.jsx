import React from "react";
import {
  AppstoreOutlined,
  CreditCardOutlined,
  BankOutlined,
  EditOutlined,
  WalletOutlined,
} from "@ant-design/icons";

function LinkedAccount({ type, currency, bank, amount }) {
  return (
    <div
      style={{
        height: 50,
        width: 600,
        backgroundColor: "#FFA500",
        borderRadius: 10,
        marginTop: 50,
        marginLeft: 0,
        marginBottom: 50,
        //borderWidth: 1,
        //borderColor: "#FFA500",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            color: "white",
            marginLeft: 50,
            marginTop: 15,
          }}
        >
          {type}
        </div>

        <h6
          style={{
            color: "white",
            marginLeft: 30,
          }}
        >
          {bank}
        </h6>
        <h6
          style={{
            color: "white",
            marginLeft: 50,
            position: "relative",
          }}
        >
          {currency}Bank **************5421
        </h6>

        <EditOutlined
          style={{
            color: "white",
            marginLeft: 160,
            marginTop: 19,
          }}
        />
      </div>
    </div>
  );
}

export default LinkedAccount;
