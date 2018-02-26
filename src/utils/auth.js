import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "./../config";

export default function getAccessToken() {
  const base64ClientId = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const config = {
    headers: { Authorization: `Basic ${base64ClientId}` }
  };
  return axios.get("/auth/getAccessToken", config);
}
