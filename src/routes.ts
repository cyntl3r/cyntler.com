/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { lazyPageImport } from './utils/lazyPageImport';

const Home = lazyPageImport('Home');
const ProjectList = lazyPageImport('ProjectList');
const Blog = lazyPageImport('Blog');
const AboutMe = lazyPageImport('AboutMe');
const Resume = lazyPageImport('Resume');
const EstimateForm = lazyPageImport('EstimateForm');
const NotFound = lazyPageImport('NotFound');

export const routes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home,
    isInNavigationDisplay: false,
  },
  {
    name: 'projects',
    path: '/projects',
    exact: false,
    component: ProjectList,
    isInNavigationDisplay: true,
  },
  {
    name: 'blog',
    path: '/blog',
    exact: false,
    component: Blog,
    isInNavigationDisplay: true,
  },
  {
    name: 'about',
    path: '/about',
    exact: false,
    component: AboutMe,
    isInNavigationDisplay: true,
  },
  {
    name: 'resume',
    path: '/resume',
    exact: false,
    component: Resume,
    isInNavigationDisplay: true,
  },
  {
    name: 'estimate',
    path: '/estimate',
    exact: false,
    component: EstimateForm,
    isInNavigationDisplay: true,
  },
  {
    name: 'error',
    path: '*',
    exact: false,
    component: NotFound,
    isInNavigationDisplay: false,
  },
];
