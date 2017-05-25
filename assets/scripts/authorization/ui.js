'use strict'

const store = require('../store.js')
const layout = require('../layout.js')
const pagesApi = require('../pages/api.js')
const ui = require('../pages/ui.js')
const pagesEvents = require('../pages/events.js')

const userMessage = (message) => {
  $('.user-messages').text(message)
  setTimeout(function () {
    $('.user-messages').show()
  }, 500)
  setTimeout(function () {
    $('.user-messages').hide()
  }, 3000)
}

const signUpSuccess = (data) => {
  $('#sign-up-modal').modal('hide')
  userMessage('Sign up Successful!')
}

const signUpFailure = () => {
  userMessage('Sign up failure!')
}

const signInSuccess = (data) => {
  userMessage('You are signed in!')
  store.user = data.user
  $('#get-pages').css({'display': 'block'})
  $('#get-posts').css({'display': 'block'})
  $('.signed-in-view').show()
  $('.signed-out-view').hide()
  $('#sign-in-modal').modal('hide')
  pagesApi.getAllPages()
    .then(layout.loadPages)
    .then(() => {
      ui.getAllUserPagesSuccess
    })
  // $('#get-posts').css({'display': 'block'})
}

const signInFailure = () => {
  userMessage('Failed to sign in!')
  $('.modal-title').html('Error signing in')
}

const changePasswordSuccess = (response) => {
  userMessage('Password Changed!')
}

const changePasswordFailure = () => {
  userMessage('Password Change Failed!')
}

const signOutSuccess = () => {
  $('.signed-in-view').hide()
  $('.signed-out-view').show()
  // layout.loadVisitorPages()
  pagesEvents.onLoadAllPages()
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
  signOutFailure,
  userMessage
}
