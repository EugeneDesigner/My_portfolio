import React, { Component } from 'react';
import s from './style.scss';
import cx from 'classnames';
import Link from '../../components/Link';
import Icon from '../../components/Layout/Icon';







class Intro extends Component {
  render() {
    return (
      <div>
        <div className={s.main}>
          <div className={cx(s.left_column, s.zigzag)}>
          
            <Icon className={s.logo} size="100%" viewBox="0 0 260 360" icon="logo" />
          </div>
          <div className={s.right_column}>
              <h1 className={s.name}> Hi, Eugene is here</h1>
              <h2 className={s.welcome}>Very happy to welcome you to my home</h2>
                <h3 className={s.follow}> Don't be shy, come on in! </h3>
                <div className={s.arrow}> <Link to="/about"><Icon size="12rem" className={s.icon}viewBox="0 0 291.999 160.472" icon='arrow'/></Link></div>
          </div>
      </div>
    </div>
    )
  }
}

export default Intro;
