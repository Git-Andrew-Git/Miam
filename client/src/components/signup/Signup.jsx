import React, { useState } from "react";
import classes from "./signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/womaneating.jpg";
import { register } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://miam.onrender.com/auth/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });
      console.log(res);

      const data = await res.json();
      console.log(data);

      dispatch(register(data));
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className={classes.signUpContainer}>
      <div className={classes.signUpWrapper}>
        <div className={classes.signUpLeftSide}>
          <img src={img} alt="" className={classes.leftImg} />
        </div>
        <div className={classes.signUpRightSide}>
          <h2 className={classes.title}>Sign up</h2>
          <form
            action=""
            onSubmit={handleSignup}
            className={classes.signUpForm}
          >
            <input
              type="text"
              placeholder="Type username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Type email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Type password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={classes.submitBtn}>Sign up</button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
          {error && (
            <div className={classes.errorMessage}>
              Wrong credentials! Try different ones
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
