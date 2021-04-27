/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { lazy } from 'react';

export const lazyPageImport = (name: string) =>
  lazy(() =>
    import(`../components/Pages/${name}/${name}`).then((module) => ({
      default: module[name],
    }))
  );
