/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { lazyRouteImport } from '../utils/lazyRouteImport';

const Home = lazyRouteImport('Home');
const Projects = lazyRouteImport('Projects');
const Blog = lazyRouteImport('Blog');
const About = lazyRouteImport('About');
const Resume = lazyRouteImport('Resume');
const Estimate = lazyRouteImport('Estimate');
const NotFound = lazyRouteImport('NotFound');

export const routes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    children: <Home />,
    isInNavigationDisplay: false,
  },
  {
    name: 'projects',
    path: '/projects',
    exact: false,
    children: <Projects />,
    isInNavigationDisplay: true,
  },
  {
    name: 'blog',
    path: '/blog',
    exact: false,
    children: <Blog />,
    isInNavigationDisplay: true,
  },
  {
    name: 'about',
    path: '/about',
    exact: false,
    children: <About />,
    isInNavigationDisplay: true,
  },
  {
    name: 'resume',
    path: '/resume',
    exact: false,
    children: <Resume />,
    isInNavigationDisplay: true,
  },
  {
    name: 'estimate',
    path: '/estimate',
    exact: false,
    children: <Estimate />,
    isInNavigationDisplay: true,
  },
  {
    name: 'error',
    path: '*',
    exact: false,
    children: <NotFound />,
    isInNavigationDisplay: false,
  },
];
