import React from "react"
import { Link } from "gatsby"
import topnavStyles from "./topnav.module.css"

export default function TopNav(props) {
  return (
    <>
    <div className={topnavStyles.container}>
        <Link to="/work/" className={topnavStyles.link}>Work</Link>
        <Link to="/art/" className={topnavStyles.link}>Art</Link>
        <Link to="/contact/" className={topnavStyles.link}>Contact</Link>
    </div>
    </>
  )
}