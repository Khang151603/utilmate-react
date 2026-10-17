import axios from "axios";

export function getUser() {
  return axios("https://tony-auth-express-vdee.vercel.app/api/user", {
    method: 'GET'
  })
}