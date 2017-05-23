'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onCreatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
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
  api.updatePost(data)
    .then(ui.updatePostSucess)
    .catch(ui.updatePostFailure)
}

const onDeletePost = function (event) {
  event.preventDefault()
  const data = this.dataset.id
  api.deletePost(data)
    .then(ui.deletePostSuccess)
      .then(() => {
        api.getPosts()
        .then(ui.getPostsSuccess)
        .catch(ui.getPostsFailure)
      })
      .catch(ui.deletePostFailure)
}

const addHandlers = () => {
  $('#create-post').on('submit', onCreatePost)
  $('#get-posts').on('click', onGetPosts)
  $('#update-post').on('submit', onUpdatePost)
  $(document).on('click', '.delete-post', onDeletePost)
}

module.exports = {
  addHandlers
}
