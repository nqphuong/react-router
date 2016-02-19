import React from 'react'
import {Link, IndexLink} from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return(
            <div>
                <h1>
                    Ghettohub Issues
                </h1>
                <ul role="nav">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})
