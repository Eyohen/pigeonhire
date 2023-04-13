import React from "react";
import Tablets from "./Tablets";
import UsersCard from "./UsersCard";

function Users() {
  return (
    <div className="users">
      <div style={{ display: "flex", flexDirection: "row", marginTop: 90 }}>
        <Tablets title="Signup Chart" numbers={"12,030"} />
        <UsersCard />
      </div>
    </div>
  );
}

export default Users;
