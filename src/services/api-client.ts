import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4476dcbfcc28466aae40fa36b2c650f5",
  },
});
