import {
    ROOM_REQUERST,
    ROOM_SUCCESS,
    ROOM_ERROR
} from './ActionType';
import axios from "axios";


export const loadRoom=()=>async (dispatch)=>{

    const accessToken= JSON.parse(localStorage.getItem("data")).access_token;
    dispatch({type: ROOM_REQUERST});
       
        try {

          let data = '';

              let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: "http://localhost:8080/interview",
                headers: { 
                  'Content-Type': 'application/json', 
                  'Authorization': `Bearer ${accessToken}`
                },
                data : data
              };
              axios.request(config)
              .then((response) => {
                dispatch({type: ROOM_SUCCESS,payload : response.data.data});
              
              })
              .catch((error) => {
                console.log(error);
              });
         
           
      
        } catch (error) {
            // console.log("in the logi func catch");
            console.log("sai roi ");
            dispatch({type: ROOM_ERROR,payload : error.message});
        }
}