import UserDatasource from './user';
import { NiouzDataSource } from './niouz';

export type DataSources = {
  user: UserDatasource,
  niouz: NiouzDataSource
}

export type ApolloContext = {
  dataSources: DataSources,
  niouz: NiouzDataSource
}

export default function(): DataSources {
  console.info('🏃🏿‍♂️ Initializing datasources');
  return {
    user: new UserDatasource(),
    niouz: new NiouzDataSource()
  };
}