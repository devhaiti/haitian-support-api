import { micron, createLambda } from '@yotie/micron';
import { ApolloServerPluginUsageReportingDisabled } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers, typeDefs, dataSources } from '../core';
import { authn, authz } from '../core/middlewares';

const baseSchema = makeExecutableSchema({ typeDefs, resolvers }); //make sure to add Upload Scalar if needing Upload functionality
const schema = applyMiddleware(baseSchema, authz);

const server = new ApolloServer({
  introspection: true,
  dataSources,
  resolvers,
  context: async ({ req, connection }: any) => {
    if (connection) return connection.context;
    
    return {
      auth: req.auth     //this is populated by the authn middleware
    };
  },
  plugins: [ApolloServerPluginUsageReportingDisabled()],
  schema
});


const ApolloLambda = micron(async ({ req, res }) => {
  await server.start()

  const lambda = server.createHandler({ path: '/api' });
  return lambda(req, res);
});

export default createLambda(
  ApolloLambda, { cors: { origin: '*' }}
)