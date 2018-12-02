const { gql } = require('apollo-server')

module.exports = gql`
  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    users: [User]
    findUser(name: String!): User
    projects: [Project]
    findProject(id: String!): Project
  }
`
