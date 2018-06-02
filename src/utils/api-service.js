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

function catchError (error, resolve, reject) {
  if (error.response) {
    if (error.response.status === 403) {
      if (error.response.data.error === 'E0102') {
        AuthService.renewToken()
          .then(response => {
            resolve(response)
          })
          .catch(() => {
            localStorage.setItem('access_token', '')
            Router.replace({name: 'Login'})
            reject(new Error(''))
          })
      } else {
        localStorage.setItem('access_token', '')
        Router.replace({name: 'Login'})
        reject(new Error(''))
      }
    } else {
      reject(new Error(''))
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
  getResource (path) {
    let authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      createAxios(authToken).get(path)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          catchGetError(error, path, resolve, reject)
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
          catchPostError(error, path, body, resolve, reject)
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
          catchPutError(error, path, body, resolve, reject)
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
          catchDeleteError(error, path, resolve, reject)
        })
    })
  }
}
