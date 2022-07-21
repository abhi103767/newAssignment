import * as types from './actionTypes'
import axios from 'axios'


function getEditRequest(){
    return {
        type : types.UPDATE_USERS_REQUEST
    }
}

export function getEditSuccess(data){
    return {
        type : types.UPDATE_USERS_SUCCESS,
        payload: data
    }
}

function getEditFailure(){
    return {
        type : types.UPDATE_USERS_FAILURE
    }
}

 export function mainUpdateUsers(id,obj){
    return (dispatch) =>{
        dispatch(getEditRequest())
        console.log(id,obj)
        axios.patch(`http://localhost:8080/users/${id}`,obj)
        .then(res=>{
            dispatch(getEditSuccess(res.data))
            // console.log("resEdit",res)
        })
        .catch(err=>{
            dispatch(getEditFailure())
            console.log("error",err)
        })

    }

 }

