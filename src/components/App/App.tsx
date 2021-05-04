/**
 * @name personal-frontend
 * @author cyntler <damian@cyntler.com>
 */
import { FunctionComponent, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { MobileHeader } from '../MobileHeader/MobileHeader';
import { Sidebar } from '../Sidebar/Sidebar';
import { lazyPageImport } from '../../utils/lazyPageImport';
import { AppPageContainer } from './App.styles';

const Home = lazyPageImport('Home');
const ProjectList = lazyPageImport('ProjectList');
const Blog = lazyPageImport('Blog');
const AboutMe = lazyPageImport('AboutMe');
const Resume = lazyPageImport('Resume');
const EstimateForm = lazyPageImport('EstimateForm');
const Contact = lazyPageImport('Contact');
const NotFound = lazyPageImport('NotFound');

export const App: FunctionComponent = () => (
  <>
    <Sidebar />
    <MobileHeader />
    <AppPageContainer>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={AboutMe} />
          <Route path="/resume" component={Resume} />
          <Route path="/estimate" component={EstimateForm} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </AppPageContainer>
  </>
);
