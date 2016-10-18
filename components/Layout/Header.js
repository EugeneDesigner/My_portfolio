
import React, { PropTypes } from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.scss';
import Icon from './Icon';

class Header extends React.Component {


  render() {
    return (
      <header>

        <div className={s.top}>
          <p className={s.middle}>
            eugeneyaroshenko@gmail.com
          </p>
            <div className={s.left_side}>
              <div className={s.name_box}><span>lol</span>EugeneY</div>
            </div>

            <div className={s.right_side}>

              <ul>
                 <li><a target="_blank" href="#"><Icon icon='email' /></a></li>
                 <li><a target="_blank" href="https://www.facebook.com/eugeneyar"><Icon icon='facebook' /></a></li>
                 <li><a target="_blank" href="https://www.instagram.com/zhen9_9/"><Icon icon='instagram' /></a></li>
                 <li><a target="_blank" href="https://github.com/EugeneDesigner"><Icon icon='github' /></a></li>

              </ul>
            </div>
        </div>
        <div className={s.navigate}><Navigation  /></div>

      </header>
    );
  }




}

export default Header;
