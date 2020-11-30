import axios from 'axios'
const instance = axios.create({
    baseURL: process.env.VUE_APP_BACK_END,
    headers: {
        'X-Requested-With' : 'XMLHttpRequest',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": process.env.VUE_APP_BACK_END,
      }
})
export default instance
