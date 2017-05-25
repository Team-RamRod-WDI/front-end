'use strict'

const layout = require('../layout.js')
const store = require('../store.js')

const api = require('./api.js')

const userPostsMessage = (message) => {
  $('.user-messages').text(message)
  setTimeout(function () {
    $('.user-messages').show()
  }, 500)
  setTimeout(function () {
    $('.user-messages').hide()
  }, 3000)
}

const createPostSuccess = (response) => {
  userPostsMessage('Post created!')
  document.getElementById('create-new-post-forms-submit').reset()
  api.getPosts()
    .then(getPostsSuccess)
    .catch(getPostsFailure)
}

const createPostFailure = (error) => {
  userPostsMessage('Failed to create post')

  console.error(error)
  document.getElementById('create-new-post-forms-submit').reset()
}

const getPostsSuccess = (data) => {
  userPostsMessage('Found some posts!')

  store.posts = data.posts
  const currentPagePosts = store.posts.filter((post) => {
    return store.currentPageId === post._page
  })
  store.currentPagePosts = currentPagePosts

  layout.loadPagePosts()
}

const getPostsFailure = (error) => {
  userPostsMessage('Failed to find posts')

  console.error(error)
}

// UPDATE
const updatePostSuccess = (data) => {
  userPostsMessage('Post updated!')
  document.getElementById('update-new-post-forms-submit').reset()
  api.getPosts()
    .then(getPostsSuccess)
    .catch(getPostsFailure)
}

const updatePostFailure = (error) => {
  userPostsMessage('Failed to update post')
  console.error(error)
  document.getElementById('update-new-post-forms-submit').reset()
  $('.update-post-header').text('You cannot update Posts that don\'t belong to you!')
}

// DELETE
const deletePostSuccess = (response) => {
  userPostsMessage('Post deleted!')

  api.getPosts()
    .then(getPostsSuccess)
    .catch(getPostsFailure)
}

const deletePostFailure = (error) => {
  userPostsMessage('Failed to delete post!')
  console.error(error)
}

module.exports = {
  createPostSuccess,
  createPostFailure,
  getPostsSuccess,
  getPostsFailure,
  updatePostSuccess,
  updatePostFailure,
  deletePostSuccess,
  deletePostFailure,
  userPostsMessage
}
