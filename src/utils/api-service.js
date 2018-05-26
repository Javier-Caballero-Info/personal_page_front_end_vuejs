import axios from 'axios'

export default axios.create({
  baseURL: process.env.API_URI,
  timeout: 5000,
  headers: {
    'authorization': 'Bearer ' + localStorage.getItem('access_token'),
    'Content-Type': 'application/json'
  }
})
