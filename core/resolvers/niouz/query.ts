import { ApolloContext } from "@core/dataSources";

export const news =  (_root, _args, ctx: ApolloContext) => 
    ctx.dataSources.niouz.getFeed()