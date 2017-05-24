const store = require('./store.js')

const loadPages = (response) => {
  const pageTemplate = require('./templates/get-pages.handlebars')
  const content = pageTemplate({ pages: response.pages })
  $('#app').html(content)
}

const loadUserPages = () => {
  const userPageTemplate = require('./templates/get-pages.handlebars')
  const content = userPageTemplate({ pages: store.userPages })
  $('#app').empty()
  $('#app').append(content)
}

const loadPosts = (response) => {
  const pageTemplate = require('./templates/get-posts.handlebars')
  const content = pageTemplate({ posts: response.posts })
  $('#app').html(content)
}

module.exports = {
  loadPages,
  loadPosts,
  loadUserPages
}
