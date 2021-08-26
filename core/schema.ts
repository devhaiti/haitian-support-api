import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: ID!
    firstname: String
    lastname: String
    email: String
  }

  type Social {
    facebook: String
    twitter: String
    whatsapp: String
  }

  type ContactInfo {
    website: String
    phone: String
    email: String
    haitiAddress: String
    usAddress: String
  }

  type Organizations {
    name: String
    type: String
    location: String
    description: String
    contact: ContactInfo
    socialMedia: Social
    involvement: Involvemnet
  }

  type Involvemnet {
    type: InvolvementType
    details: String
  }

  enum InvolvementType {
    CAN_HELP
    NEEDS_HELP
    BOTH
  }

  type Article {
    id: ID
    title: String
    description: String
    photo: String
    body: String
    source: String
    createdAt: String
  }

  type Query {
    user(id: ID!): User
    users: [User]
    orgs: [Organizations]
    news: [Article]
  }

  type Mutation {
    login(email: String!): String
  }
`;
