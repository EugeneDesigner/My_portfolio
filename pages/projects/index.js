import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.scss';


class ProjectsPage extends React.Component {





  render() {
    return (
      <div>
        <div className={s.works}>
          <a href="#first" className={s.drafts}><p>Drafts</p></a>
          <a href="#second" className={s.projects}><p>Projects</p></a>
        </div>


        <div className={s.thumbnails}>
          <div>
              <div className={s.photo}></div>
              <div className={s.description}>
                <ul>
                  <li><span>Title</span>: Travel website </li>
                  <li><span>Used technologies</span>: HTML/CSS, Jade, Bootstrap, </li>
                  <li><span>Description</span>: Update of the travel site to make visitors more engaged
                      with the 'emotion of travelling'</li>
                </ul>

              </div>
          </div>

          <div>
            <div className={s.photo}></div>
            <div className={s.description}>
              <ul>
                <li><span>Title</span>: Travel website </li>
                <li><span>Used technologies</span>: HTML/CSS, Jade, Bootstrap, </li>
                <li><span>Description</span>: Update of the travel site to make visitors more engaged
                    with the 'emotion of travelling'</li>
              </ul>

            </div>
          </div>

          <div>
            <div className={s.photo}></div>
            <div className={s.description}>
              <ul>
                <li><span>Title</span>: Travel website </li>
                <li><span>Used technologies</span>: HTML/CSS, Jade, Bootstrap, </li>
                <li><span>Description</span>: Update of the travel site to make visitors more engaged
                    with the 'emotion of travelling'</li>
              </ul>

            </div>
          </div>


        </div>

      </div>
    );
  }

}

export default ProjectsPage;
