import React from "react";

export default function TopMeals({ mealkit }) {
  return (
    <>
      <div class="card mb-5 mealbox">
        <img
          src={require(`../../images/${mealkit.image_URL}`)}
          class="card-img-top"
          alt={mealkit.title}
        />
        {/* <img src="/Images/{{image_URL}}" class="card-img-top" alt="{{title}}" /> */}
        <div class="card-body">
          <h5 class="card-title">
            <b>{mealkit.title}</b>
          </h5>
          <p class="card-text" style={{ fontSize: "small" }}>
            {mealkit.included}
          </p>
          <p class="card-text">
            <small class="text-muted">{mealkit.price}</small>
          </p>
        </div>
      </div>
    </>
  );
}
