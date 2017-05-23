'use strict'

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
  api.getUserPages()
    .then(ui.getAllUserPagesSuccess)
    .catch(ui.getAllUserPagesFailure)
}

//  GET A [CURRENT USERS] REQUESTED PAGE
const onGetSingleUserPage = (event) => {
  event.preventDefault()
  api.getSingleUserPage()
    .then(ui.getSingleUserPageSuccess)
    .catch(ui.getSingleUserPageFailure)
}

// GO HOME | GO HOME | GO HOME | GO HOME | GO HOME |
// const onGoHome = (event) => {
//   event.preventDefault()
//   $('#content').empty()
// }

const addHandlers = () => {
  $('#get-all-pages-button').on('click', onGetAllPages)
  $('#get-all-user-pages-button').on('click', onGetAllUserPages)
  $('#get-single-user-page-button').on('click', onGetSingleUserPage)

  // $('#go-home-button').on('click', onGoHome)
}

module.exports = {
  addHandlers
}
