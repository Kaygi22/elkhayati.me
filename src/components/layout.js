import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import './global.css'
import  Navbar from "./navbar/Navbar.js"
import {Twitter, HeartIcon} from './Social'

//import '../../public/all.css'

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div>
        <Navbar />
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          paddingTop: 20,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      </div>
    )
  } else {
    header = (
      <div>
        <Navbar />
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          paddingTop: 20,
          textAlign:"center"
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
      </div>
    )
  }
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
      <header>{header}</header>
      <main>
        <MDXProvider>
          {children}
        </MDXProvider>
        </main>
      <footer style={{paddingTop: "30px", paddingLeft: "6%"}}>
         {new Date().getFullYear()} - Built with <HeartIcon /> by <Link to="/about">@elmehdi</Link> using GatsbyJS - <Link to="https://github.com/Kaygi22/elkhayati.me">source code</Link>.
        {` `}
      </footer>
    </div>
  )
}

export default Layout
