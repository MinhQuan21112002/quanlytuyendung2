import React, { useState } from "react";
import { Image } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import "./Both.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const UserInfo = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("data")).data;

  const accessToken = JSON.parse(localStorage.getItem("data")).access_token;
  
  const [passShow, setPassShow] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const [email, setEmail] = useState(user.email);
  const [fullName, setFullName] = useState(user.userInfo.fullName);
  const [address, setAddress] = useState(user.userInfo.address);
  const [phone, setPhone] = useState(user.userInfo.phone);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(oldPassword);
  console.log(newPassword1);
  console.log(newPassword2);    
 
  const submitHandlerPassword = async (e) => {
    e.preventDefault();
    if (oldPassword === "") {
      toast.error("Old password is required!", {
        position: "top-center",
      });
    } else if (oldPassword.length < 8) {
      toast.error("password must be 8 char!", {
        position: "top-center",
      });
    }
      else if (newPassword1 === "") {
      toast.error("New password is required!", {
        position: "top-center",
      });
    } else if (newPassword1.length < 8) {
      toast.error("password must be 8 char!", {
        position: "top-center",
      });
    } else if (newPassword2 === "") {
      toast.error("New password is required!", {
        position: "top-center",
      });
    } 
    else if (newPassword2.length < 8) {
      toast.error("password must be 8 char!", {
        position: "top-center",
      });
    } else {}


    let data = JSON.stringify({
      "password": oldPassword,
      "newPassword": newPassword1,
      "confirmPassword": newPassword2
    });

    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `http://localhost:8080/user/password`,
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${accessToken}`
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log("haha");
    })
    .catch((error) => {
      console.log(error);
      toast.error("Update Info Failed", {
        position: "top-center",
      });
    });

    toast.success("Update Password Successfuly", {
      position: "top-center",
    });
    navigate("/userInfo");
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(fullName);
    console.log(address); 
    console.log(phone );
    console.log(user.userInfo.id );
    console.log(accessToken);
    try{
      
      let data = JSON.stringify({
        fullName,
        email,
        phone,
        address
      });

      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `http://localhost:8080/user/${user.userInfo.id}`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${accessToken}`
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log("haha");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Update Info Failed", {
          position: "top-center",
        });
      });

      toast.success("Update Info Successfuly", {
        position: "top-center",
      });
      navigate("/userInfo");

  }
  catch (error) {
    
  }
}
  return (
    <section className="login_section">
  
      <div style={{ display: "flex" }}>
        <Box className="left_section" elevation={4}>
          <div style={{ marginLeft: "10px" }}>
            <h2>Thông tin cá nhân</h2>
            <Image mr={'8px'} w={'20px'} h={'20px'} src={user.userInfo.avatar} />
          
            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} />
              Username : {user.username}
            </p>

            <div className="form_input">
              
            <label htmlFor="email">  <p style={{marginRight: "5px" ,width:"130px"}}>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} />
              Email</p></label>
              
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
              />
            </div>
            <div className="form_input">
              
              <label htmlFor="fullName">  <p style={{marginRight: "5px",width:"130px" }}>
                <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} />
                Họ tên</p></label>
                
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  name="fullName"
                  id="fullName"
                />
              </div>
              <div className="form_input">
              
              <label htmlFor="address">  <p style={{marginRight: "5px" ,width:"130px"}}>
                <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} />
                Địa chỉ </p></label>
                
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  id="address"
                />
              </div>
              <div className="form_input">
              
              <label htmlFor="phone">  <p style={{marginRight: "5px",width:"130px" }}>
                <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} />
                Số điện thoại </p></label>
                
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  name="phone"
                  id="phone"
                  
                />
              </div>    
              <button className="btn-update" onClick={submitHandler} >
              Cập nhật thông tin
            </button>    
          </div>
          <div style={{ marginLeft: "0%", marginTop: "5%" ,width:"130px"}}>
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
            <p>Thay đổi mật khẩu</p>
          </div>
          <form>
          <div className="form_input">
              <label htmlFor="password">Mật khẩu cũ</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  name="oldPassword"
                  id="oldPassword"
                  placeholder="Enter Your Old password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="password">Nhập mật khẩu mới</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  value={newPassword1}
                  onChange={(e) => setNewPassword1(e.target.value)}
                  name="newPassword1"
                  id="newPassword1"
                  placeholder="Enter Your New password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="password">Nhập lại mật khẩu mới</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  value={newPassword2}
                  onChange={(e) => setNewPassword2(e.target.value)}
                  name="newPassword2"
                  id="newPassword2"
                  placeholder="Enter Your New password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn" onClick={submitHandlerPassword}>
              Cập nhật
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

export default UserInfo;
