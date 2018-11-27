import React from "react";

import PizzaImage from "../../assets/Pizza.jpg";
import classes from "./PizzaImage.css";

const pizzaImage = props => (
  <div className={classes.PizzaImage}>
    <img src={PizzaImage} className={classes.PizzaImage} alt="" />
  </div>
);

export default pizzaImage;
