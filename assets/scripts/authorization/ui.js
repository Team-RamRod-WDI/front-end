'use strict'

const store = require('../store.js')
const layout = require('../layout.js')
const pagesApi = require('../pages/api.js')
const ui = require('../pages/ui.js')
const pagesEvents = require('../pages/events.js')

const userMessage = (message) => {
  $('#user-messages').text(message)
  $('#user-messages').show()
  setTimeout(function () {
    $('#user-messages').hide()
  }, 2000)
}

const signUpSuccess = (data) => {
  document.getElementById('sign-up').reset()
}

const signUpFailure = () => {
  document.getElementById('sign-up').reset()
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#get-pages').css({'display': 'block'})
  $('#get-posts').css({'display': 'block'})
  $('.signed-in-view').show()
  $('.signed-out-view').hide()
  $('#sign-in-modal').modal('hide')
  $('#sign-up-modal').modal('hide')
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  pagesApi.getAllPages()
    .then(layout.loadPages)
    .then(() => {
      ui.getAllUserPagesSuccess
    })
  // $('#get-posts').css({'display': 'block'})
}

const signInFailure = (error) => {
  console.error(error)
  $('.modal-title').html('Error signing in')
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
}

const changePasswordSuccess = (response) => {
  console.log('change pw', response)
  document.getElementById('change-password').reset()
}

const changePasswordFailure = (error) => {
  console.error(error)
  document.getElementById('change-password').reset()
}

const signOutSuccess = () => {
  $('.signed-in-view').hide()
  $('.signed-out-view').show()
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
  // layout.loadVisitorPages()
  pagesEvents.onLoadAllPages()
}

const signOutFailure = (error) => {
  console.log(error)
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
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
