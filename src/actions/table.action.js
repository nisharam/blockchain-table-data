import {GET_COIN_TABLE_DATA_REQUEST,GET_COIN_TABLE_DATA_SUCCESS,GET_COIN_TABLE_DATA_FAILED} from '../constants/table.constant';
import axios from 'axios';
export function getCoinTableDataRequest() {
    return {
       type: GET_COIN_TABLE_DATA_REQUEST,
    }
 }
 export function getCoinTableDataSuccess(data) {
    return {
       type: GET_COIN_TABLE_DATA_SUCCESS,
       payload:data 
    }
 }
 export function getCoinTableDataFailed(error) {
    return {
       type: GET_COIN_TABLE_DATA_FAILED,
       payload:error
    }
 }

 export const getCoinTableData = () =>{
     return (dispatch) =>{
         dispatch(getCoinTableDataRequest())
        axios.get('https://api.coincap.io/v2/assets')
        .then(response => {
            const coinData = response.data.data
            dispatch(getCoinTableDataSuccess(coinData))
        })
        .catch(errormsg =>{
            const error = errormsg.message
            dispatch(getCoinTableDataFailed(error))
        } )
     }
 }