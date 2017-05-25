const layout = require('../layout.js')
const api = require('./api.js')

const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields')

const showPagesTemplate = require('../templates/allPagesView.handlebars')
const showUserPagesTemplate = require('../templates/userPagesView.handlebars')

const postsApi = require('../posts/api.js')
const postsUi = require('../posts/ui.js')

const updatePageSuccess = (data) => {
  api.getAllUserPages(data)
    .then(getAllUserPagesSuccess)
    .catch(getAllUserPagesFailure)
  $
}

const updatePageFailure = (error) => {
  console.error(error)
}

const getAllPagesSuccess = (response) => {
  layout.loadPages(response)
  $(document).on('click', '.view-page-posts-button', onGetPagePosts)
}

const getAllVisitorPagesSuccess = (response) => {
  layout.loadVisitorPages(response)
  $(document).on('click', '.view-visitor-page-posts-button', () => {
    $('#sign-in-modal').modal('show')
  })
}

const getAllVisitorPagesFailure = (error) => {
  console.error(error)
}

const getAllPagesFailure = (error) => {
  console.error(error)
}

const newUserPageSuccess = (response) => {
  layout.loadPages(response)
  refreshPagesList()
}

const newUserPageFailure = (error) => {
  console.error(error)
}

// GET PAGE POSTS | GET PAGE POSTS | GET PAGE POSTS | GET PAGE POSTS | GET PAGE POSTS |
// GET PAGE POSTS | GET PAGE POSTS | GET PAGE POSTS | GET PAGE POSTS | GET PAGE POSTS |
// GET PAGE POSTS | GET PAGE POSTS | GET PAGE POSTS | GET PAGE POSTS | GET PAGE POSTS |
// GET PAGE POSTS | GET PAGE POSTS | GET PAGE POSTS | GET PAGE POSTS | GET PAGE POSTS |
const onGetPagePosts = (event) => {
  event.preventDefault()
  const pageId = $(event.target).attr('data-id')
  store.currentPageId = pageId
  postsApi.getPosts()
    .then(postsUi.getPostsSuccess)
    .catch(postsUi.getPostsFailure)
}

const getAllUserPagesSuccess = (data) => {
  store.pages = data.pages
  store.userPages = data.pages.filter((page) => {
    return store.user.id === page._owner
  })
  layout.loadUserPages()
  $('.delete-page-button').on('click', onDeleteUserPage)
  $(document).on('click', '.view-page-posts-button', onGetPagePosts)
  // refreshUserPagesList()
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

const refreshUserPagesList = (data) => {
  const showUserPagesHtml = showUserPagesTemplate({ pages: store.pagesLists })
  $('.content').empty()
  $('.content').append(showUserPagesHtml)
  // $('.update-page-button').on('click', onUpdateUserPage)
  $('.delete-page-button').on('click', onDeleteUserPage)
}

const refreshPagesList = (data) => {
  const showPagesHtml = showPagesTemplate({ pages: store.pagesLists })
  $('.content').empty()
  $('.content').append(showPagesHtml)
  // $('.update-page-button').on('click', onUpdateUserPage)
  $('.delete-page-button').on('click', onDeleteUserPage)
}

const onDeleteUserPage = (event) => {
  event.preventDefault()
  const removeUserPage = $(event.target).attr('data-id')
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
  getAllUserPagesFailure,
  refreshUserPagesList,
  getAllVisitorPagesSuccess,
  getAllVisitorPagesFailure,
  onGetPagePosts,
  updatePageSuccess,
  updatePageFailure
}
