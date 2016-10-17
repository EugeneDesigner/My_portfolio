import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.scss';


class ProjectsPage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };



  render() {
    return (
      <Layout className={s.content}>
        <div className={s.works}>
          <div className={s.drafts}><p>Drafts</p></div>
          <div className={s.projects}><p>Projects</p></div>
        </div>

      </Layout>
    );
  }

}

export default ProjectsPage;
