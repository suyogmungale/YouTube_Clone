const axios = require("axios");


const Base_url = 'https://youtube-v31.p.rapidapi.com'
const options = {

  params: {maxResults:'50'},
  headers: {
    'X-RapidAPI-Key': '973ce6005emshf482200cc920742p1bd00djsn3b63037e4123',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${Base_url}/${url}`,options)

    return data;
}

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });