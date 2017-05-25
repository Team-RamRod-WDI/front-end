'use strict'

const layout = require('../layout.js')
const store = require('../store.js')

const api = require('./api.js')

const createPostSuccess = (response) => {
  console.log('created post and response is:', response)
  document.getElementById('create-new-post-forms-submit').reset()
  api.getPosts()
    .then(getPostsSuccess)
    .catch(getPostsFailure)
}

const createPostFailure = (error) => {
  console.error(error)
  document.getElementById('create-new-post-forms-submit').reset()
}

const getPostsSuccess = (data) => {
  console.log('getPostsSucess is RUNNING')
  console.log('gets post and response is:', data)
  store.posts = data.posts
  console.log('store.posts is: ', store.posts)
  const currentPagePosts = store.posts.filter((post) => {
    return store.currentPageId === post._page
  })
  store.currentPagePosts = currentPagePosts
  console.log('store.currentPagePosts is: ', store.currentPagePosts)
  console.log('currentPagePosts is: ', currentPagePosts)
  layout.loadPagePosts()
}

//
// store.pages = data.pages
// store.userPages = data.pages.filter((page) => {
//   return store.user.id === page._owner
// })

const getPostsFailure = (error) => {
  console.error(error)
}

// UPDATE
const updatePostSuccess = (data) => {
  console.log('updatePostSuccess is RUNNING. Response is:', data)
  document.getElementById('update-new-post-forms-submit').reset()

  api.getPosts()
    .then(getPostsSuccess)
    .catch(getPostsFailure)
}

const updatePostFailure = (error) => {
  console.error(error)
  document.getElementById('update-new-post-forms-submit').reset()
}

// DELETE
const deletePostSuccess = (response) => {
  console.log('deletes post and response is:', response)
  api.getPosts()
    .then(getPostsSuccess)
    .catch(getPostsFailure)
}

const deletePostFailure = (error) => {
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
  deletePostFailure
}
