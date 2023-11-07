import {
    USER_INFO_REQUERST,
    USER_INFO_SUCCESS,
    USER_INFO_ERROR
} from './ActionType';
import axios from "axios";


export const loadUserInfo=(id)=>async (dispatch)=>{

    dispatch({type:USER_INFO_EQUERST});
       
        try {
            let response = await axios.put(`http://localhost:8080/user/${id}`);
            dispatch({type:USER_INFO_SUCCESS,payload : response.data.data});
      
        } catch (error) {
            // console.log("in the logi func catch");
            dispatch({type:USER_INFO_RROR,payload : error.message});
        }
}