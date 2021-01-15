/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { lazyImport } from './utils/lazyImport';

const Home = lazyImport('Home');
const Projects = lazyImport('Projects');
const Blog = lazyImport('Blog');
const NotFound = lazyImport('NotFound');

export const routes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    children: <Home />,
    isNavigationDisplay: false,
  },
  {
    name: 'projects',
    path: '/projects',
    exact: false,
    children: <Projects />,
    isNavigationDisplay: true,
  },
  {
    name: 'blog',
    path: '/blog',
    exact: false,
    children: <Blog />,
    isNavigationDisplay: true,
  },
  {
    name: 'about',
    path: '/about',
    exact: false,
    children: <Blog />,
    isNavigationDisplay: true,
  },
  {
    name: 'resume',
    path: '/resume',
    exact: false,
    children: <Blog />,
    isNavigationDisplay: true,
  },
  {
    name: 'estimate',
    path: '/estimate',
    exact: false,
    children: <Blog />,
    isNavigationDisplay: true,
  },
  {
    name: 'error',
    path: '*',
    exact: false,
    children: <NotFound />,
    isNavigationDisplay: false,
  },
];
