import React, { Component } from 'react';
import s from './style.scss';
import cx from 'classnames';
import NavLink from '../../core/NavLink';
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
              <h1 className={s.name}> Hi&#44; I&#39;m Eugene</h1>
              <h2 className={s.welcome}>And this is my &#47;home&#47;</h2>
              <h3 className={s.follow}> Don&#39;t be shy&#44; come on in&#33; </h3>
              <div className={s.arrow}> <NavLink to="/portfolio/about"><Icon size="70px" className={s.icon} viewBox="169.5 174.21 13.012 13.012" icon='arrow'/></NavLink></div>
          </div>
      </div>
    </div>
    )
  }
}

export default Intro;
