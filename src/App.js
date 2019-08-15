import React from 'react';
import './App.css';
import Slick from 'react-slick';
import img11 from './img11.jpg'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {

    var settingsNav = {
      slidesToShow: 12,
      slidesToScroll: 1,
      asNavFor: this.state.nav2,
      ref: slider => (this.slider1 = slider),
      centerMode: false,
      focusOnSelect: true,
      mobileFirst: true,
      arrows: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 8,
          }
        },
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        }
      ]
    }

    var settingsSlider = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: this.state.nav1,
      ref: slider => (this.slider2 = slider),
      centerMode: true,
      cssEase: 'ease',
      edgeFriction: 0.5,
      mobileFirst: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            centerMode: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true
          }
        }
      ]
    }

    return (
      <div className="container">
        <h1 className="title">Our Milestones</h1>
        <div className="timeline">
          <Slick className="timeline-nav" {...settingsNav}>
            <div className="timeline-nav__item">1985</div>
            <div className="timeline-nav__item">1988</div>
            <div className="timeline-nav__item">1998</div>
            <div className="timeline-nav__item">2006</div>
            <div className="timeline-nav__item">2008</div>
            <div className="timeline-nav__item">2010</div>
            <div className="timeline-nav__item">2012</div>
            <div className="timeline-nav__item">2013</div>
            <div className="timeline-nav__item">2015</div>
            <div className="timeline-nav__item">2016</div>
          </Slick>
          <div className="timeline-wrapper">
            <Slick className="timeline-slider" {...settingsSlider}>
              <div className="timeline-slider">
                <div className="timeline-slide" style={{ backgroundImage: 'red' }} data-year="1985">      <span className="timeline-year">1985</span>
                  <div className="timeline-slide__content">
                    <h4 className="timeline-title">Our first project</h4>
                    <p className="timeline-text">First project for the leading film actress Jamuna Barua, wife of Pramathesh Barua the legendary actor, director, and screenwriter</p>
                  </div>
                </div>
                <div className="timeline-slide" style={{ backgroundImage: `url(${img11}` }} data-year="1988">      <span className="timeline-year">1988</span>
                  <div className="timeline-slide__content">
                    <h4 className="timeline-title">Our first project</h4>
                    <p className="timeline-text">First project for the leading film actress Jamuna Barua, wife of Pramathesh Barua the legendary actor, director, and screenwriter</p>
                  </div>
                </div>
                <div className="timeline-slide" style={{ backgroundImage: `url(${img11}` }} data-year="1998">      <span className="timeline-year">1998</span>
                  <div className="timeline-slide__content">
                    <h4 className="timeline-title">Our nice super title</h4>
                    <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div className="timeline-slide" style={{ backgroundImage: `url(${img11}` }} data-year="2006">      <span className="timeline-year">2006</span>
                  <div className="timeline-slide__content">
                    <h4 className="timeline-title">Our nice super title</h4>
                    <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div className="timeline-slide" style={{ backgroundImage: `url(${img11}` }} data-year="2008">      <span className="timeline-year">2008</span>
                  <div className="timeline-slide__content">
                    <h4 className="timeline-title">Our nice super title</h4>
                    <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div className="timeline-slide" style={{ backgroundImage: `url(${img11}` }} data-year="2010">      <span className="timeline-year">2010</span>
                  <div className="timeline-slide__content">
                    <h4 className="timeline-title">Our nice super title</h4>
                    <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div className="timeline-slide" style={{ backgroundImage: `url(${img11}` }} data-year="2012">      <span className="timeline-year">2012</span>
                  <div className="timeline-slide__content">
                    <h4 className="timeline-title">Our nice super title</h4>
                    <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div className="timeline-slide" style={{ backgroundImage: `url(${img11}` }} data-year="2013">      <span className="timeline-year">2013</span>
                  <div className="timeline-slide__content">
                    <h4 className="timeline-title">Our nice super title</h4>
                    <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div className="timeline-slide" style={{ backgroundImage: `url(${img11}` }} data-year="2015">      <span className="timeline-year">2015</span>
                  <div className="timeline-slide__content">
                    <h4 className="timeline-title">Our nice super title</h4>
                    <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div className="timeline-slide" style={{ backgroundImage: `url(${img11}` }} data-year="2016">      <span className="timeline-year">2016</span>
                  <div className="timeline-slide__content">
                    <h4 className="timeline-title">Our nice super title</h4>
                    <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
              {/* <h1>top</h1>
              <h1>top</h1>
              <h1>top</h1>
              <h1>top</h1>
              <h1>top</h1>
              <h1>top</h1> */}
            </Slick>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
