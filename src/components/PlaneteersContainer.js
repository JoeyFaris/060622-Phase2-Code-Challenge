import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planeteers, conditionallyRender}) {
  const planeteersComponents = planeteers.map((planeteer) => (
    <Planeteer
    key={planeteer.id}
    planeteer={planeteer}
    conditionallyRender={conditionallyRender}/>
  ))
  return (
    <ul className="cards">
      {planeteersComponents}
    </ul>
  );
}

export default PlaneteersContainer;
