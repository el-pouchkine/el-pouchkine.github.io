import React from "react";
import { dataFormation } from "../data/dataFormation";

const Formation = (props) => {
  const formation = dataFormation[props.numberFormation];

  return (
    <div className="card-container formation" key={formation.id}>
      <div className="card hover">
        <div className="head">
          <h2>{formation.annee}</h2>
          <h3>{formation.intitule}</h3>
        </div>
        <div className="card-content">
          <p className="description">{formation.description}</p>
          <p className="etablissement">{formation.etablissement}</p>
          <p className="ville">{formation.ville}</p>
        </div>
      </div>
    </div>
  );
};
export default Formation;
