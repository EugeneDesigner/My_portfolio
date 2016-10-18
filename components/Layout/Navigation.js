

import React from 'react';
import Link from '../Link';

class Navigation extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/about">_Who?</Link></li>

          <li><Link to="/projects">_What?</Link></li>

          <li><Link to="/development">_How?</Link></li>
        </ul>
      </nav>
    );
  }

}

export default Navigation;
