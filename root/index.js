const pages = require('../data.json')

const getPage = (page, id) => page && ({ id, ...page })

const root = {
  page: ({ id }) => getPage(pages[id], id)
}

module.exports = root
