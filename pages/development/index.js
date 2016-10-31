import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.scss';
import cn from 'classnames';
import Background from '../../public/Backgrounds';






class DevelopmentPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      position: 'absolute',
      top: "75%",
      count: 0,
      lastScrollTop: 0,
      initialposition: 0

    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
   window.addEventListener('scroll', this.handleScroll);


 }
 componentWillUnmount() {
   window.removeEventListener('scroll', this.handleScroll);
}
  handleScroll(e) {
    if (this.state.initialposition == 0) {
      this.setState({
        initialposition: this.refs.first.getBoundingClientRect().bottom
      })
    };
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        elevator = this.refs.lift.getBoundingClientRect().top,
        pos      = this.refs.lift.offsetTop;
    if (elevator <= 100 && this.state.count == 0 && scrollTop > this.state.lastScrollTop) {
      this.setState({
        position: 'fixed',
        count: 1,
        top: '97px',
      })
    } else if (scrollTop + elevator < (this.state.initialposition - this.state.initialposition/3) && scrollTop < this.state.lastScrollTop) {
        this.setState({
          position: 'absolute',
          top: "80%",
          count: 0
        })
      }
    this.setState({
      lastScrollTop: scrollTop
    })

  console.log(this.state.initialposition, scrollTop, elevator)
  }


  render() {
        let css  = { position: this.state.position, top: this.state.top};

   console.log(css);

    return (
      <div className={s.content}>

      <section className={s.first_background}  ref="first">
        <div className={s.lift} ref="lift" style={css}>
          <Background height="60px" width="auto" viewBox="0 0 78.5 149.404" background="lift" /></div>
        <div className={s.building_background} >
          <Background viewBox="188.716 0 819.082 1102.821"
                      height="auto"
                      width="100%"
                      background="buildings"/></div>
      </section>

      <section className={cn(s.color_background, s.skies)}>
        <article className={s.main}>
        <Background viewBox="0 0 1255.187 1415.22"
                height="auto"
                width="100%"
                background="sky"/>
        </article>
      </section>

      <section className={cn(s.color_background, s.bulb)}>
        <article className={s.main}>

          <div className={s.text}>
              <p>Architecture</p>
              <p>&amp;</p>
              <p>Design</p>
          </div>
        </article>



      </section>
      <section id="wireframing" className={cn(s.color_background, s.wireframing)}>
        <article className={s.main}>

          <div className={s.responsive}>
              <Background viewBox="0 0 1404 800"
                      height="auto"
                      width="100%"
                      background="wireframing"/></div>
          <div className={s.main_text}>Wireframing</div>
        </article>
      </section>


      <section className={cn(s.color_background, s.draw)}>
        <article className={s.main}>

          <div className={s.design}><Background viewBox="0 0 1142 948.364"
                  height="auto"
                  width="100%"
                  background="design"/></div>
          <div className={s.main_text}>Design</div>
        </article>
      </section>

      <section  className={cn(s.color_background, s.comp)}>
        <article className={s.main}>

          <div className={s.computer}><Background viewBox="0 0 1008.39 864.637"
                  height="auto"
                  width="100%"
                  background="computer"/></div>
          <div className={s.main_text}>Coding</div>
          </article>
          <blockquote>
          The first 90% of the code accounts for the first 90% of the development time.
          The remaining 10% of the code accounts for the other 90% of the development time.
            <cite>Tom Cargill</cite>
          </blockquote>

      </section>

      <section className={cn(s.color_background, s.finish)}>
        <article className={s.main}>
          <div className={s.finish_title}> <h2>Finishing the project with a small loop</h2></div>
          <div className={s.loop}>
              <div>Test</div>
              <div>Run</div>
              <div>Improve</div>
              <div>Repeat</div>
          </div>
       </article>
      </section>
      <section className={cn(s.color_background, s.sunset)}>
        <article className={s.main}>
       </article>
      </section>

      </div>
    );
  }

}

export default DevelopmentPage;
