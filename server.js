const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const root = require('./root')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(port, () => {
  console.log(`Running a GraphQL API server at localhost:${port}/graphql`)
})
