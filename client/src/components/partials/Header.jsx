import React from "react";

export default function Header() {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light NavigationBar">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img
              src={require("../../images/logo.jpg")}
              alt=""
              width="100"
              height="50"
              class="d-inline-block align-text-top"
            />
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item navi-left">
                <a class="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li class="nav-item navi-left">
                <a class="nav-link" href="/mealkit/onTheMenu">
                  ON THE MENU
                </a>
              </li>
            </ul>
            <div class="d-flex justify-content-end">
              <ul class="navbar-nav me-auto mb-lg-0">
                <li class="nav-item navi-right">
                  <a class="nav-link" href="/log-in" style={{ color: "white" }}>
                    LOG IN
                  </a>
                </li>
                <li class="nav-item navi-right">
                  <a
                    class="nav-link"
                    href="/sign-up"
                    style={{ color: "white" }}
                  >
                    SIGN UP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
