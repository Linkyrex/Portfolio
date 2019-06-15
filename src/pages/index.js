import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import me from '../assets/images/me.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Tobias Allmendinger" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About me</h2>
                </header>
                <p>I did my Bachelor of Science Degree in Media Informatics at Furtwangen University. I always passionate about learning new things. In Photo or Videography i enjoy the equally important technical and creative aspects. Lastly Programming also cotaining both facets is providing the ultimate tool to create something new. Thats why it became my favorite tool to use.</p>

              </div>
              <span className="image"><img src={me} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <span className="icon major style4 fa-code"></span>
              <h2>Work</h2>
            </header>
              <p>Troughout my time at the University i collected the diffrent exercises given in web development. I leaned to use JavaScript based web technologies like React and Angular, as well as APIs such as REST and GraphQL. This website was developed using the Gatsby Framework. Websites with limited content, like this one, make perfect use of prefetching those Ressources, thus allowing a great Performance. i learned to use. I collected the diffrent exercises given during my studies. Click on the button Below to see more.</p>

            <footer className="major">
              <ul className="actions">
                <li><Link to="/~allmendi/" title="Below" className="button hover">Below</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Videography</h2>
</header>
              <p>In my third Semester i completed an internship as Videoeditor. The technical perspective always fascinated me, thats why i did my Bachelor Thesis in Videocompression. I also did various videoprojects for the campus owned TV Show and other companies. For more click on More.</p>


            <footer className="major">
              <ul className="actions">

                <li><a href="http://atlasvideography.com" className="button">More</a></li>
              </ul>
            </footer>
          </section>


        </div>

      </Layout>
    )
  }
}

export default Index
