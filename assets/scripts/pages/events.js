'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui.js')

const onGetAllPages = (event) => {
  event.preventDefault()
  api.getAllPages()
    .then(ui.getAllPagesSuccess)
    .catch(ui.getAllPagesFailure)
}

const onGetAllUserPages = (event) => {
  event.preventDefault()
  api.getAllUserPages()
    .then(ui.getAllUserPagesSuccess)
    .catch(ui.getAllUserPagesFailure)
}

const onNewUserPage = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.newUserPage(data)
    .then(ui.newUserPageSuccess)
    .catch(ui.newUserPageFailure)
}

// GO HOME | GO HOME | GO HOME | GO HOME | GO HOME |
// const onGoHome = (event) => {
//   event.preventDefault()
//   $('#content').empty()
// }

const addHandlers = () => {
  $('#get-all-pages-button').on('click', onGetAllPages)
  $('#get-all-user-pages-button').on('click', onGetAllUserPages)
  $('#create-new-page-forms-submit').on('submit', onNewUserPage)

  // $('#go-home-button').on('click', onGoHome)
}

module.exports = {
  addHandlers
}
