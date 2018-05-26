import axios from 'axios'

export default {

  login (credentials, successCallback, errorCallback) {
    axios.create({
      baseURL: process.env.AUTH_URI,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .post('/v1/session', credentials)
      .then(response => {
        let dataReturn = {
          'access_token': response.data.access_token,
          'refresh_token': response.data.refresh_token
        }
        axios.create({
          baseURL: process.env.AUTH_URI,
          timeout: 5000,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + response.data.access_token
          }
        })
          .get('/v1/me', credentials)
          .then(response => {
            dataReturn.user = response.data.firstName + ' ' + response.data.lastName
            successCallback(dataReturn)
          })
          .catch(() => {
            errorCallback()
          })
      })
      .catch(() => {
        errorCallback()
      })
  }

}
