import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="topnav">
            <div className="topnavElements">
                <NavLink to="/" className="navElement">Home</NavLink>
                <NavLink to="/addMovie" className="navElement">Add novie</NavLink>
                <NavLink to="/allMovies" className="navElement">Movies</NavLink>
                <NavLink to="/addShow" className="navElement">Add show</NavLink>
                <NavLink to="/allShows" className="navElement">Shows</NavLink>
            </div>
        </div>
    )
}

export default Navbar