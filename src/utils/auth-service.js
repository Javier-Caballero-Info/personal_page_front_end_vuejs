import axios from 'axios'
import AuthService from './auth-service'
import Router from '../router'

function createAxios (authToken) {
  return axios.create({
    baseURL: process.env.AUTH_URI,
    headers: {
      'authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    }
  })
}

function catchError (error, resolve, reject) {
  if (error.response) {
    if (error.response.status === 401) {
      if (error.response.data.msg === 'Token has expired') {
        AuthService.renewToken()
          .then(response => {
            resolve(response)
          })
          .catch(() => {
            reject(new Error(''))
          })
      } else {
        localStorage.setItem('access_token', '')
        Router.replace({name: 'Login'})
        reject(new Error(''))
      }
    } else {
      reject(new Error(error.response.data.message))
    }
  }
}

function catchGetError (error, path, resolve, reject) {
  catchError(error,
    function () {
      let authToken = localStorage.getItem('access_token')
      createAxios(authToken).get(path)
        .then(response => {
          resolve(response)
        })
        .catch(() => {
          reject(new Error(''))
        })
    },
    reject)
}

function catchPostError (error, path, body, resolve, reject) {
  catchError(error,
    function () {
      let authToken = localStorage.getItem('access_token')
      createAxios(authToken).post(path, body)
        .then(response => {
          resolve(response)
        })
        .catch(() => {
          reject(new Error(''))
        })
    },
    reject)
}

function catchPutError (error, path, body, resolve, reject) {
  catchError(error,
    function () {
      let authToken = localStorage.getItem('access_token')
      createAxios(authToken).put(path, body)
        .then(response => {
          resolve(response)
        })
        .catch(() => {
          reject(new Error(''))
        })
    },
    reject)
}

function catchDeleteError (error, path, resolve, reject) {
  catchError(error,
    function () {
      let authToken = localStorage.getItem('access_token')
      createAxios(authToken).delete(path)
        .then(response => {
          resolve(response)
        })
        .catch(() => {
          reject(new Error(''))
        })
    },
    reject)
}

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
            dataReturn.user = response.data.first_name + ' ' + response.data.last_name
            successCallback(dataReturn)
          })
          .catch(() => {
            errorCallback()
          })
      })
      .catch(() => {
        errorCallback()
      })
  },
  renewToken () {
    return new Promise((resolve, reject) => {
      axios.create({
        baseURL: process.env.AUTH_URI,
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('refresh_token')
        }
      })
        .put('/v1/session')
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  listUsers () {
    let authToken
    authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      createAxios(authToken).get('/v1/users')
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          catchGetError(error, '/v1/users', resolve, reject)
        })
    })
  },
  getUserById (id) {
    let authToken
    authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      createAxios(authToken).get('/v1/users/' + id)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          catchGetError(error, '/v1/users', resolve, reject)
        })
    })
  },
  getMyUser () {
    let authToken
    authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      createAxios(authToken).get('/v1/me')
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          catchGetError(error, '/v1/me', resolve, reject)
        })
    })
  },
  changePassword (body) {
    let authToken
    authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      createAxios(authToken).put('/v1/password', body)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          catchPutError(error, '/v1/password', body, resolve, reject)
        })
    })
  },
  postUser (body) {
    let authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      delete body.id
      delete body.password_confirmation
      createAxios(authToken).post('/v1/users', body)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          catchPostError(error, '/v1/users', body, resolve, reject)
        })
    })
  },
  putUser (id, body) {
    let authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      delete body.id
      body.password = ''
      createAxios(authToken).put('/v1/users/' + id, body)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          catchPutError(error, '/v1/users/' + id, body, resolve, reject)
        })
    })
  },
  deleteUser (id) {
    let authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      createAxios(authToken).delete('/v1/users/' + id)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          catchDeleteError(error, '/v1/users/' + id, resolve, reject)
        })
    })
  }
}
