import UserDatasource from './user';
import { NiouzDataSource } from './niouz';
import { StatsDataSource } from './stats';

export type DataSources = {
  user: UserDatasource,
  niouz: NiouzDataSource,
  stats: StatsDataSource
}

export type ApolloContext = {
  dataSources: DataSources
}

export default function(): DataSources {
  console.info('🏃🏿‍♂️ Initializing datasources');
  return {
    user: new UserDatasource(),
    niouz: new NiouzDataSource(),
    stats: new StatsDataSource()
  };
}