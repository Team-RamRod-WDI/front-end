const layout = require('../layout.js')
const api = require('./api.js')
const store = require('../store.js')

const getAllPagesSuccess = (response) => {
  console.log('success is ', response)
  console.log(store.user)
  console.log(store.user.id)
  layout.loadPages(response)
}

const getAllPagesFailure = (error) => {
  console.error(error)
}

const getAllUserPagesSuccess = (data) => {
  store.pages = data.pages
  store.userPages = data.pages.filter((page) => {
    return store.user.id === page._owner
  })
  console.log(store.userPages)
  layout.loadPages(store.userPages)
  $('.destroy-page-button').on('click', onDeletePage)
}

const getAllUserPagesFailure = (error) => {
  console.error(error)
}

const onDeletePage = (event) => {
  event.preventDefault()
  const removePage = $(event.target).attr('data-id')
  api.deleteUserPage(removePage)
    .then(deletePageSuccess)
    .catch(deletePageFailure)
}

const newUserPageSuccess = (response) => {
  console.log(response)
  layout.loadPages(response)
}

const newUserPageFailure = (error) => {
  console.error(error)
}

const deletePageSuccess = (response) => {
  console.log(response)
  layout.loadPages(response)
}

const deletePageFailure = (error) => {
  console.error(error)
}

module.exports = {
  getAllPagesSuccess,
  getAllPagesFailure,
  newUserPageSuccess,
  newUserPageFailure,
  getAllUserPagesSuccess,
  getAllUserPagesFailure
}
