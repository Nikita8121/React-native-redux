/* eslint-disable prettier/prettier */
import * as types from '../actions/types';



let initialData:Array<object> = [];

function NasaDataReducer (state = initialData, action:any) {
  switch (action.type) {
    case types.SET_DATA:
      const DATA = action.payload;
      const newState = [...state];
      newState.push(DATA);
      return newState;
      // eslint-disable-next-line no-unreachable
      break;

    default:
      return state;
  }
}

export default NasaDataReducer;
