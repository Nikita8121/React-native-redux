/* eslint-disable prettier/prettier */
import * as types from './types';

export function setData(data: any) {
  return {
    type: types.SET_DATA,
    payload: data,
  };
}
