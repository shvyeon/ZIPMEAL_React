import React from 'react';

export default function LogIn() {
    return (
        <div>
            <div class="container mt-5 logIn">
      <img src="/images/logo.jpg" alt="zipmeal-logo" width="200" style="margin-bottom: 20px;"/></a>
  <h5 style="margin-bottom: 20px;">Welcome Back</h5>
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
    <p class="have-account mb-4 mt-2">Don't have an account?
      <a href="/sign-up">SIGN UP</a>
    </p>
  </div>
</div>
        </div>
    );
}

