const layout = require('../layout.js')

const getAllPagesSuccess = (response) => {
  console.log(response)
  layout.loadPages(response)
}

module.exports = {
  getAllPagesSuccess
}
