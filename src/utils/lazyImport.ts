/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { lazy } from 'react';

export const lazyImport = (name: string) =>
  lazy(() =>
    import(`../pages/${name}/${name}`).then((module) => ({
      default: module[name],
    }))
  );
