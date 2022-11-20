import Logo from "/LogresAssets/img/logo.png";
import "/src/css/Logres.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage";
import HomePage from "../../Pages/HomePage";

const Login = () => {
  const cekEmail = localStorage.getItem("account");

  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleBtn = (e) => {
    e.preventDefault();
    console.log({ email, password });
    axios("https://63528ae6a9f3f34c37409536.mockapi.io/logres", {
      email: email,
      password: password,
    })
      .then((result) => {
        result.data.forEach((element) => {
          if (element.email == email && element.password == password) {
            console.log("succes");
            navigation(`/dashboard`);
            localStorage.setItem("account", email);
          }
        });
      })
      .catch((error) => {
        alert(error, "Error");
      });
  };
  return (
    <>
      <div>
        <section className="container">
          <div className="row">
            <div className="row">
              <div className="col text-center">
                <img
                  src={Logo}
                  alt="logo"
                  width="400rem"
                  className="logo-logres"
                />
              </div>
              <div className="col">
                {cekEmail ? (
                  <HomePage />
                ) : (
                  <form id="form">
                    <h1 className="text-center">LOGIN</h1>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email-login"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleEmail}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password-login"
                        value={password}
                        onChange={handlePassword}
                      />
                    </div>
                    <div className="text-center d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-success"
                        // style="--bs-bg-opacity: 0.5"
                        id="btn-login"
                        onClick={handleBtn}
                      >
                        Submit
                      </button>
                      <Link to={"/register"} style={{ textDecoration: "none" }}>
                        Belum punya akun?
                      </Link>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Login;
