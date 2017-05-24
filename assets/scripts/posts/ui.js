'use strict'

const layout = require('../layout.js')
const store = require('../store.js')
const createPostSuccess = (response) => {
  console.log('created post and response is:', response)
}

const createPostFailure = (error) => {
  console.error(error)
}

const getPostsSuccess = (data) => {
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

const updatePostSucess = (response) => {
  console.log('updates post and response is:', response)
}

const updatePostFailure = (error) => {
  console.error(error)
}

const deletePostSuccess = (response) => {
  console.log('deletes post and response is:', response)
}

const deletePostFailure = (error) => {
  console.error(error)
}

module.exports = {
  createPostSuccess,
  createPostFailure,
  getPostsSuccess,
  getPostsFailure,
  updatePostSucess,
  updatePostFailure,
  deletePostSuccess,
  deletePostFailure
}
