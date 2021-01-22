/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { lazyImport } from './utils/lazyImport';

const Home = lazyImport('Home');
const Projects = lazyImport('Projects');
const Blog = lazyImport('Blog');
const About = lazyImport('About');
const Resume = lazyImport('Resume');
const Estimate = lazyImport('Estimate');
const NotFound = lazyImport('NotFound');

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
