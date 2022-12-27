import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../partials/Hero";
import TopMeals from "../partials/TopMeals";

export default function Home() {
  const [mealkits, setMealkits] = useState();

  const callApi = async () => {
    axios.get("/main").then((res) => {
      setMealkits(res.data.mealkits);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="body-content">
      <Hero />
      {/* <!-- Content Section --> */}
      <h4 style={{ marginTop: "15px" }}>HOW IT WORKS</h4>
      <div className="row row-cols-1 row-cols-md-4 g-4 mb-3 How-it-works">
        <div className="col">
          <div className="card how-content">
            <img
              src={require("../../images/local_food.png")}
              class="card-img-top"
              alt="local_food"
            />
            <div class="card-body">
              <h4 class="card-title">Fresh</h4>
              <p class="card-text">
                <b style={{ color: "#5a8157" }}>ZIPMEAL</b>
                is trying to provide fresh food using Ontario Local Food.
                Moreover, we provide a variety of meal-kits using the best
                seasonal foods to eat.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card how-content">
            <img
              src={require("../../images/small_order.png")}
              class="card-img-top"
              alt="small-order"
            />
            <div class="card-body">
              <h4 class="card-title">Support Small Quantity Order</h4>
              <p class="card-text">
                <b style={{ color: "#5a8157" }}>ZIPMEAL</b>
                is available for individual orders as well as monthly
                subscription payments. Easily prepare today's meals Anytime,
                Anywhere.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card how-content">
            <img
              src={require("../../images/delivery.png")}
              class="card-img-top"
              alt="delivery"
            />
            <div class="card-body">
              <h4 class="card-title">Quick Delivery Service</h4>
              <p class="card-text">
                Sincerely prepared meal-kits are delivered in a package that
                maintains the freshest temperature. You can receive it the next
                day.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card how-content">
            <img
              src={require("../../images/cook.png")}
              class="card-img-top"
              alt="cook"
            />
            <div class="card-body">
              <h4 class="card-title">Easy to Cook</h4>
              <p class="card-text">
                You can enjoy the same feeling as dine-in at a restaurant with
                our simple recipes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Meals Section */}
      <div id="TopMeals">
        <h4>
          HIGHEST RATED <i class="fas fa-utensils"></i>
        </h4>
        <div class="card-group">
          {mealkits && mealkits.map((item, idx) => <TopMeals mealkit={item} />)}
        </div>
      </div>
    </div>
  );
}
