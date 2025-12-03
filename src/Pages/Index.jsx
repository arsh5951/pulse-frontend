import Footer from "../components/Footer";

const Index = () => {
    return (
        <>
            <div className="app-header navbar-md black box-shadow-z1">
                <div className="navbar" data-pjax="">
                    <a
                        data-toggle="collapse"
                        data-target="#navbar"
                        className="navbar-item pull-right hidden-md-up m-r-0 m-l"
                    >
                        <i className="material-icons">menu</i>
                    </a>{" "}
                    <a href="index" className="navbar-brand md">
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
                    </ul>
                    <div
                        className="collapse navbar-toggleable-sm l-h-0 text-center"
                        id="navbar"
                    >
                        <ul className="nav navbar-nav nav-md inline text-primary-hover">
                            <li className="nav-item">
                                <a href="home" className="nav-link">
                                    <span className="nav-text">Site</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="player" className="nav-link">
                                    <span className="nav-text">Web App</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="rtl" className="nav-link">
                                    <span className="nav-text">Rtl</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="app-body">
                <div
                    className="owl-carousel black owl-theme owl-dots-bottom-center"
                    data-ui-jp="owlCarousel"
                    data-ui-options="{
       items: 1
      ,loop: true
      ,autoplay: true
      ,nav: true
    }"
                >
                    <div className="row-col">
                        <div className="col-lg-2" />
                        <div className="col-lg-8 text-center">
                            <div className="p-a-lg">
                                <h2 className="display-4 m-y-lg">
                                    A simple, fast and responsive music template
                                </h2>
                                <h6 className="text-muted m-b-lg">HTML5 Music Template</h6>
                                <a
                                    href="home"
                                    className="btn circle btn-outline b-primary m-b-lg p-x-md"
                                >
                                    Get it now
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2" />
                    </div>
                    <div className="row-col">
                        <div className="col-lg-2" />
                        <div className="col-lg-8 text-center">
                            <div className="p-a-lg">
                                <h2 className="display-4 m-y-lg">Bootstrap 4 CSS framework</h2>
                                <h6 className="text-muted m-b-lg">Responsive layout</h6>
                                <a
                                    href="player"
                                    className="btn circle btn-outline b-primary m-b-lg p-x-md"
                                >
                                    View App
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2" />
                    </div>
                    <div className="row-col">
                        <div className="col-lg-2" />
                        <div className="col-lg-8 text-center">
                            <div className="p-a-lg">
                                <h2 className="display-4 m-y-lg">
                                    Ajax powered page switch with great experience
                                </h2>
                                <h6 className="text-muted m-b-lg">
                                    No refresh page when switching pages
                                </h6>
                                <a
                                    href="rtl"
                                    className="btn circle btn-outline b-primary m-b-lg p-x-md"
                                >
                                    Get RTL
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2" />
                    </div>
                </div>
                <div className="row-col">
                    <div className="col-sm-6">
                        <div
                            className="black cover cover-gd"
                            style={{ backgroundImage: 'url("images/b1.jpg")' }}
                        >
                            <div className="p-a-lg text-center">
                                <h3 className="display-3 m-y-lg">Music</h3>
                                <p className="text-muted text-md m-b-lg">
                                    Get ready for high sound quality.
                                </p>
                                <a href="player" className="btn circle white m-b-lg p-x-md">
                                    Try Free
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 black lt">
                        <div
                            className="black cover cover-gd"
                            style={{ backgroundImage: 'url("images/b7.jpg")' }}
                        >
                            <div className="p-a-lg text-center">
                                <h3 className="display-3 m-y-lg">Artists</h3>
                                <p className="text-muted text-md m-b-lg">
                                    Listen to your favorite Artists.
                                </p>
                                <a href="home" className="btn circle white m-b-lg p-x-md">
                                    View Artists
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-col dark-white">
                    <div className="col-md-3" />
                    <div className="col-md-6">
                        <div className="p-a-lg text-center">
                            <h3 className="display-4 m-y-lg">Light, Grey, Dark, Black themes</h3>
                            <p className="text-muted text-md m-b-lg">
                                Config any blocks with any colors
                            </p>
                            <a
                                href="home"
                                className="btn circle btn-outline b-black m-b-lg p-x-md"
                            >
                                Try Settings
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3" />
                </div>
                <div
                    className="black cover"
                    data-stellar-background-ratio="0.5"
                    style={{ backgroundImage: 'url("images/b10.jpg")' }}
                >
                    <div className="row-col">
                        <div className="col-md-4">
                            <div className="p-a-lg text-center">
                                <h4 className="m-y-lg">
                                    One Css framework, Unlimited options &amp; variables
                                </h4>
                                <p className="text-muted text-md m-b-lg">
                                    Colors, layouts, components and widgets. we pre-build them for you.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-a-lg text-center">
                                <h4 className="m-y-lg">
                                    Two layouts, Horizontal and side navigation
                                </h4>
                                <p className="text-muted text-md m-b-lg">
                                    With the flexiable layout options, you can build responsive layouts.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-a-lg text-center">
                                <h4 className="m-y-lg">
                                    Three templates, Landing, App, Site templates
                                </h4>
                                <p className="text-muted text-md m-b-lg">
                                    Choose the suitable one for your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Index;