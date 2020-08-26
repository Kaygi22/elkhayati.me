import React, { Component } from 'react';
import { Link } from "gatsby"
import '../components/global.css'
import  Navbar from "../components/navbar/Navbar.js"
//import '../../public/all.css'

import { rhythm, scale } from "../utils/typography"

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
    
        return ( 
            <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                backgroundColor: 'var(--bg)',
                color: 'var(--textNormal)',
                transition: 'color 0.2s ease-out, background 0.2s ease-out',
            }}
            >
                 <div>
                    <Navbar />
                </div>
                <h1>Projects</h1>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    •
                    {` `}
                    <a style={{color:'var(--links)'}} href="https://twitter.com/elkhayati_me">Twitter</a>
                    {` `}
                    •
                    {` `}
                    <a style={{color:'var(--links)'}} href="https://twitter.com/elkhayati_me">LinkedIn</a>
                </footer>
            </div>
         );
    }
}
 
export default About;