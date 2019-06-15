import React from 'react'
import { Link } from 'gatsby'



const Footer = (props) => (
    <footer id="footer">
        <section id="contact">
            <h2>If you like what you see</h2>
            <p>Feel free to contact me. If you landed on this page, i probably had reached out to you anyway,<br></br>
              so I'm hoping to hear from you.</p>
        </section>
        <section>
            <h2>Contact</h2>
            <dl className="alt">

                <dt>Email</dt>
                <dd><a href="mailto:mail@tobiasallmendinger.de">mail@tobiasallmendinger.de</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://www.linkedin.com/in/tobiasallmendinger/" className="icon fa-linkedin alt"><span className="label">Linkedin</span></a></li>
                <li><a href="https://twitter.com/Linkyrex" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/Linkyrex/Portfolio" className="icon fa-github alt"><span className="label">GitHub</span></a></li>

            </ul>
        </section>
        <p className="copyright">&copy; Tobias Allmendinger 2019</p>
    </footer>
)

export default Footer
