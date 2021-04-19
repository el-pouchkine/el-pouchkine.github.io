import { dataXpPro } from "../data/dataXpPro";

const XpPro = (props) => {
  const xp = dataXpPro[props.numberXpPro];

  return (
    <div className="card-container xp" key={xp.id}>
      <div className="card">
        <div className="head">
          <div className="startDate">
            <h4>{xp.moisDebut}</h4>
            <h2>{xp.anneeDebut}</h2>
          </div>
          <h3 className="poste">{xp.poste}</h3>
          <div className="endDate">
            <h4>{xp.moisFin}</h4>
            <h2>{xp.anneeFin}</h2>
          </div>
        </div>
        <div className="card-content">
          <p className="description">{xp.description}</p>
          <div className="entreprise">
            {xp.entreprises.map((item) => {
              return <span>| {item} </span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default XpPro;
