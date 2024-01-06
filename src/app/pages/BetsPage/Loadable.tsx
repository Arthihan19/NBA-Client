/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const BetsPage = lazyLoad(
  () => import('./index'),
  module => module.BetsPage,
);
