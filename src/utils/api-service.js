import axios from 'axios'
import AuthService from './auth-service'
import Router from '../router'

function createAxios (authToken) {
  return axios.create({
    baseURL: process.env.API_URI,
    headers: {
      'authorization': 'BEARER ' + authToken,
      'Content-Type': 'application/json'
    }
  })
}

function catchAuthError (error, path, resolve, reject) {
  if (error.response) {
    if (error.response.status === 403 && error.response.data.error === 'E0102') {
      AuthService.renewToken()
        .then(response => {
          createAxios(response.data.access_token).get(path)
            .then(response => {
              resolve(response)
            })
            .catch(() => {
              localStorage.setItem('access_token', '')
              Router.replace({ name: 'Login' })
              reject(new Error(''))
            })
        })
    } else {
      localStorage.setItem('access_token', '')
      Router.replace({ name: 'Login' })
      reject(new Error(''))
    }
  }
}

export default {
  getResource (path) {
    let authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      createAxios(authToken).get(path)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          catchAuthError(error, path, resolve, reject)
        })
    })
  },
  postResource (path, body) {
    let authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      createAxios(authToken).post(path, body)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          catchAuthError(error, path, resolve, reject)
        })
    })
  },
  putResource (path, body) {
    let authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      createAxios(authToken).put(path, body)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          catchAuthError(error, path, resolve, reject)
        })
    })
  },
  deleteResource (path) {
    let authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      createAxios(authToken).delete(path)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          catchAuthError(error, path, resolve, reject)
        })
    })
  }
}
