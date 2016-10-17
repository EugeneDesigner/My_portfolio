/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.scss';

class Header extends React.Component {


  render() {
    return (
      <header>
        <div className={s.top}>
            <div className={s.left_side}>
              <div className={s.name_box}><span>lol</span>EugeneY</div>
            </div>

            <div className={s.right_side}>
              <ul>
                 <li>Instagram</li>
                 <li>Email</li>
                 <li>Facebook</li>
              </ul>
            </div>
        </div>
        <div className={s.navigate}><Navigation  /></div>
      </header>
    );
  }

}

export default Header;
