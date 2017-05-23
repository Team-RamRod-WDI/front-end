const layout = require('../layout.js')

const getAllPagesSuccess = (response) => {
  console.log(response)
  layout.loadPages(response)
}

const getAllPagesFailure = (error) => {
  console.error(error)
}

const newUserPageSuccess = (response) => {
  console.log(response)
  layout.loadPages(response)
}

const newUserPageFailure = (error) => {
  console.error(error)
}

module.exports = {
  getAllPagesSuccess,
  getAllPagesFailure,
  newUserPageSuccess,
  newUserPageFailure
}
