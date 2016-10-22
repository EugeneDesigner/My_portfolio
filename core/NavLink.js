import React from 'react'
import { Link } from 'react-router';
import s from './styles.scss';

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName={s.active}/>
  }
})
