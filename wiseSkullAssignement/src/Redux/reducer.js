import * as types from './actionTypes'


const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

export const mainReducer = (state = initialState,action) => {
   const{type,payload} = action
   switch(type){
        case types.GET_USERS_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false,
                
            }
        case types.GET_USERS_SUCCESS :
            return {
                ...state,
                isLoading : false,
                isError : false,
                users : payload
            }
        case types.GET_USERS_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true
                
            }
        default :
        return state
      }
};
