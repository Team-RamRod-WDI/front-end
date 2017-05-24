const layout = require('../layout.js')
const api = require('./api.js')
const showPagesTemplate = require('../templates/allPagesView.handlebars')
const store = require('../store.js')
const getFormFields = require(`../../../lib/get-form-fields`)

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
  // console.log(data)
  layout.loadUserPages()
  $('.destroy-page-button').on('click', onDeleteUserPage)
  refreshPagesList()
}

const getAllUserPagesFailure = (error) => {
  console.error(error)
}

// const onUpdateUserPage = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const updatedPage = $(event.target).attr('data-id')
//   refreshPagesList()
//   api.updateUserPage(data, updatedPage)
//     .then(updateUserPageSuccess)
//     .catch(updateUserPageFailure)
//     .then(() => {
//       api.getAllUserPages()
//         .then(getAllUserPagesSuccess)
//         .catch(getAllUserPagesFailure)
//     })
// }

// Not sure if we want each page to be updatable when they are indexed,
// or if we want a button to open a form to update within handlebars

const refreshPagesList = (data) => {
  const showPagesHtml = showPagesTemplate({ pages: store.pagesLists })
  $('.content').empty()
  $('.content').append(showPagesHtml)
  // $('.update-page-button').on('click', onUpdateUserPage)
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

// const updateUserPageSuccess = (response) => {
//   console.log(response)
// }
//
// const updateUserPageFailure = (error) => {
//   console.errer(error)
// }

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
