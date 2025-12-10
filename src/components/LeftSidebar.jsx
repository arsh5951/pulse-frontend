const LeftSidebar = () => {
    
    return (
        <>
            <div className="sidebar ">
                <div className="left navside grey dk sidebar" data-layout="column">
                    <div className="navbar no-radius">
                        <a href="/" className="navbar-brand md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width={32}
                                height={32}
                            >
                                <circle cx={24} cy={24} r={24} fill="rgba(255,255,255,0.2)" />
                                <circle cx={24} cy={24} r={22} fill="#1c202b" className="brand-color" />
                                <circle cx={24} cy={24} r={10} fill="#ffffff" />
                                <circle
                                    cx={13}
                                    cy={13}
                                    r={2}
                                    fill="#ffffff"
                                    className="brand-animate"
                                />
                                <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF" />
                                <circle cx={24} cy={24} r={3} fill="#000000" />
                            </svg>{" "}
                            <img src="images/logo.png" alt="." className="hide" />{" "}
                            <span className="hidden-folded inline">pulse</span>
                        </a>
                    </div>
                    <div data-flex="" className="hide-scroll">
                        <nav className="scroll nav-stacked nav-active-primary">
                            <ul className="nav" data-ui-nav="">
                                <li className="nav-header hidden-folded">
                                    <span className="text-xs text-muted">Main</span>
                                </li>
                                <li>
                                    <a href="rtl">
                                        <span className="nav-icon">
                                            <i className="material-icons">play_circle_outline</i>
                                        </span>{" "}
                                        <span className="nav-text">Discover</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="browse2">
                                        <span className="nav-icon">
                                            <i className="material-icons">sort</i>
                                        </span>
                                        <span className="nav-text">Browse</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="chart2">
                                        <span className="nav-icon">
                                            <i className="material-icons">trending_up</i>
                                        </span>{" "}
                                        <span className="nav-text">Charts</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="artist2">
                                        <span className="nav-icon">
                                            <i className="material-icons">portrait</i>
                                        </span>{" "}
                                        <span className="nav-text">Artist</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="modal" data-target="#search-modal">
                                        <span className="nav-icon">
                                            <i className="material-icons">search</i>
                                        </span>{" "}
                                        <span className="nav-text">Search</span>
                                    </a>
                                </li>
                                <li className="nav-header hidden-folded m-t">
                                    <span className="text-xs text-muted">Your collection</span>
                                </li>
                                <li>
                                    <a href="profile2#tracks">
                                        <span className="nav-label">
                                            <b className="label">8</b>
                                        </span>
                                        <span className="nav-icon">
                                            <i className="material-icons">list</i>
                                        </span>{" "}
                                        <span className="nav-text">Tracks</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="profile2#playlists">
                                        <span className="nav-icon">
                                            <i className="material-icons">queue_music</i>
                                        </span>{" "}
                                        <span className="nav-text">Playlists</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="profile2#likes">
                                        <span className="nav-icon">
                                            <i className="material-icons">favorite_border</i>
                                        </span>{" "}
                                        <span className="nav-text">Likes</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div data-flex-no-shrink="">
                        <div className="nav-fold dropup">
                            <a data-toggle="dropdown">
                                <span className="pull-left">
                                    <img src="images/a3.jpg" alt="..." className="w-32 img-circle" />
                                </span>{" "}
                                <span className="clear hidden-folded p-x p-y-xs">
                                    <span className="block _500 text-ellipsis">Rachel Platten</span>
                                </span>
                            </a>
                            <div className="dropdown-menu w dropdown-menu-scale">
                                <a className="dropdown-item" href="profile#profile">
                                    <span>Profile</span>
                                </a>{" "}
                                <a className="dropdown-item" href="profile#tracks">
                                    <span>Tracks</span>
                                </a>{" "}
                                <a className="dropdown-item" href="profile#playlists">
                                    <span>Playlists</span>
                                </a>{" "}
                                <a className="dropdown-item" href="profile#likes">

                                    <span>Likes</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="docs">
                                    Need help?
                                </a>
                                <a className="dropdown-item" href="signin">
                                    Sign out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSidebar ; 