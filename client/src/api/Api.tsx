import axios from "axios";
// cái này cho phép thay đổi cổng mà không cần phải vào từng file để thay.
let baseURL = axios.create({
  //có thể thay đổi ở đây.
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
export default baseURL;
