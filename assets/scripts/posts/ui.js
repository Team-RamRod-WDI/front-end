'use strict'

const layout = require('../layout.js')

const createPostSuccess = (response) => {
  console.log('created post and response is:', response)
}

const createPostFailure = (error) => {
  console.error(error)
}

const getPostsSuccess = (response) => {
  console.log('gets post and response is:', response)
  layout.loadPosts(response)
}

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
