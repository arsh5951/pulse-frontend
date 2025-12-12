import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

const Header = () => {
    const [user,SetUser] = useState("");
    useEffect(()=> {
        const token = localStorage.getItem("token");
       if(token){
          getUser(token);
       }
    },[])


    const getUser = async (token) => {
        axios.defaults.headers.common['Authorization']= token;
        const res = await axios.get("http://127.0.0.1:5000/auth/getUser");
        console.log(res)
        SetUser(res.data.user)
     
    }

    const logout = () => {
        const confirm = window.confirm("ARE YOU SURE?");
        if(confirm){
            localStorage.removeItem("token");
            window.location.reload();

        }
    }
    return (
        <>
            <div className="app-header white lt box-shadow-z1">
                <div className="navbar" data-pjax="">
                    <a
                        data-toggle="collapse"
                        data-target="#navbar"
                        className="navbar-item pull-right hidden-md-up m-r-0 m-l"
                    >
                        <i className="material-icons">menu</i>
                    </a>{" "}
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
                    <ul className="nav navbar-nav pull-right">
                        {!user && (
                            <>
                        <li className="nav-item">
                            <a href="signup" className="nav-link">
                                Signup
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="signin" className="nav-link">
                                <span className="btn btn-sm rounded primary _600">Signin</span>
                            </a>
                        </li>
                    </>
                        )}
                        {user && (
                            <>
                              <li className="nav-item">
                            <a className="nav-link" data-toggle="modal" data-target="#search-modal">
                                <i className="material-icons">search</i>
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span className="hidden-xs-down btn btn-sm rounded primary _600">
                                    Upload
                                </span>{" "}
                                <span className="hidden-sm-up btn btn-sm btn-icon rounded primary">
                                    <i className="material-icons">file_upload</i>
                                </span>
                            </a>
                        </li> */}
                       <li className="nav-item dropdown open">
              <a
                href="#"
                className="nav-link clear"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                <span className="avatar w-32">
                  <img src="images/a3.jpg" alt="..." />
                </span>
              </a>
              <div className="dropdown-menu w dropdown-menu-scale pull-right">
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
                </a>{" "}
                
                           <a className="dropdown-item"  href="#" onClick={logout}>
                                
                                    Logout
                              {" "}
                              
                            </a>
                      
              </div>
            </li>
                          
                        </>
                        )}
                    </ul>
                    <div
                        className="collapse navbar-toggleable-sm l-h-0 text-center"
                        id="navbar"
                    >
                        <ul
                            className="nav navbar-nav nav-md inline text-primary-hover"
                            data-ui-nav=""
                        >
                            <li className="nav-item">
                                <a href="home" className="nav-link">
                                    <span className="nav-text">Discover</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="browse" className="nav-link">
                                    <span className="nav-text">Browse</span>
                                </a>
                            </li>
                            <li className="nav-item dropdown pos-stc">
                                <a href="chart" className="nav-link">
                                    <span className="nav-text">Charts</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="artist" className="nav-link">
                                    <span className="nav-text">Artists</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;