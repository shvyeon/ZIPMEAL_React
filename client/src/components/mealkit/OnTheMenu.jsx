import axios from "axios";
import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";

export default function OnTheMenu() {
  const [mealkits, setMealkits] = useState();

  const callApi = async () => {
    axios.get("/main/mealkit/onTheMenu").then((res) => {
      setMealkits(res.data.mealkits);
    });
  };

  console.log(mealkits);
  useEffect(() => {
    callApi();
  }, []);

  return (
    <Main>
      <div id="onTheMenu">
        {mealkits &&
          mealkits.map((item, idx) => (
            <>
              <h4 key={idx} style={{ textAlign: "center" }}>
                {item.category}
              </h4>
              <div class="row row-cols-1 row-cols-md-2 g-5 mt-1">
                {item.mealkits.map((item, idx) => (
                  <>
                    <div class="col" key={idx}>
                      <div class="card">
                        <img
                          src={require(`../../images/${item.image_URL}`)}
                          class="card-img-top"
                          alt="{{title}}"
                        />
                        <div class="card-body">
                          <h5 class="card-title">
                            <b>{item.title}</b>
                          </h5>
                          <p class="card-text" style={{ fontSize: "small" }}>
                            {item.included}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </>
          ))}
      </div>
    </Main>
  );
}
