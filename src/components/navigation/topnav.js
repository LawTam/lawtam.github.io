import React from "react"
import { Link } from "gatsby"
import topnavStyles from "./topnav.module.css"

export default function TopNav(props) {
  return (
    <>
    <div>
        <Link to="/contact/">Contact</Link>
        <Link to="/work/">Work</Link>
        <Link to="/art/">Art</Link>
    </div>
    </>
  )
}