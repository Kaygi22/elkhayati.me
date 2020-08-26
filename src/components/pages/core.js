import React, { Component } from 'react';
import '../global.css'
import  Navbar from "../navbar/Navbar.js"
import {HeartIcon} from '../Social'
import { Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"

class PageCore extends Component {
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
                {this.props.children}
                <footer style={{paddingTop: "30px", paddingLeft: "6%"}}>
         {new Date().getFullYear()} - Built with <HeartIcon /> by <Link to="/about">@elmehdi</Link> using GatsbyJS - <Link to="https://github.com/Kaygi22/elkhayati.me">source code</Link>.
        {` `}
      </footer>
            </div>
         );
    }
}
 
export default PageCore;