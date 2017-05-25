'use strict'

const store = require('../store.js')
const layout = require('../layout.js')
const pagesApi = require('../pages/api.js')
const ui = require('../pages/ui.js')

const signUpSuccess = (data) => {

}

const signUpFailure = () => {

}

const signInSuccess = (data) => {
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
  $('.modal-title').html('Error signing in')
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
