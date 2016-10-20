
import React, { PropTypes } from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import cx from 'classnames';
import s from './Header.scss';
import Icon from './Icon';

class Header extends React.Component {
  constructor(props) {
    super(props);

  this.state= {active: false};
  this.showEmail = this.showEmail.bind(this);
  this.hideEmail = this.hideEmail.bind(this);
  }


  showEmail() {
    this.setState({active: true});
  }

  hideEmail() {
    this.setState({active: false});
  }

  render() {
    const emailview = () => {
      let viewmode = this.state.active ? cx(s.email, s.active) : s.email;
      return viewmode;
    }
    return (

      <header>

        <div className={s.top} onMouseLeave={this.hideEmail}>
          <p className={emailview()}>
            <span>eugeneyaroshenko@gmail.com</span>
          </p>
            <div className={s.left_side}>
              <div className={s.name_box}><span><Icon viewBox='0 0 40 40' size="100%" icon="logoS"/></span>Eugene</div>
            </div>

            <div className={s.right_side}>

              <ul>
                 <li onClick={this.showEmail}><a href="#"><Icon icon='email' viewBox="0 0 20 20"/></a></li>
                 <li><a target="_blank" href="https://www.facebook.com/eugeneyar"><Icon icon='facebook' viewBox="0 0 20 20" /></a></li>
                 <li><a target="_blank" href="https://www.instagram.com/zhen9_9/"><Icon icon='instagram' viewBox="0 0 20 20" /></a></li>
                 <li><a target="_blank" href="https://github.com/EugeneDesigner"><Icon icon='github' viewBox="0 0 20 20" /></a></li>

              </ul>
            </div>
        </div>
        <div className={s.navigate}><Navigation  /></div>

      </header>
    );
  }




}

export default Header;
