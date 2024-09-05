import React, { useState } from "react";
import classes from "./login.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import img from "../../assets/womaneating2.jpg";
import { login } from "../../redux/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://miam.onrender.com/auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);

      dispatch(login(data));
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeftSide}>
          <img src={img} alt="" className={classes.leftImg} />
        </div>
        <div className={classes.loginRightSide}>
          <h2 className={classes.title}>Login</h2>
          <form action="" onSubmit={handleLogin} className={classes.loginForm}>
            <input
              type="email"
              name=""
              id=""
              placeholder="Type email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name=""
              placeholder="Type password"
              onChange={(e) => setPassword(e.target.value)}
              id=""
            />
            <button className={classes.submitBtn}>Login</button>
            <p>
              Don't have an account? <Link to="/signup">Sing up</Link>
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

export default Login;
