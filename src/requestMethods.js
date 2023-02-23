import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDFhYTQyYjU5NWRjOTc2YjhkMzE2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTU0NTAxNiwiZXhwIjoxNjc1ODA0MjE2fQ.3e-uG8WIn0Obo-HjpoCg0R712VVF7aP3pPB4QiYu7Xk"
console.log(Token);


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});