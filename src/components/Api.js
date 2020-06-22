import axios from "axios";

export default axios.create({
  baseURL: "https://illness.herokuapp.com/api/",
});
