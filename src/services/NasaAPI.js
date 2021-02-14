/* eslint-disable prettier/prettier */
import axios from 'axios';

/* const key: string = 'OyAfokkRYB4CAUVW5c7EC7asp2lI2fQSheucdB2T'; */

async function getNasaData() {
    console.log(await axios.get('https://rickandmortyapi.com/api/character'));
    return await axios.get('https://rickandmortyapi.com/api/character').then(response => response.data);
}
export {
    getNasaData,
};
