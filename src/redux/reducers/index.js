/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import NasaDataReducer from './RickAndMortyData';

const bookState = combineReducers({
  NasaDataReducer,
});

export default bookState;
