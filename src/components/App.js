import React, {useEffect, useState} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers, setPlaneteers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
  fetch('http://localhost:8003/planeteers')
  .then((response) => response.json())
  .then((data) => setPlaneteers(data))
}, [])

  const showPlaneteers = planeteers.filter((planeteer) => {
  return planeteer.name.toLowerCase().includes(searchTerm.toLowerCase());
}); 

  function conditionallyRender(planeteer) {
  setPlaneteers(planeteers.map((p) => p.id === planeteer.id ? p : {...p, clicked: true}) )
  console.log('asdjlhbcna')
}

//function conditionalRender(planeteer) {
////  setPlaneteers(planeteers.map((p) => p.clicked === true ? p : {...p, clicked: false}) )}


  return (
    <div>
      <Header />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <RandomButton />
      <PlaneteersContainer planeteers={showPlaneteers} conditionallyRender={conditionallyRender}/>
    </div>
  );
}

export default App;
