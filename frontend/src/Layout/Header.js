import React from 'react'
import logo from '../logo-metaco.svg'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href='/' className="navbar-brand">
                        <img src={logo} alt={logo} style={{ height: "70px" }}>
                        </img>
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/leaderboard">Leaderboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/leaderboard/create">Create The Winner</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/explore">Explore</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header