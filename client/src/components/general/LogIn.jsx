import React from "react";
import Main from "../layouts/Main";

export default function LogIn() {
  return (
    <Main>
      <div class="container mt-5 logIn">
        <a>
          <img
            src={require("../../images/logo.jpg")}
            alt="zipmeal-logo"
            width="200"
            style={{ marginBottom: "20px" }}
          />
        </a>
        <h5 style={{ marginBottom: "20px" }}>Welcome Back</h5>
        <div class="row info">
          <p>
            <input type="text" placeholder="Email Address" />
          </p>
          <p>
            <input type="text" placeholder="Password" />
          </p>
        </div>
        <div>
          <button>LOG IN</button>
          <p class="have-account mb-4 mt-2">
            Don't have an account?
            <a href="/sign-up">SIGN UP</a>
          </p>
        </div>
      </div>
    </Main>
  );
}
