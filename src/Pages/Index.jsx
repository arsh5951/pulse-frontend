import Footer from "../components/Footer";
import Header from "../components/Header";

const Index = () => {
    return (
        <>
          <Header/>
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
                                <a href="artist" className="btn circle white m-b-lg p-x-md">
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