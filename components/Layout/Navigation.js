

import React from 'react';
import NavLink from '../../core/NavLink';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Navigation extends React.Component {

  render() {

    return (
      <nav>
        <ul>
          <li><NavLink to="/portfolio/about" >_Who?</NavLink></li>

          <li><NavLink to="/portfolio/projects">_What?</NavLink></li>

          <li><NavLink to="/portfolio/development">_How?</NavLink></li>
        </ul>
      </nav>
    );
  }

}

export default Navigation;
