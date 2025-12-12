import RightSidebar from "../../components/RightSidebar";

const Artist3 = () => {
    return (
        <>
            <div className="row player-sidebar">
                <div className="col-2">
                    <RightSidebar />
                </div>
                <div className="col-10">
                    <div className="app-body" id="view">
                        <div className="page-content">
                            <div className="row-col">
                                <div className="col-lg-9 b-r no-border-md">
                                    <div className="padding">
                                        <div className="page-title m-b">
                                            <h1 className="inline m-a-0">Artists</h1>
                                            <div className="dropdown inline">
                                                <button
                                                    className="btn btn-sm no-bg h4 m-y-0 v-b dropdown-toggle text-primary"
                                                    data-toggle="dropdown"
                                                >
                                                    By name
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item active">
                                                        By name
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        Songs
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-ui-jp="jscroll"
                                            data-ui-options="{
      autoTrigger: false,
      loadingHtml: '<i class=\'fa fa-refresh fa-spin text-md text-muted\'></i>',
      padding: 50,
      nextSelector: 'a.jscroll-next:last'
    }"
                                        >
                                            <div className="row row-lg">
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div className="item">
                                                        <div className="item-media rounded">
                                                            <a
                                                                href="artistdetail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/a6.jpg")' }}
                                                            />
                                                        </div>
                                                        <div className="item-info text-center">
                                                            <div className="item-title text-ellipsis">
                                                                <a href="artistdetail">OlsJesse Russell</a>
                                                                <div className="text-sm text-muted">23 songs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div className="item">
                                                        <div className="item-media rounded">
                                                            <a
                                                                href="artistdetail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/a7.jpg")' }}
                                                            />
                                                        </div>
                                                        <div className="item-info text-center">
                                                            <div className="item-title text-ellipsis">
                                                                <a href="artistdetail">Richard Carr</a>
                                                                <div className="text-sm text-muted">6 songs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div className="item">
                                                        <div className="item-media rounded">
                                                            <a
                                                                href="artistdetail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/a5.jpg")' }}
                                                            />
                                                        </div>
                                                        <div className="item-info text-center">
                                                            <div className="item-title text-ellipsis">
                                                                <a href="artistdetail">Judy Woods</a>
                                                                <div className="text-sm text-muted">23 songs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div className="item">
                                                        <div className="item-media rounded">
                                                            <a
                                                                href="artistdetail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/a2.jpg")' }}
                                                            />
                                                        </div>
                                                        <div className="item-info text-center">
                                                            <div className="item-title text-ellipsis">
                                                                <a href="artistdetail">Jean Schneider</a>
                                                                <div className="text-sm text-muted">8 songs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div className="item">
                                                        <div className="item-media rounded">
                                                            <a
                                                                href="artistdetail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/b1.jpg")' }}
                                                            />
                                                        </div>
                                                        <div className="item-info text-center">
                                                            <div className="item-title text-ellipsis">
                                                                <a href="artistdetail">Melissa Garza</a>
                                                                <div className="text-sm text-muted">20 songs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div className="item">
                                                        <div className="item-media rounded">
                                                            <a
                                                                href="artistdetail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/a9.jpg")' }}
                                                            />
                                                        </div>
                                                        <div className="item-info text-center">
                                                            <div className="item-title text-ellipsis">
                                                                <a href="artistdetail">Douglas Torres</a>
                                                                <div className="text-sm text-muted">20 songs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div className="item">
                                                        <div className="item-media rounded">
                                                            <a
                                                                href="artistdetail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/a0.jpg")' }}
                                                            />
                                                        </div>
                                                        <div className="item-info text-center">
                                                            <div className="item-title text-ellipsis">
                                                                <a href="artistdetail">Crystal Guerrero</a>
                                                                <div className="text-sm text-muted">12 songs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div className="item">
                                                        <div className="item-media rounded">
                                                            <a
                                                                href="artistdetail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/a1.jpg")' }}
                                                            />
                                                        </div>
                                                        <div className="item-info text-center">
                                                            <div className="item-title text-ellipsis">
                                                                <a href="artistdetail">James Garcia</a>
                                                                <div className="text-sm text-muted">9 songs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div className="item">
                                                        <div className="item-media rounded">
                                                            <a
                                                                href="artistdetail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/a8.jpg")' }}
                                                            />
                                                        </div>
                                                        <div className="item-info text-center">
                                                            <div className="item-title text-ellipsis">
                                                                <a href="artistdetail">Sara King</a>
                                                                <div className="text-sm text-muted">14 songs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div className="item">
                                                        <div className="item-media rounded">
                                                            <a
                                                                href="artistdetail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/a3.jpg")' }}
                                                            />
                                                        </div>
                                                        <div className="item-info text-center">
                                                            <div className="item-title text-ellipsis">
                                                                <a href="artistdetail">Joe Holmes</a>
                                                                <div className="text-sm text-muted">24 songs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div className="item">
                                                        <div className="item-media rounded">
                                                            <a
                                                                href="artistdetail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/a4.jpg")' }}
                                                            />
                                                        </div>
                                                        <div className="item-info text-center">
                                                            <div className="item-title text-ellipsis">
                                                                <a href="artistdetail">Judith Garcia</a>
                                                                <div className="text-sm text-muted">13 songs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div className="item">
                                                        <div className="item-media rounded">
                                                            <a
                                                                href="artistdetail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/b0.jpg")' }}
                                                            />
                                                        </div>
                                                        <div className="item-info text-center">
                                                            <div className="item-title text-ellipsis">
                                                                <a href="artistdetail">Jeremy Scott</a>
                                                                <div className="text-sm text-muted">14 songs</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                href="scroll.author"
                                                className="btn btn-sm white rounded jscroll-next"
                                            >
                                                Show More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 w-xxl w-auto-md">
                                    <div
                                        className="padding"
                                        style={{ bottom: 60 }}
                                        data-ui-jp="stick_in_parent"
                                    >
                                        <h6 className="text text-muted">5 Likes</h6>
                                        <div className="row item-list item-list-sm m-b">
                                            <div className="col-xs-12">
                                                <div
                                                    className="item r"
                                                    data-id="item-11"
                                                    data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                >
                                                    <div className="item-media">
                                                        <a
                                                            href="track.detail"
                                                            className="item-media-content"
                                                            style={{ backgroundImage: 'url("images/b10.jpg")' }}
                                                        />
                                                    </div>
                                                    <div className="item-info">
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Spring</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis">
                                                            <a href="artistdetail" className="text-muted">
                                                                Pablo Nouvelle
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <div
                                                    className="item r"
                                                    data-id="item-7"
                                                    data-src="http://api.soundcloud.com/tracks/245566366/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                >
                                                    <div className="item-media">
                                                        <a
                                                            href="track.detail"
                                                            className="item-media-content"
                                                            style={{ backgroundImage: 'url("images/b6.jpg")' }}
                                                        />
                                                    </div>
                                                    <div className="item-info">
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Reflection (Deluxe)</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis">
                                                            <a href="artistdetail" className="text-muted">
                                                                Fifth Harmony
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <div
                                                    className="item r"
                                                    data-id="item-2"
                                                    data-src="http://api.soundcloud.com/tracks/259445397/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                >
                                                    <div className="item-media">
                                                        <a
                                                            href="track.detail"
                                                            className="item-media-content"
                                                            style={{ backgroundImage: 'url("images/b1.jpg")' }}
                                                        />
                                                    </div>
                                                    <div className="item-info">
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Fireworks</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis">
                                                            <a href="artistdetail" className="text-muted">
                                                                Kygo
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <div
                                                    className="item r"
                                                    data-id="item-1"
                                                    data-src="http://api.soundcloud.com/tracks/269944843/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                >
                                                    <div className="item-media">
                                                        <a
                                                            href="track.detail"
                                                            className="item-media-content"
                                                            style={{ backgroundImage: 'url("images/b0.jpg")' }}
                                                        />
                                                    </div>
                                                    <div className="item-info">
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Pull Up</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis">
                                                            <a href="artistdetail" className="text-muted">
                                                                Summerella
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <div
                                                    className="item r"
                                                    data-id="item-10"
                                                    data-src="http://api.soundcloud.com/tracks/237514750/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                >
                                                    <div className="item-media">
                                                        <a
                                                            href="track.detail"
                                                            className="item-media-content"
                                                            style={{ backgroundImage: 'url("images/b9.jpg")' }}
                                                        />
                                                    </div>
                                                    <div className="item-info">
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">The Open Road</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis">
                                                            <a href="artistdetail" className="text-muted">
                                                                Postiljonen
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="text text-muted">Go mobile</h6>
                                        <div className="btn-groups">
                                            <a
                                                href="#"
                                                className="btn btn-sm dark lt m-r-xs"
                                                style={{ width: 135 }}
                                            >
                                                <span className="pull-left m-r-sm">
                                                    <i className="fa fa-apple fa-2x" />
                                                </span>{" "}
                                                <span className="clear text-left l-h-1x">
                                                    <span className="text-muted text-xxs">Download on the</span>{" "}
                                                    <b className="block m-b-xs">App Store</b>
                                                </span>
                                            </a>{" "}
                                            <a href="#" className="btn btn-sm dark lt" style={{ width: 133 }}>
                                                <span className="pull-left m-r-sm">
                                                    <i className="fa fa-play fa-2x" />
                                                </span>{" "}
                                                <span className="clear text-left l-h-1x">
                                                    <span className="text-muted text-xxs">Get it on</span>{" "}
                                                    <b className="block m-b-xs m-r-xs">Google Play</b>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="b-b m-y" />
                                        <div className="nav text-sm _600">
                                            <a href="#" className="nav-link text-muted m-r-xs">
                                                About
                                            </a>{" "}
                                            <a href="#" className="nav-link text-muted m-r-xs">
                                                Contact
                                            </a>{" "}
                                            <a href="#" className="nav-link text-muted m-r-xs">
                                                Legal
                                            </a>{" "}
                                            <a href="#" className="nav-link text-muted m-r-xs">
                                                Policy
                                            </a>
                                        </div>
                                        <p className="text-muted text-xs p-b-lg">© Copyright 2016</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artist3;