import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import "./Both.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 3) {
      toast.error("password must be 4 char!", {
        position: "top-center",
      });
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);
        
        const { data} = await axios.post(
          "http://localhost:8080/auth/login",
          {
            email,
            password,
          },
          config
        );
        
        localStorage.setItem("data", JSON.stringify(data));
        console.log("user login succesfully done");
        
        if(JSON.parse(localStorage.getItem("data")).data!==null)
        {toast.success("User Login Successfuly", {
          position: "top-center",
        });
        window.location.replace('http://localhost:3000/');}
        else{
          toast.error("User Login Failed", {
            position: "top-center",
          });
        }

        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        const FError = error.response.data.message;
        console.log(FError);
        toast.error(FError, {
          position: "top-center",
        });
        setLoading(false);
      }
    }
  };
  return (
    <section className="login_section">
      <div style={{ display: "flex" }}>
        <Box className="left_section" elevation={4}>
          <div style={{ marginLeft: "10px" }}>
            <h2>New to Naukri?</h2>

            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> One
              click apply using naukri profile.
            </p>
            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> Get
              relevant job recommendations.
            </p>
            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} />{" "}
              Showcase profile to top companies and consultants.
            </p>
            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> Know
              application status on applied jobs.
            </p>
          </div>
          <div style={{ marginLeft: "0%", marginTop: "5%" }}>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button variant="outlined" style={{ marginLeft: "1%" }}>
                Register For Free
              </button>
            </Link>
          </div>
          <img
            src="https://static.naukimg.com/s/5/105/i/register.png"
            style={{ width: "40%", marginLeft: "45%", marginBottom: "10%" }}
            alt=""
          />
        </Box>
        <div className="form_data">
          <div className="form_heading">
            <p>Welcome Back, Log In</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email/username</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                placeholder="Enter Your email here "
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  placeholder="Enter Your password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn" onClick={submitHandler}>
              Login
            </button>
            <button className="btn1">Login With OTP </button>
            <div>
              <hr
                style={{
                  width: "120%",
                  marginLeft: "-20px",
                  marginTop: "30px",
                }}
              />
              <button className="btn2 ">
                {" "}
                <img
                  style={{ width: "5%", marginTop: "1%" }}
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                  alt=""
                />{" "}
                Login With Google{" "}
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Login;
