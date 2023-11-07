import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  localStorage.removeItem("data");
  navigate("/");
};

export default Logout;
