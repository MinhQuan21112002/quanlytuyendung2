import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Box, Flex, Text ,Image} from "@chakra-ui/react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Both.css";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { loadJob } from '../../redux/Job-posting/Action';
import uuid from "react-uuid";
import { Link} from "react-router-dom";

const RoomAdd = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    // getData(typeOfProduct).then((res) => setProductArr(res));
    dispatch(loadJob());
  }, []);
  
  const data = useSelector((store) => store.job.data);
  console.log(data.length)
  const jobList=data.slice(data.length-3,data.length);
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);
  const navigate = useNavigate();

  // =============================================================================================================

  const accessToken = JSON.parse(localStorage.getItem("data")).access_token;
  const [roomName, setRoomName] = useState("");
  const [roomSkill, setRoomSkill] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [startDate, setLocation] = useState("");
  const [endDate, setEndDate] = useState("");
  const [linkmeet, setLinkmeet] = useState("");
  const [workingForm, setWorkingForm] = useState("");
  const [sex, setSex] = useState("");
  const [experience, setExperience] = useState("");
  const [detailLocation, setDetailLocation] = useState("");
  const [detailJob, setDetailJob] = useState("");
  const [requirements, setRequirements] = useState("");
  const [interest, setInterest] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit2 = async (e) => {

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      toast.warning("name is required!", {
        position: "top-center",
      });
    } else if (position === "") {
      toast.error("position is required!", {
        position: "top-center",
      });
    } 
    else if (salary === "") {
      toast.error("salary is required!", {
        position: "top-center",
      });
    }
    else if (workingForm === "") {
      toast.error("workingForm is required!", {
        position: "top-center",
      });
    }
    else if (location === "") {
      toast.error("location is required!", {
        position: "top-center",
      });
    }
    else if (language === "") {
      toast.error("language is required!", {
        position: "top-center",
      });
    }   else if (sex === "") {
      toast.error("sex is required!", {
        position: "top-center",
      });
    }   else if (number === "") {
      toast.error("number is required!", {
        position: "top-center",
      });
    }   else if (detailLocation === "") {
      toast.error("detailLocation is required!", {
        position: "top-center",
      });
    }
    else if (experience === "") {
      toast.error("experience is required!", {
        position: "top-center",
      });
    }  else if (detailJob === "") {
      toast.error("detailJob is required!", {
        position: "top-center",
      });
    }  else if (requirements === "") {
      toast.error("requirements is required!", {
        position: "top-center",
      });
    }  else if (interest === "") {
      toast.error("interest is required!", {
        position: "top-center",
      });
    }
    else if (image === "") {
      toast.error("image is required!", {
        position: "top-center",
      });
    }
    else {
      try {
        let data = JSON.stringify({
          name,
          position,
          language,
          location,
          salary,
          number,workingForm,sex,experience,
          detailLocation,
          detailJob,
          requirements,
          interest,
          image
          
        });
  
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `http://localhost:8080/job-posting`,
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
          toast.error("Upload Job Failed", {
            position: "top-center",
          });
        });
  
        toast.success("Upload Job Successfuly", {
          position: "top-center",
        });
        navigate("/job-posting");
      } catch (error) {
       
      }
    }
  }


  return (
    <>
      <session>
        <div className="main">
        
          <div className="form_data1" >
            <div className="form_heading">
              <h2
                style={{
                  color: "#000000",
                  fontSize: "30px",
                }}
              >
               Thêm phòng họp
              </h2>
            </div>

            
            <form>
            
              
              <div className="form_input">
                <label htmlFor="name">Tên công việc</label>
                <input
                  type="text"
                  // value={email}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  id="Name"
                />
                
              </div>
              

              <div className="form_input">
                <label htmlFor="position">Tên phòng họp</label>
                <input
                  type="text"
                  // value={username}
                  onChange={(e) => setPosition(e.target.value)}
                  name="position"
                  id="position"
                />
              </div>
              <div className="form_input">
                <label htmlFor="position">Kỹ năng</label>
                <input
                  type="text"
                  // value={username}
                  onChange={(e) => setPosition(e.target.value)}
                  name="position"
                  id="position"
                />
              </div>

              <div className="form_input">
                <label htmlFor="position">Mô tả phòng</label>
                <input
                  type="text"
                  // value={username}
                  onChange={(e) => setPosition(e.target.value)}
                  name="position"
                  id="position"
                />
              </div>


              <div className="form_input">
                <label htmlFor="position">Ngày bắt đầu </label>
                <input
                  type="text"
                  // value={username}
                  onChange={(e) => setPosition(e.target.value)}
                  name="position"
                  id="position"
                />
              </div>

              

      

              <div className="form_input">
                <label htmlFor="position">Ngày kết thúc</label>
                <input
                  type="text"
                  // value={username}
                  onChange={(e) => setPosition(e.target.value)}
                  name="position"
                  id="position"
                />
              </div>

              <div className="form_input">
                <label htmlFor="position">Link Meet phòng</label>
                <input
                  type="text"
                  // value={username}
                  onChange={(e) => setPosition(e.target.value)}
                  name="position"
                  id="position"
                />
              </div>
             
              <button onClick={handleSubmit} className="btn3">
                Thêm phòng
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </session>
    </>
  );
};

export default RoomAdd;
