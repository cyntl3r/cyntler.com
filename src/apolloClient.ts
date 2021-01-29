/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.APP_BACKEND_URI,
  cache: new InMemoryCache(),
});
