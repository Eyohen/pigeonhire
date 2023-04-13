import { NodeExpandOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import { Checkbox } from "antd";

function Login() {
  const [labelName, setLabelName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [workSpace, setWorkSpace] = useState("");
  const [isSubmit, setIsSubmit] = useState("");
  const [buttonColor, setButtonColor] = useState(false);

  //const { name, email } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonColor(!buttonColor);
  };
  return (
    <div className="login">
      <h2 style={{ paddingTop: 30 }}>Set up your account</h2>
      <h5
        style={{
          color: "#888888",
          fontSize: 13,
          fontWeight: 320,
          marginTop: 0,
          paddingBottom: 10,
        }}
      >
        Please fill in the details below to create your Royalti <br></br>
        account
      </h5>
      <div>
        <form className="container" style={{ marginLeft: 80 }}>
          <div className="field">
            <label
              style={{
                color: "#333333",
                fontSize: 13,
                fontWeight: "320",
              }}
            >
              Label name
            </label>
            <input
              className="form-control"
              id="inputID"
              style={{
                borderWidth: 1,
                borderRadius: 4,
                width: 441,
                height: 32,
                borderColor: "#D0F0C0",
                marginBottom: 20,
              }}
              type="text"
              name="labelname"
              placeholder="Enter label name"
              value={labelName}
              onChange={(e) => setLabelName(e.target.value)}
            />
          </div>
          <div className="field">
            <label
              style={{
                color: "#333333",
                fontSize: 13,
                fontWeight: "320",
                // paddingLeft: 40,
              }}
            >
              Email address
            </label>
            <input
              className="form-control"
              style={{
                borderWidth: 1.2,
                borderRadius: 4,
                width: 441,
                height: 32,
                borderColor: "#D0F0C0",
                marginBottom: 20,
              }}
              type="text"
              id="inputID"
              name="labelname"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label
              style={{
                color: "#333333",
                fontSize: 13,
                fontWeight: "320",
                // paddingLeft: 40,
              }}
            >
              Company name
            </label>
            <input
              className="form-control"
              style={{
                borderWidth: 1.2,
                borderRadius: 4,
                width: 441,
                height: 32,
                borderColor: "#D0F0C0",
                marginBottom: 20,
              }}
              type="text"
              id="inputID"
              name="labelname"
              placeholder="Enter company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="field">
            <label
              style={{
                color: "#333333",
                fontSize: 13,
                fontWeight: "320",
                // paddingLeft: 40,
              }}
            >
              Workspace url
            </label>
            <input
              className="form-control"
              style={{
                borderWidth: 1.2,
                borderRadius: 4,
                width: 441,
                height: 32,
                borderColor: "#D0F0C0",
                marginBottom: 20,
              }}
              type="text"
              id="inputID"
              name="labelname"
              placeholder="www.royalti.com/your-workspace"
              value={workSpace}
              onChange={(e) => setWorkSpace(e.target.value)}
            />
          </div>
          <Checkbox
            style={{
              fontWeight: "300",
              fontSize: 12,
              color: "#888888",
            }}
            className="my-checkbox"
          >
            By clicking this you hereby accept our
            <a
              href="https://www.google.com"
              style={{ marginLeft: 3, color: "#006666" }}
            >
              terms & conditions
            </a>
          </Checkbox>
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              borderWidth: 0,

              marginTop: 40,
              width: 441,
              height: 35,
              backgroundColor: buttonColor ? "#006666" : "#ACE1AF",
              // opacity: 0.5,
              color: "#ffffff",
              borderRadius: 4,
            }}
          >
            Sign Up
          </button>
        </form>
        <h6 style={{ marginLeft: 190, fontSize: 13, fontWeight: 320 }}>
          Already have an account?
          <a href="#" style={{ color: "#006666", marginLeft: 5 }}>
            Login
          </a>
        </h6>
      </div>

      <div
        style={{
          width: 216,
          height: 35,
          borderWidth: 1.5,
          border: "1px #000",
          border: "1px solid #ACE1AF",
          //opacity: 0.5,
          backgroundColor: "#fff",
          borderRadius: 4,
          marginLeft: -200,
        }}
      >
        <h5
          style={{
            fontWeight: "500",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Sign up with Google
        </h5>
      </div>
      <div
        style={{
          width: 216,
          height: 35,
          borderWidth: 1.5,
          border: "1px #000",
          border: "1px solid #ACE1AF",
          //opacity: 0.5,
          backgroundColor: "#fff",
          borderRadius: 4,
          marginLeft: 250,
          marginTop: -37,
        }}
      >
        <h5
          style={{
            fontWeight: "500",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Sign up with Facebook
        </h5>
      </div>
    </div>
  );
}

export default Login;
