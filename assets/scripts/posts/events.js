'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store.js')
const createPostFieldsView = require('../templates/createPostFields.handlebars')
const updatePostFieldsView = require('../templates/updatePostField.handlebars')

const onCreatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('post object is: ', data)
  api.createPost(data)
    .then(ui.createPostSuccess)
    .catch(ui.createPostFailure)
}

const onGetPosts = function (event) {
  event.preventDefault()
  api.getPosts()
    .then(ui.getPostsSuccess)
    .catch(ui.getPostsFailure)
}

const onUpdatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.updatePost(data)
    .then(ui.updatePostSucess)
    .catch(ui.updatePostFailure)
}

const onDeletePost = function (event) {
  event.preventDefault()
  const data = this.dataset.id
  console.log(data)
  api.deletePost(data)
    .then(ui.deletePostSuccess)
      .then(() => {
        api.getPosts()
        .then(ui.getPostsSuccess)
        .catch(ui.getPostsFailure)
      })
      .catch(ui.deletePostFailure)
}

const onShowUpdatePostForm = function (event) {
  const data = this.dataset.id
  event.preventDefault()
  const updatePostFieldsHTML = updatePostFieldsView()
  $('#app').empty()
  $('#app').append(updatePostFieldsHTML)
  $('#post-id-input').attr('value', data)
  console.log('currentPageId is: ', store.currentPageId)
  $('#post-parent-page-input-id').val(store.currentPageId)
  // $('#edit-post-title-input').val(currentPostId.title)
  // $('#edit-post-content-input').val(currentPostId.content)
}

const onShowCreatePostForms = (event) => {
  event.preventDefault()
  const createPostFieldsHTML = createPostFieldsView()
  $('#app').empty()
  $('#app').append(createPostFieldsHTML)
  console.log('currentPageId is: ', store.currentPageId)
  $('#post-parent-page-input-id').val(store.currentPageId)
}

// const onShowCreatePageForms = (event) => {
//   event.preventDefault()
//   const createPageFieldsHTML = createPageFieldsView()
//   $('#app').empty()
//   $('#app').append(createPageFieldsHTML)

const addHandlers = () => {
  $(document).on('submit', '#create-new-post-forms-submit', onCreatePost)
  $('#get-posts').on('click', onGetPosts)
  $('#update-post').on('submit', onUpdatePost)
  $(document).on('click', '.delete-post-button', onDeletePost)
  $(document).on('click', '.edit-posts-button', onShowUpdatePostForm)
  $(document).on('submit', '#update-new-post-forms-submit', onUpdatePost)
  $(document).on('click', '.edit-post', onUpdatePost)
  $(document).on('click', '.view-create-page-fields-button', onShowCreatePostForms)
}

module.exports = {
  addHandlers
}
