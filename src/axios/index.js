import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://database-tbm.firebaseio.com/'
})
export default instance
