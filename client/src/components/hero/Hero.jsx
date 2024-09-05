import React from "react";
import classes from "./hero.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import manEating from "../../assets/man-having-his-meal.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>You crave delicious food</h2>
          <p className={classes.firstMsg}>
            But going out <span>costs time...?</span>
          </p>
          <p className={classes.secondMsg}>
            Try ordering <span>pizza</span> and other meal of
            <span> your choice</span> from our restaurant!
          </p>
          <p className={classes.desc}>
            Satisfaction of our clients is a top priority for our establishment.
          </p>
          <div className={classes.buttons}>
            <div className={classes.order}>
              {/* <button className={classes.buttonOrder}> */}
              <Link to="/cart" className={classes.buttonOrder}>
                Order now!
              </Link>
              {/* </button> */}
            </div>
            {/* <button className={classes.buttonSee}> */}
            <a href="#foods" className={classes.buttonSee}>
              See what's available <AiOutlineArrowDown />
            </a>
            {/* </button> */}
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEating} alt="" className={classes.manEatingImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
