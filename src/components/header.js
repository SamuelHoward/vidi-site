import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import VidiLogo from "../images/vidi-icon.png"

const HeaderLink = props => (
	<li style={{ display: `inline-block`, marginBottom: `0rem`, marginRight: `1rem` }}>
	<Link to={props.to}>{props.children}</Link>
	</li>
) 

const HeaderImage = props => (
	<img src={props.source} alt="" style={{ width: `70px`, float: `left`, display: `inline-block`, marginBottom: `1.45rem`, marginRight: `1rem` }}/>
) 

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#46b4eb',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
	>
	<HeaderImage source={VidiLogo}/>
      <h1 style={{ margin: 10 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
	</h1>
	<ul style={{ listStyle: `none`, float: `right` }}>
	<HeaderLink to="/">Home</HeaderLink>
	<HeaderLink to="/docs">Docs</HeaderLink>
	<HeaderLink to="/samples">Samples</HeaderLink>
	</ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
