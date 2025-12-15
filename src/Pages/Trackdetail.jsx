const Trackdetail = () => {
    return (
        <>
            <div className="app-body" id="view">
                <div className="pos-rlt">
                    <div
                        className="page-bg"
                        data-stellar-ratio={2}
                        style={{ backgroundImage: 'url("images/b0.jpg")' }}
                    />
                </div>
                <div className="page-content">
                    <div className="padding b-b">
                        <div className="row-col">
                            <div className="col-sm w w-auto-xs m-b">
                                <div className="item w r">
                                    <div className="item-media">
                                        <div
                                            className="item-media-content"
                                            style={{ backgroundImage: 'url("images/b0.jpg")' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="p-l-md no-padding-xs">
                                    <div className="page-title">
                                        <h1 className="inline">Simple Place To Be</h1>
                                    </div>
                                    <p
                                        className="item-desc text-ellipsis text-muted"
                                        data-ui-toggle-class="text-ellipsis"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam
                                        tu hanc copiosiorem etiam soles dicere. Nihil illinc huc pervenit.
                                        Verum hoc idem saepe faciamus. Quid ad utilitatem tantae pecuniae?
                                        Utram tandem linguam nescio? Sed hoc sane concedamus.
                                    </p>
                                    <div className="item-action m-b">
                                        <a
                                            className="btn btn-icon white rounded btn-share pull-right"
                                            data-toggle="modal"
                                            data-target="#share-modal"
                                        >
                                            <i className="fa fa-share-alt" />
                                        </a>{" "}
                                        <button className="btn-playpause text-primary m-r-sm" />{" "}
                                        <span className="text-muted">2356</span>{" "}
                                        <a className="btn btn-icon rounded btn-favorite">
                                            <i className="fa fa-heart-o" />
                                        </a>
                                        <span className="text-muted">232</span>
                                        <div className="inline dropdown m-l-xs">
                                            <a
                                                className="btn btn-icon rounded btn-more"
                                                data-toggle="dropdown"
                                            >
                                                <i className="fa fa-ellipsis-h" />
                                            </a>
                                            <div className="dropdown-menu pull-right black lt" />
                                        </div>
                                    </div>
                                    <div className="item-meta">
                                        <a className="btn btn-xs rounded white">Pop</a>{" "}
                                        <a className="btn btn-xs rounded white">Happy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-col">
                        <div className="col-lg-9 b-r no-border-md">
                            <div className="padding">
                                <h6 className="m-b">
                                    <span className="text-muted">by</span>{" "}
                                    <a
                                        href="artistdetail"
                                        data-pjax=""
                                        className="item-author _600"
                                    >
                                        Rachel Platten
                                    </a>{" "}
                                    <span className="text-muted text-sm">- 10 song, 50 min 32 sec</span>
                                </h6>
                                <div
                                    id="tracks"
                                    className="row item-list item-list-xs item-list-li m-b"
                                >
                                    <div className="col-xs-12">
                                        <div
                                            className="item r"
                                            data-id="item-10"
                                            data-src="http://api.soundcloud.com/tracks/237514750/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b9.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">The Open Road</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        Postiljonen
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-right">5:20</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div
                                            className="item r"
                                            data-id="item-8"
                                            data-src="http://api.soundcloud.com/tracks/236288744/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b7.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Simple Place To Be</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        RYD
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-right">4:20</span>
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
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b6.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Reflection (Deluxe)</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        Fifth Harmony
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-right">5:05</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div
                                            className="item r"
                                            data-id="item-3"
                                            data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b2.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">I Wanna Be In the Cavalry</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        Jeremy Scott
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-right">2:50</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div
                                            className="item r"
                                            data-id="item-11"
                                            data-src="http://api.soundcloud.com/tracks/218060449/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b10.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Spring</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        Pablo Nouvelle
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-right">3:10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div
                                            className="item r"
                                            data-id="item-6"
                                            data-src="http://api.soundcloud.com/tracks/236107824/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b5.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Body on me</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        Rita Ora
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-right">3:55</span>
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
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b0.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Pull Up</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        Summerella
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-right">2:50</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div
                                            className="item r"
                                            data-id="item-12"
                                            data-src="http://api.soundcloud.com/tracks/174495152/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b11.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Happy ending</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        Postiljonen
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-right">5:20</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div
                                            className="item r"
                                            data-id="item-5"
                                            data-src="http://streaming.radionomy.com/JamendoLounge"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b4.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Live Radio</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        Radionomy
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-right">3:35</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div
                                            className="item r"
                                            data-id="item-4"
                                            data-src="http://api.soundcloud.com/tracks/230791292/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b3.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">What A Time To Be Alive</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        Judith Garcia
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-right">6:00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="m-b">From Rachel</h5>
                                <div className="row m-b">
                                    <div className="col-xs-6 col-sm-6 col-md-3">
                                        <div
                                            className="item r"
                                            data-id="item-2"
                                            data-src="http://api.soundcloud.com/tracks/259445397/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b1.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Fireworks</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        Kygo
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-stats text-xs">
                                                        <i className="fa fa-play text-muted" /> 30{" "}
                                                        <i className="fa fa-heart m-l-sm text-muted" /> 10
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-3">
                                        <div
                                            className="item r"
                                            data-id="item-8"
                                            data-src="http://api.soundcloud.com/tracks/236288744/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b7.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Simple Place To Be</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        RYD
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-stats text-xs">
                                                        <i className="fa fa-play text-muted" /> 400{" "}
                                                        <i className="fa fa-heart m-l-sm text-muted" /> 220
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-3">
                                        <div
                                            className="item r"
                                            data-id="item-12"
                                            data-src="http://api.soundcloud.com/tracks/174495152/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b11.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Happy ending</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        Postiljonen
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-stats text-xs">
                                                        <i className="fa fa-play text-muted" /> 860{" "}
                                                        <i className="fa fa-heart m-l-sm text-muted" /> 240
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-3">
                                        <div
                                            className="item r"
                                            data-id="item-4"
                                            data-src="http://api.soundcloud.com/tracks/230791292/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b3.jpg")' }}
                                                />
                                                <div className="item-overlay center">
                                                    <button className="btn-playpause">Play</button>
                                                </div>
                                            </div>
                                            <div className="item-info">
                                                <div className="item-overlay bottom text-right">
                                                    <a href="#" className="btn-favorite">
                                                        <i className="fa fa-heart-o" />
                                                    </a>{" "}
                                                    <a href="#" className="btn-more" data-toggle="dropdown">
                                                        <i className="fa fa-ellipsis-h" />
                                                    </a>
                                                    <div className="dropdown-menu pull-right black lt" />
                                                </div>
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">What A Time To Be Alive</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis hide">
                                                    <a href="artistdetail" className="text-muted">
                                                        Judith Garcia
                                                    </a>
                                                </div>
                                                <div className="item-meta text-sm text-muted">
                                                    <span className="item-meta-stats text-xs">
                                                        <i className="fa fa-play text-muted" /> 320{" "}
                                                        <i className="fa fa-heart m-l-sm text-muted" /> 20
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="m-b">Comments</h5>
                                <div className="streamline m-b m-l">
                                    <div className="sl-item">
                                        <div className="sl-left">
                                            <img src="images/a0.jpg" alt="." className="img-circle" />
                                        </div>
                                        <div className="sl-content">
                                            <div className="sl-author m-b-0">
                                                <a href="#">Peter Joo</a>{" "}
                                                <span className="sl-date text-muted">2 minutes ago</span>
                                            </div>
                                            <div>
                                                <p>Check your Internet connection</p>
                                            </div>
                                            <div className="sl-footer">
                                                <a href="#" data-toggle="collapse" data-target="#reply-1">
                                                    <i className="fa fa-fw fa-mail-reply text-muted" /> Reply
                                                </a>
                                            </div>
                                            <div className="box collapse m-a-0 b-a" id="reply-1">
                                                <form>
                                                    <textarea
                                                        className="form-control no-border"
                                                        rows={3}
                                                        placeholder="Type something..."
                                                        defaultValue={""}
                                                    />
                                                </form>
                                                <div className="box-footer clearfix">
                                                    <button className="btn btn-info pull-right btn-sm">
                                                        Post
                                                    </button>
                                                    <ul className="nav nav-pills nav-sm">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">
                                                                <i className="fa fa-camera text-muted" />
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">
                                                                <i className="fa fa-video-camera text-muted" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sl-item">
                                        <div className="sl-left">
                                            <img src="images/a2.jpg" alt="." className="img-circle" />
                                        </div>
                                        <div className="sl-content">
                                            <div className="sl-author m-b-0">
                                                <a href="#">Moke</a>{" "}
                                                <span className="sl-date text-muted">8:30</span>
                                            </div>
                                            <div>
                                                <p>
                                                    Call to customer{" "}
                                                    <a href="#" className="text-primary">
                                                        Jacob
                                                    </a>{" "}
                                                    and discuss the detail.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sl-item">
                                        <div className="sl-left">
                                            <img src="images/a3.jpg" alt="." className="img-circle" />
                                        </div>
                                        <div className="sl-content">
                                            <div className="sl-author m-b-0">
                                                <a href="#">Moke</a>{" "}
                                                <span className="sl-date text-muted">Sat, 5 Mar</span>
                                            </div>
                                            <blockquote>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Integer posuere erat a ante soe aiea ose dos soois.
                                                </p>
                                                <small>
                                                    Someone famous in{" "}
                                                    <cite title="Source Title">Source Title</cite>
                                                </small>
                                            </blockquote>
                                            <div className="sl-item">
                                                <div className="sl-left">
                                                    <img src="images/a2.jpg" alt="." className="img-circle" />
                                                </div>
                                                <div className="sl-content">
                                                    <div className="sl-date text-muted">Sun, 11 Feb</div>
                                                    <p>
                                                        <a href="#" className="text-primary">
                                                            Jessi
                                                        </a>{" "}
                                                        assign you a task{" "}
                                                        <a href="#" className="text-primary">
                                                            Mockup Design
                                                        </a>
                                                        .
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sl-item">
                                                <div className="sl-left">
                                                    <img src="images/a5.jpg" alt="." className="img-circle" />
                                                </div>
                                                <div className="sl-content">
                                                    <div className="sl-date text-muted">Thu, 17 Jan</div>
                                                    <p>Follow up to close deal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="m-t-lg m-b">Leave a comment</h5>
                                <form>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                            <label>Your name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Comment</label>
                                        <textarea
                                            className="form-control"
                                            rows={5}
                                            placeholder="Type your comment"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-sm white rounded">
                                            Submit comment
                                        </button>
                                    </div>
                                </form>
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
                                            data-id="item-3"
                                            data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b2.jpg")' }}
                                                />
                                            </div>
                                            <div className="item-info">
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">I Wanna Be In the Cavalry</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis">
                                                    <a href="artistdetail" className="text-muted">
                                                        Jeremy Scott
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div
                                            className="item r"
                                            data-id="item-6"
                                            data-src="http://api.soundcloud.com/tracks/236107824/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b5.jpg")' }}
                                                />
                                            </div>
                                            <div className="item-info">
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Body on me</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis">
                                                    <a href="artistdetail" className="text-muted">
                                                        Rita Ora
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <div
                                            className="item r"
                                            data-id="item-5"
                                            data-src="http://streaming.radionomy.com/JamendoLounge"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b4.jpg")' }}
                                                />
                                            </div>
                                            <div className="item-info">
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Live Radio</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis">
                                                    <a href="artistdetail" className="text-muted">
                                                        Radionomy
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
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b6.jpg")' }}
                                                />
                                            </div>
                                            <div className="item-info">
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Reflection (Deluxe)</a>
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
                                            data-id="item-12"
                                            data-src="http://api.soundcloud.com/tracks/174495152/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                        >
                                            <div className="item-media">
                                                <a
                                                    href="trackdetail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b11.jpg")' }}
                                                />
                                            </div>
                                            <div className="item-info">
                                                <div className="item-title text-ellipsis">
                                                    <a href="trackdetail">Happy ending</a>
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
                                    </a>
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
        </>
    )
}
export default Trackdetail;