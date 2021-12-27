import React from 'react';	
import {GET_COIN_TABLE_DATA_REQUEST,GET_COIN_TABLE_DATA_SUCCESS,GET_COIN_TABLE_DATA_FAILED} from '../constants/table.constant';
 
const intitialState = {
     data:[],
     loading:false,
     errorMessage:''
 }
function reducer(state = intitialState, action){
switch (action.type) {
    case GET_COIN_TABLE_DATA_REQUEST:
    return Object.assign({}, state, { loading:true });
    case GET_COIN_TABLE_DATA_SUCCESS:
    return Object.assign({}, state, { loading:false,data:action.payload });
    case GET_COIN_TABLE_DATA_FAILED:
    return  Object.assign({}, state, { loading:false,data:action.payload });
  }
}
 
export default reducer;