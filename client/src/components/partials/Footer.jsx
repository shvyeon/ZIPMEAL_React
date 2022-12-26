import React from "react";

export default function Footer() {
  return (
    <>
      <div class="container-fluid footer">
        <div class="row">
          <div class="col-md-4 mt-5 footerContact">
            <h4 style={{ marginBottom: "15px" }}>CONTACT US</h4>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../images/instagram.png")}
                alt="instagram-logo"
                width="20"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../images/facebook.png")}
                alt="facebook-logo"
                width="20"
              />
            </a>
            <a href="mailto:shyeon@myseneca.ca">
              <img
                src={require("../../images/gmail.png")}
                alt="mail-logo"
                width="20"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../images/twitter.png")}
                alt="twitter-logo"
                width="20"
              />
            </a>
          </div>
          <div class="col-md-4 mt-5 footerLogo">
            <a href="/">
              <img
                src={require("../../images/logo.jpg")}
                alt="zipmeal-logo"
                width="150"
              />
            </a>
            <div class="copyright mt-4">
              <h6>
                <i>&copy; Fall 2021, Seonhye Hyeon, WEB322 ZAA</i>
              </h6>
            </div>
          </div>
          <div class="col-md-4 mt-4 footerNavi">
            <a href="/">MAIN</a>
            <br />
            <br />
            <a href="/mealkit/onTheMenu">ON THE MENU</a>
            <br />
            <br />
            <a href="/log-in">LOG IN</a>
            <br />
            <br />
            <a href="/sign-up">SIGN UP</a>
          </div>
        </div>
      </div>
    </>
  );
}
