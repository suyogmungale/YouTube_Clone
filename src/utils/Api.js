import axios, { request } from 'axios';

const BASE_URL='https://youtube138.p.rapidapi.com'

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': REACT_APP_RapidAPI_Key,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

const featchDataFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
}