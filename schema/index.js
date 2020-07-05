
const { buildASTSchema } = require('graphql')
const gql = require('graphql-tag')

const schema = buildASTSchema(gql`
  type Query {
    page(id: ID!): Page
  }

  type Page {
    id: ID
    title: String
    description: String,
    users: [Users]
  }

  type Users {
    id: ID,
    name: String,
    email: String,
    location: String,
    online: Boolean,
    avatar: String
  }
`)

module.exports = schema