const layout = require('../layout.js')
const api = require('./api.js')
const showPagesTemplate = require('../templates/get-pages.handlebars')
const store = require('../store.js')

const getAllPagesSuccess = (response) => {
  console.log(response)
  layout.loadPages(response)
}

const getAllPagesFailure = (error) => {
  console.error(error)
}

const newUserPageSuccess = (response) => {
  console.log(response)
  layout.loadPages(response)
  refreshPagesList()
}

const newUserPageFailure = (error) => {
  console.error(error)
}

const getAllUserPagesSuccess = (data) => {
  store.pages = data.pages
  store.userPages = data.pages.filter((page) => {
    return store.user.id === page._owner
  })
  console.log(store.userPages)
  layout.loadUserPages()
  $('.destroy-page-button').on('click', onDeleteUserPage)
  refreshPagesList()
}

const getAllUserPagesFailure = (error) => {
  console.error(error)
}

const refreshPagesList = (data) => {
  const showPagesHtml = showPagesTemplate({ pages: store.pagesLists })
  $('.content').empty()
  $('.content').append(showPagesHtml)
  $('.destroy-page-button').on('click', onDeleteUserPage)
}

const onDeleteUserPage = (event) => {
  event.preventDefault()
  const removeUserPage = $(event.target).attr('data-id')
  console.log(event.target)
  api.deleteUserPage(removeUserPage)
    .then(deleteUserPageSuccess)
    .catch(deleteUserPageFailure)
    .then(() => {
      api.getAllUserPages()
        .then(getAllUserPagesSuccess)
        .catch(getAllUserPagesFailure)
    })
}

const deleteUserPageSuccess = (response) => {
  console.log('page deleted ', response)
}

const deleteUserPageFailure = (error) => {
  console.error('failed ', error)
}

module.exports = {
  getAllPagesSuccess,
  getAllPagesFailure,
  newUserPageSuccess,
  newUserPageFailure,
  getAllUserPagesSuccess,
  getAllUserPagesFailure
}
