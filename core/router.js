import React from 'react';
import { Route, IndexRoute }  from 'react-router';
import Layout from '../components/Layout/Layout';
import About from '../pages/about/index';
import Development from '../pages/development/index';
import NotFound from '../pages/error/index';
import Intro from '../pages/intro/index';
import Projects from '../pages/projects/index';


  export default (
    <Route path='/'>
    <IndexRoute component={Intro} />
    <Route component={Layout} path='/portfolio'>
      <Route component={About} path='/portfolio/about'/>
      <Route component={Development} path='/portfolio/development'/>
      <Route component={Projects} path='/portfolio/projects'/>
    </Route>
    <Route component={NotFound} path="*"/>
    </Route>

  );
