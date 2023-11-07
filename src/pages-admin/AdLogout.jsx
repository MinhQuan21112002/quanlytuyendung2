import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const AdLogout = () => {
  const navigate = useNavigate();
  localStorage.removeItem("data");
  window.location.replace('http://localhost:3000/');
  return(
    <div>

    </div>
  );
};

export default AdLogout;
