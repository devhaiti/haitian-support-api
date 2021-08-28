import { ApolloContext } from "@core/dataSources";

export const stats = async (_root: unknown, _args: unknown, ctx: ApolloContext) => {
    const data: any = await ctx.dataSources.stats.getDamageStats();
    
    //TODO: move transformation to datasource
    return {
        destroyedProperties: data['Maisons détruites'],
        damagedProperties: data['Maisons endommagées'],
        injuries: data['Personnes blessées'],
        deaths: data['Personnes disparues'],
        missing: data['Personnes décédées'],
    }
}