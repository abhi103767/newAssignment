import * as types from './actionTypes'
import axios from 'axios'


function getUsersRequest(){
    return {
        type : types.GET_USERS_REQUEST
    }
}

export function getUsersSuccess(data){
    return {
        type : types.GET_USERS_SUCCESS,
        payload: data
    }
}

function getUsersFailure(){
    return {
        type : types.GET_USERS_FAILURE
    }
}

 export function mainGetUsersData(){
    return (dispatch) =>{
        dispatch(getUsersRequest())
        axios.get('http://localhost:8080/users')
        .then(res=>{
            // console.log(res.data)
            dispatch(getUsersSuccess(res.data))
        })
        .catch(err=>{
            console.log("error",err)
        })

    }
}

export function deleteUserData(id){
    return (dispatch) => {
        axios.delete(`http://localhost:8080/users/${id}`)
        .then(res=>{
            console.log("res",res)
            dispatch(mainGetUsersData())
        })
        .catch(err=>{
           console.log(err);
        })
    }
}

export function addUserData(userData){
    return  (dispatch) => {
        axios.post('http://localhost:8080/users', userData)
       .then((res) => dispatch(mainGetUsersData()))
      .catch((e) => console.log(e));
    }
}


