const typeDefs = `
    type Query {
        ping: String!
        ding: String!
        users: [User]
    }

    type Mutation {
        addUser(input: UserInput): Boolean
    }

    type User {
        name: String
    }

    input UserInput {
        name: String!
    }
`;

export default typeDefs;