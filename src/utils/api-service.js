import axios from 'axios'

export default axios.create({
  baseURL: process.env.API_URI,
  timeout: 5000,
  headers: {
    'authorization': 'BEARER eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJ1c2lkIjoiQWxnbyJ9.i1ozPMRRfutuMDfJc6tZAIZlagHSy_IBtve0pg6xlGcFj7x6ebPxIivJpEqzdnB2',
    'Content-Type': 'application/json'
  }
})
