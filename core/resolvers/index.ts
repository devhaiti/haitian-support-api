import { mergeResolvers } from './util';
import * as User from './user';
import * as Organization from './organization';
import * as Niouz from './niouz';
import * as Stats from './stats';

export const resolvers = mergeResolvers(
  User,
  Organization,
  Niouz,
  Stats
);