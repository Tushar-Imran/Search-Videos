import axios from "axios";

const KEY = "AIzaSyB7CHVuSF0mRChau446tJDYiKvyIJsYO8E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
