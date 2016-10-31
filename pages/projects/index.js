import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.scss';


class ProjectsPage extends React.Component {





  render() {
    return (
      <div className={s.content}>
        <div className={s.works}>
          <p>Below are some of my works I've done throughout the past year.
             Feel free to look around, try them out. I hope you will like them.
             And yeah, I would be happy to answer all your questions, just
             throw me a message via the links provided above</p>
        </div>


        <div className={s.thumbnails}>
          <div className={s.thumbnails__column} id="a"><div className={s['thumbnails__column--slide']}>
                <h3>Design</h3>
                <p>Aquaria Vattenmuseum</p>
          </div></div>
          <div className={s.thumbnails__column} id="b"><div className={s['thumbnails__column--slide']}>
                <h3>Website</h3>
                <p>Aquaria Vattenmuseum</p>
          </div></div>
          <div className={s.thumbnails__column} id="c"><div className={s['thumbnails__column--slide']}>
                <h3>API</h3>
                <p>Aquaria Vattenmuseum</p>
          </div></div>
          <div className={s.thumbnails__column} id="d"><div className={s['thumbnails__column--slide']}>
                <h3>Art</h3>
                <p>Aquaria Vattenmuseum</p>
          </div></div>
          <div className={s.thumbnails__column} id="e"><div className={s['thumbnails__column--slide']}>
                <h3>Icons</h3>
                <p>Aquaria Vattenmuseum</p>
          </div></div>
       </div>

      </div>
    );
  }

}

export default ProjectsPage;
