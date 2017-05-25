'use strict'

const layout = require('../layout.js')
const store = require('../store.js')

const api = require('./api.js')

const createPostSuccess = (response) => {
  api.getPosts()
    .then(getPostsSuccess)
    .catch(getPostsFailure)
}

const createPostFailure = (error) => {
  console.error(error)
}

const getPostsSuccess = (data) => {
  store.posts = data.posts
  const currentPagePosts = store.posts.filter((post) => {
    return store.currentPageId === post._page
  })
  store.currentPagePosts = currentPagePosts

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


const updatePostSucess = (response) => {

// UPDATE
const updatePostSuccess = (data) => {
  api.getPosts()
    .then(getPostsSuccess)
    .catch(getPostsFailure)

}

const updatePostFailure = (error) => {
  console.error(error)
  $()
}

// DELETE
const deletePostSuccess = (response) => {
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
