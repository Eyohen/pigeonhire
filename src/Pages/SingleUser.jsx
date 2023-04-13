import React from "react";
import Tablets from "./Tablets";
import UsersCard from "./UsersCard";
import SingleUserCard from "./SingleUserCard";

function SingleUser() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: 90 }}>
        <Tablets title="Signup Chart" numbers={"12,030"} />
        <SingleUserCard />
      </div>
      hello
    </div>
  );
}

export default SingleUser;
