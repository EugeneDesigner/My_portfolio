import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.scss';


class DevelopmentPage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };



  render() {
    return (
      <Layout className={s.content}>
        <div>
          <div>Lol</div>
          <div>Lol</div>
        </div>

      </Layout>
    );
  }

}

export default DevelopmentPage;
