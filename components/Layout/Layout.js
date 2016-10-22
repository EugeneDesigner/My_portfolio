
import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import s from './Layout.css';




class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };


  render() {
    
    return (

      <div className={s.container}>
          <Header />
          <main className={s.content}>
            <div {...this.props} className={cx(s.container, this.props.className)} />
          </main>
        </div>

    );
  }
}

export default Layout;
