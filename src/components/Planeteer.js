import React, {useState} from "react";

function Planeteer({planeteer, conditionallyRender}) {

  // const [render, setRender] = useState(true)

  function basedinUSA() {
    if (planeteer.fromUSA === true) {
      return 'USA-based'
    }
    else {
      return 'Working overseas'
    }
  }

  //{planeteer.clicked ? <p className="card__text">{planeteer.quote}</p> : <p className="card__text">{planeteer.bio}</p>}

  return (
    <li className="cards__item"
    onClick={conditionallyRender}>
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{planeteer.clicked === true ? planeteer.quote : planeteer.bio}</p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>
              {
                basedinUSA(planeteer)
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
