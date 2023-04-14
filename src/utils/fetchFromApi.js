const axios = require("axios");


const Base_url = 'https://youtube-v31.p.rapidapi.com/captions'
const options = {

  params: {maxResults:'50'},
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${Base_url}/${url}`)

    return data;
}

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });