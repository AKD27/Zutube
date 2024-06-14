import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
        maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': '6c70672d46msh0556eaa9e39ffbdp1f006ajsnb1a541413684',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFROMAPI = async(url)=>{
   const {data} =  await axios.get(`${BASE_URL}/${url}`,
    options);
    return data;
  }


