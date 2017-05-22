'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = () => {

}

const signInSuccess = (data) => {
  store.user = data.user
  console.log(data)
}

const signInFailure = () => {
}

const changePasswordSuccess = (response) => {

}

const changePasswordFailure = () => {

}

const signOutSuccess = () => {

}

const signOutFailure = () => {

}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
