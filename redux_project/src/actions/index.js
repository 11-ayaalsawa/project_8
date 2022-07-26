import {GET_ADMIN, ADMIN_ERROR,GET_USERS, USERS_ERROR} from './types'
import axios from 'axios';

export const login=(email,password)=> async dispatch => {

    try{
        const res = await axios.get('http://localhost/project_8/redux_project/backend/login.php?email='+email+'&password='+password);
        dispatch( {
            type: GET_ADMIN,
            payload: res.data
        })

    }
    catch(e){
        dispatch( {
            type: ADMIN_ERROR,
            payload: console.log(e),
        })
    }
}

// export const getData=()=> async dispatch => {

//     try{
//         const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cd50b668108ab0e7d74f4585d5c05b53');
//         dispatch( {
//             type: GET_DATA,
//             payload: res.data.results
//         })

//     }
//     catch(e){
//         dispatch( {
//             type: DATA_ERROR,
//             payload: console.log(e),
//         })
//     }
// }
export const getUsers = () => async dispatch => {

    try{
        const res = await axios.get(`https://countriesnow.space/api/v0.1/countries/capital`)
        dispatch( {
            type: GET_USERS,
            payload: res.data.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}
export const logout =()=>{
    window.location.href = "/";
    return{
        type:'logout'
    }
}