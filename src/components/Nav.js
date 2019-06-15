import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta', 'contact'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Portfolio</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Work</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Videography</a>
                </Scroll>
            </li>
        
            <li>
                <Scroll type="id" element="contact">
                    <a href="#">Contact</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
