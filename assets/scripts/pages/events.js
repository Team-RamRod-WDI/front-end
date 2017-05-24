'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui.js')

const createPageFieldsView = require('../templates/createPageFields.handlebars')

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
    .then(() => {
      api.getAllUserPages()
        .then(ui.getAllUserPagesSuccess)
        .catch(ui.getAllUserPagesFailure)
    })
    .catch(ui.newUserPageFailure)
}

const onShowCreatePageForms = (event) => {
  event.preventDefault()
  const createPageFieldsHTML = createPageFieldsView()
  $('#app').empty()
  $('#app').append(createPageFieldsHTML)
}
// GO HOME | GO HOME | GO HOME | GO HOME | GO HOME |
// const onGoHome = (event) => {
//   event.preventDefault()
//   $('#content').empty()
// }

// const onOpenEditMovieFields = () => {
//   event.preventDefault()
//   const editMovieFieldsHTML = editMovieFieldsView()
//   $('#content').empty()
//   $('#content').append(editMovieFieldsHTML)
//   $('.hide-movie-id').hide()
//   // $('#edit-movie-modal').modal('show')
//   const currentMovieId = $(event.target).attr('data-id')
//   $('#edit-movie-id-input').val(currentMovieId)
//   const currentMovieArray = store.movies.filter((movie) => {
//     return String(movie.id) === currentMovieId
//   })

const addHandlers = () => {
  // $('#create-new-page-forms-submit').on('click', onNewUserPage)
  $('#all-pages-button').on('click', onGetAllPages)
  $('#my-pages-button').on('click', onGetAllUserPages)
  $(document).on('submit', '#create-new-page-forms-submit', onNewUserPage)

  $('#show-create-page-forms').on('click', onShowCreatePageForms)
  // $('#show-create-post-forms').on('click', onGetAllPages)

  // $('#go-home-button').on('click', onGoHome)
}

module.exports = {
  addHandlers
}
