import React from "react";
import Main from "../layouts/Main";

export default function SignUp() {
  return (
    <Main>
      <div class="container mt-4 sign-up">
        <h2>SIGN UP</h2>
        <h6>Sign up and enjoy our fresh meal-kits</h6>
        <div class="row info">
          <p>
            <input type="text" placeholder="Name" />
          </p>
          <p>
            <input type="text" placeholder="Email Address" />
          </p>
          <p>
            <input type="text" placeholder="Address" />
          </p>
          <p>
            <input type="text" placeholder="City" />
          </p>
          <p>
            <input type="text" placeholder="Postal Code" />
          </p>
          <p>
            <input type="tel" placeholder="Phone number" />
          </p>
        </div>
        <div>
          <button>SIGN UP</button>
          <p class="have-account mb-4 mt-2">
            Have an account?
            <a href="/log-in">LOG IN</a>
          </p>
        </div>
      </div>
    </Main>
  );
}
