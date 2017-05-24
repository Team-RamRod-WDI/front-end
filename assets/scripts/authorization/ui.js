'use strict'

const store = require('../store.js')
const layout = require('../layout.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = () => {

}

const signInSuccess = (data) => {
  store.user = data.user
  console.log(data)
  $('#get-pages').css({'display': 'block'})
  $('#get-posts').css({'display': 'block'})
  $('.signed-in-view').show()
  $('.signed-out-view').hide()
  // $('#get-posts').css({'display': 'block'})

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
