
const loadPages = (response) => {
  const pageTemplate = require('./templates/get-pages.handlebars')
  const content = pageTemplate({ pages: response.pages })
  $('#app').html(content)
}

module.exports = {
  loadPages
}
