import React from "react";
import XpPro from "../components/XpPro";
import Formation from "../components/Formation";
import BottomButtons from "../components/BottomButtons";
import { dataFormation } from "../data/dataFormation";
import { dataXpPro } from "../data/dataXpPro";
import { motion } from "framer-motion";

const Frise = () => {
  const formations = dataFormation;
  const xpS = dataXpPro;

  const cards = document.querySelectorAll(".card");
  const sombre = document.querySelector(".sombre");

  cards.forEach((card) => {
    card.addEventListener("mouseover", (e) => {
      if (e) {
        sombre.style.visibility = "visible";
      }
    });

    card.addEventListener("mouseleave", (e) => {
      if (e) {
        sombre.style.visibility = "hidden";
      }
    });
  });

  return (
    <>
      <motion.div
        className="frise"
        initial={{ opacity: 1, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1, delay: 2}}
        exit={{ opacity: 1, scaleX: 0 }}
        transition={{ ease: "easeOut", duration: .5}}
      >
        <div className="sombre"></div>
        <div className="content">
          <div className="xp-pro">
            {xpS.map((xp) => (
              <XpPro numberXpPro={xp.id - 1} key={xp.id} />
            ))}
          </div>
          {/* <div className="ligne-xp"><h3>experience professionnelle</h3></div> */}
          <div className="espace"></div>
          {/* <div className="ligne-formation"><h3>formation</h3></div> */}
          <div className="formations">
            {formations.map((formation) => (
              <Formation
                numberFormation={formation.id - 1}
                key={formation.id}
              />
            ))}
          </div>
        </div>
      </motion.div>
      <BottomButtons left={"/"} right={"/competences"} />
    </>
  );
};

export default Frise;
