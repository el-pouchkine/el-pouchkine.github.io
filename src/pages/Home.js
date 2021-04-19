import React from "react";
import BottomButtons from "../components/BottomButtons";
import { motion } from "framer-motion";

const Home = () => {
  // function superPhrase() {
  //   const phrase = "...Blanche, Vénus émerge, et c’est la Nuit.";
  //   const arrayPhrase = phrase.split("");
  //   const home = document.querySelector(".home");
  //   console.log(home);

  //   const phraseTarget = document.createElement("h1");
  //   phraseTarget.className = 'phraseTarget'
  //   // home.appendChild(phraseTarget)
  //   // const lettres = document.querySelectorAll('.h1 > ')

  //   arrayPhrase.forEach((item) => {
  //     const letter = document.createElement("i");
  //     letter.className = "letter";
  //     letter.style.content = item;
  //     phraseTarget.appendChild(letter);
  //   });

  //   console.log(phraseTarget);
  //   return phraseTarget
  // }

  return (
    <>
        <motion.div
          className="home"
          initial={{ opacity: 1, scaleX: 0}}
          animate={{ opacity: 1, scaleX: 1}}
          exit={{ opacity: 1, scaleX: 0}}
          transition={{duration: .8}}
        >
          <div class="content">
            <h1 className="phraseTarget">
              ...Blanche, Vénus émerge, et c’est la Nuit.
            </h1>
            <p>Paul Verlaine</p>
          </div>
        </motion.div>
        <BottomButtons right={"/experience"} />
    </>
  );
};

export default Home;
