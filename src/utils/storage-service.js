import axios from 'axios'
import AuthService from './auth-service'
import Router from '../router'

function createAxios (authToken) {
  return axios.create({
    baseURL: process.env.STORAGE_URI,
    headers: {
      'authorization': 'Bearer ' + authToken,
      'Access-Control-Allow-Origin': '*'
    }
  })
}

function catchError (error, resolve, reject) {
  if (error.response) {
    console.log(error)
    if (error.response.status === 401) {
      console.log(error.response)
      if (error.response.message === 'Token is expired') {
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
  } else {
    console.log(error)
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
  listFiles (path) {
    let authToken = localStorage.getItem('access_token')
    return new Promise((resolve, reject) => {
      createAxios(authToken).get(path)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          console.log('Puto')
          catchGetError(error, path, resolve, reject)
        })
    })
  },
  uploadFile (path, body) {
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
  deleteFile (path) {
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
