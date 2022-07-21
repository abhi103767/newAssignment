import * as types from './actionTypes'


const initialState = {
  isLoading: false,
  isError: false,
  isSuccess : false
};

export const editReducer = (state = initialState,action) => {
   const{type,payload} = action
   switch(type){
        case types.UPDATE_USERS_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false,
                
            }
        case types.UPDATE_USERS_SUCCESS :
            return {
                ...state,
                isLoading : false,
                isError : false,
                isSuccess : true
               
            }
        case types.UPDATE_USERS_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true
                
            }
        default :
        return state
      }
};
