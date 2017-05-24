'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)
const pagesUi = require('../pages/ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(() => {
      api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
    })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  $(document).on('click', '.view-page-posts-button', pagesUi.onGetPagePosts)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

// [SHOW MODALS] SECTION | [SHOW MODALS] SECTION | [SHOW MODALS] SECTION
// [SHOW MODALS] SECTION | [SHOW MODALS] SECTION | [SHOW MODALS] SECTION
const onShowSignUpModal = function (event) {
  event.preventDefault()
  $('#sign-up-modal').modal('show')
}

const onShowSignInModal = function (event) {
  event.preventDefault()
  $('#sign-in-modal').modal('show')
}

const onShowChangePasswordModal = function (event) {
  event.preventDefault()
  $('#change-password-modal').modal('show')
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)

  $('#sign-up-show-modal-button').on('click', onShowSignUpModal)
  $('#sign-in-show-modal-button').on('click', onShowSignInModal)
  $('#change-password-show-modal-button').on('click', onShowChangePasswordModal)
  $('#sign-out-button').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
