import axios from "axios";
const base_url = "https://youtube-v31.p.rapidapi.com";
export const options = {
  params: {
    maxResults: "51",
  },
  headers: {
    "X-RapidAPI-Key": "c51d2ee16fmsh2f843e81fd7cc95p1e5fe3jsn1ef5214a0fc7",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    return data;
  } catch (error) {
    console.log("error in fetch api");
  }
};
export default fetchApi;
