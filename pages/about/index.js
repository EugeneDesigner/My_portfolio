
import React, { Component } from 'react';
import Layout from '../../components/Layout';
import s from './styles.scss';
import { title } from './index.md';



const Me = () => (
  <svg version="1.1"  x="0px" y="0px"
     width="20%" height="auto" viewBox="0 0 315.35 385.35" enable-background="new 0 0 315.35 385.35" >
  <path fill="#C958DD" stroke="#000000" stroke-miterlimit="10" d="M314.85,206.177c0,66.34-41.11,123.09-99.24,146.15
    c-17.93,7.11-37.48,11.02-57.94,11.02c-19.44,0-38.06-3.53-55.25-9.99C42.87,330.997,0.5,273.537,0.5,206.177
    c0-86.81,70.37-157.18,157.17-157.18C244.48,48.997,314.85,119.367,314.85,206.177z"/>
  <path fill="#4E9EB7" d="M215.61,352.327c-17.93,7.11-37.48,11.02-57.94,11.02c-19.44,0-38.06-3.53-55.25-9.99
    c7.1-18.9,14.41-45.62,14.41-45.62s66.86,2.27,70.46,0C189.42,306.397,203.41,331.537,215.61,352.327z"/>
  <path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M40.227,385.35"/>
  <path fill="#EACFB9" d="M237.834,157.952l-80.855-43.625l-80.717,43.625c0,0,10.49,113.897,19.237,129.204
    c8.747,15.307,61.6,39.921,61.6,39.921s49.653-24.613,58.4-39.921C224.247,271.849,237.834,157.952,237.834,157.952z"/>
  <path d="M109.167,221.832c0,0,4.667,3.088,23.333,0"/>
  <path d="M173.167,221.832c0,0,4.667,3.088,23.333,0"/>
  <polygon points="154.5,245.077 154.5,252.077 155.5,252.077 "/>
  <path fill="#FFFFFF" d="M139.5,279.577c0,0,25.833,3.5,33.667,0c7.833-3.5-4.667,11.5-4.667,11.5S145.5,294.077,139.5,279.577z"/>
  <path fill="#7F5A0E" d="M81.676,197.69c0,0-16.144-47.264-45.721-66.01c0,0,40.418,0.094,44.24,7.63s-4.065-39.565-21.38-50.869
    s49.234,15.072,58.477,24.493s0-37.681,0-37.681l18.486,28.261c0,0-12.94-88.55-24.031-101.739s57.306,50.869,66.549,67.826
    s25.88-24.493,25.88-30.145s7.394,73.478,0,81.014c-7.394,7.536-11.728,18.84,19.092,3.768s-15.395,18.84-15.395,18.84
    s44.366,15.072,77.64-20.725s-24.031,56.898-31.426,64.246c-7.394,7.348,0,22.368,9.243,11.09
    c9.243-11.278-11.503,25.577-25.88,29.841c-14.377,4.264-29.577-38.859-31.426-40.931c-1.849-2.072-20.334-2.072-18.486,11.116
    c1.849,13.188-3.697-24.493-3.697-24.493s-36.972,20.725-42.517,26.377s10.407-32.029,10.407-32.029s-32.59-1.507-45.53,19.029
    s-5.546-13.377-5.546-13.377s-29.577,47.035-31.426,54.604C67.38,235.397,81.676,197.69,81.676,197.69z"/>
  </svg>

)

class AboutPage extends Component {

  componentDidMount() {
    document.title = title;
  }



  render() {
    return (
      <Layout className={s.content}>
        <section className={s.intro}>
          <Me className={s.picture}/>
          <h4 >{title}</h4>
        </section>

        <section className={s.principles}>
            <div className={s.section_title}><p>My Three 'Web Developer' Principles:</p></div>

            <div >
              <div className={s.section_part}><div className={s.circle}></div></div>
              <div className={s.describe}>Make my work fly <s>damn</s> <span className={s.fast}>fast</span> </div>
            </div>
            <div>
              <div className={s.section_part}> Picture 2</div>
              <div className={s.describe}>Make it look <span className={s.great}>great</span> </div>
            </div>
            <div>
              <div className={s.section_part}>Picture 3</div>
              <div className={s.describe}>Guarantee it serves <span className={s.long}>long</span></div>
            </div>
        </section>

        <section className={s.instruments}>

        <div className={s.section_title}><p> To implement those principles, I use the following instruments:</p></div>

        <div className={s.instrument_column}>
          <div className={s.bubble}></div>
          <ul className={s.list_left}><span className={s.list_title}>Design</span>
            <li>HTML5 (wow!)</li>
            <li>CSS3 &#38; frameworks(Bootstrap, Foundation)</li>
            <li>Sketch(wireframing)</li>
            <li>Illustrator(icons, flat design)</li>
            <li>Photoshop</li>
          </ul>
        </div>

        <div className={s.instrument_column}>
            <div className={s.bubble}></div>
          <ul className={s.list_right}><span className={s.list_title}>Engine</span>
            <li>Javascript (ES6, Typescript)</li>
            <li>ReactJS &#38; Redux (SPA, Isomorphics Apps)</li>
            <li>Node.js &#38; Express (REST API, GraphQL)</li>
            <li>Webpack</li>
            <li>Karma, Jasmine, Chai(testing)</li>

          </ul>

        </div>


        </section>


        <section className={s.citation}>
          <p>Web is a world of art, but the part I love the most about this universe is that it has no limitations -
                just small challenges. Next day makes you better, brings you further. Love it!</p>
        </section>


      </Layout>
    );
  }

}

export default AboutPage;
