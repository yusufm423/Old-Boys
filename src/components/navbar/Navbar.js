
import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
import logo from './amulogo.jpg'
import {navbar_items} from './Data'

class Navbar extends Component
{
    state = {s:false}
    display_navbar_items = _ =>
    {
        let items = navbar_items.map(item =>
        {
            return (
                <li className = "nav-item  me-lg-3 my-lg-0 my-2" key = {Math.random()}>
                    <NavLink className = "nav-link text-capitalize position-relative hover text-light" to = {`/${item.name === '' ? '': item.name}`}><i className = {`${item.icon} me-2`}></i>{item.name === '' ? 'home': item.name}</NavLink>
                </li>
            )
        })
        return items
    }

    add_shadow = _ =>
    {
        (window.scrollY >= 80) ? this.setState({s:true}): this.setState({s:false}) 
    }

    componentDidMount()
    {
        window.addEventListener('scroll', event =>
        {
            this.add_shadow()
        })

        document.addEventListener('DOMContentLoaded', event =>
        {
            this.add_shadow()
        })
    }

	render()
	{
		return (
            <nav className = {`navbar navbar-expand-lg bg-dark navbar-light text-dark fixed-top ${this.state.s ? "shadow-lg": "shadow"}`}>
                <div className = 'container py-2 '>
                    <Link className ="navbar-brand text-light" to="/"><img src={logo} className="mx-2" alt="AMU logo" /> Old Boys Association, AMU Aligarh</Link>
                    <button className="navbar-toggler text-light bg-secondary" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                    </button>

                    <div className ="collapse navbar-collapse justify-content-end text-light" id="navbarSupportedContent">    
                        <ul className ="navbar-nav">
                            {this.display_navbar_items()}
                        </ul>
                    </div>
                </div>
            </nav>
	   )
	}
}

export default Navbar