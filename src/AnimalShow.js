import "./AnimalShow.css";
import { useState } from "react";
import bird from "./bird.svg";
import cat from "./cat.svg";
import cow from "./cow.svg";
import dog from "./dog.svg";
import gator from "./gator.svg";
import heart from "./heart.svg";
import horse from "./horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [click, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(click + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * click + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
