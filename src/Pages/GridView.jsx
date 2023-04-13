import React, { useState } from "react";
import { TfiMapAlt, TfiLock, TfiUnlock } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

function GridView({ name, numbers, something }) {
  const navigate = useNavigate();
  const Locked = () => {
    navigate("/locked");
  };
  const [select, setSelect] = useState(true);

  // function Select(select) {
  //   setSelect(!select);
  // }
  return (
    <div
      onClick={Locked}
      className=""
      style={{
        height: 204,
        width: 223,
        backgroundColor: "white",
        // boxShadow: ` 3px 3px 3px 3px ${"#E8E8E8"}`,
        // boxShadow: ` 0px 0px 50px ${"#E8E8E8"}`,
        borderRadius: 15,
        marginTop: 30,
        marginLeft: 26,
        borderColor: select ? "white" : "#F69221",
        borderWidth: 1.5,
        borderStyle: "solid",
        //borderboo: 1.5,
      }}
    >
      {/* <{something}
        style={{
          fontSize: 40,
          fontWeight: "100",
          marginTop: 30,
          marginLeft: 25,
        }}
      /> */}
      {something}
      <h3
        style={{
          fontWeight: "600",
          fontSize: 50,
          color: "#F69221",
          borderRadius: 5,
          marginLeft: 25,
          marginTop: 15,
        }}
      >
        {numbers}
      </h3>

      <div
        style={{
          fontWeight: "600",
          fontSize: 15,
          color: "#B5B5C3",
          borderRadius: 5,
          marginLeft: 25,
          marginTop: -45,
        }}
      >
        {name}
      </div>
    </div>
  );
}
export default GridView;
