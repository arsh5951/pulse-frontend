import Footer from "../../components/Footer";
import RightSidebar from "../../components/RightSidebar";
const Browse3 = () => {
    return (
        <>
            <div className="row player-sidebar">
                <div className="col-2">
                    <RightSidebar/>
                </div>
                <div className="col-10">
                    <div className="app-body" id="view">
                        <div className="page-content">
                            <div className="row-col">
                                <div className="col-lg-9 b-r no-border-md">
                                    <div className="padding">
                                        <div className="page-title m-b">
                                            <h1 className="inline m-a-0">Browse</h1>
                                            <div className="dropdown inline">
                                                <button
                                                    className="btn btn-sm no-bg h4 m-y-0 v-b dropdown-toggle text-primary"
                                                    data-toggle="dropdown"
                                                >
                                                    All
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item active">
                                                        All
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        acoustic
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        ambient
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        blues
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        classical
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        country
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        electronic
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        emo
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        folk
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        hardcore
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        hip hop
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        indie
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        jazz
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        latin
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        metal
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        pop
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        pop punk
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        punk
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        reggae
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        rnb
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        rock
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        soul
                                                    </a>{" "}
                                                    <a href="#" className="dropdown-item">
                                                        world
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-ui-jp="jscroll"
                                            className="jscroll-loading-center"
                                            data-ui-options="{
      autoTrigger: true,
      loadingHtml: '<i class=\'fa fa-refresh fa-spin text-md text-muted\'></i>',
      padding: 50,
      nextSelector: 'a.jscroll-next:last'
    }"
                                        >
                                            <div className="row">
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div
                                                        className="item r"
                                                        data-id="item-5"
                                                        data-src="http://streaming.radionomy.com/JamendoLounge"
                                                    >
                                                        <div className="item-media">
                                                            <a
                                                                href="track.detail"
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
                                                                <a href="track.detail">Live Radio</a>
                                                            </div>
                                                            <div className="item-author text-sm text-ellipsis">
                                                                <a href="artist.detail" className="text-muted">
                                                                    Radionomy
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div
                                                        className="item r"
                                                        data-id="item-4"
                                                        data-src="http://api.soundcloud.com/tracks/230791292/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                    >
                                                        <div className="item-media">
                                                            <a
                                                                href="track.detail"
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
                                                                <a href="track.detail">What A Time To Be Alive</a>
                                                            </div>
                                                            <div className="item-author text-sm text-ellipsis">
                                                                <a href="artist.detail" className="text-muted">
                                                                    Judith Garcia
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div
                                                        className="item r"
                                                        data-id="item-8"
                                                        data-src="http://api.soundcloud.com/tracks/236288744/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                    >
                                                        <div className="item-media">
                                                            <a
                                                                href="track.detail"
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
                                                                <a href="track.detail">Simple Place To Be</a>
                                                            </div>
                                                            <div className="item-author text-sm text-ellipsis">
                                                                <a href="artist.detail" className="text-muted">
                                                                    RYD
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
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
                                                                <a href="track.detail">The Open Road</a>
                                                            </div>
                                                            <div className="item-author text-sm text-ellipsis">
                                                                <a href="artist.detail" className="text-muted">
                                                                    Postiljonen
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div
                                                        className="item r"
                                                        data-id="item-3"
                                                        data-src="http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                    >
                                                        <div className="item-media">
                                                            <a
                                                                href="track.detail"
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
                                                                <a href="track.detail">I Wanna Be In the Cavalry</a>
                                                            </div>
                                                            <div className="item-author text-sm text-ellipsis">
                                                                <a href="artist.detail" className="text-muted">
                                                                    Jeremy Scott
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
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
                                                                <a href="track.detail">Fireworks</a>
                                                            </div>
                                                            <div className="item-author text-sm text-ellipsis">
                                                                <a href="artist.detail" className="text-muted">
                                                                    Kygo
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
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
                                                                <a href="track.detail">Spring</a>
                                                            </div>
                                                            <div className="item-author text-sm text-ellipsis">
                                                                <a href="artist.detail" className="text-muted">
                                                                    Pablo Nouvelle
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div
                                                        className="item r"
                                                        data-id="item-9"
                                                        data-src="http://api.soundcloud.com/tracks/264094434/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                    >
                                                        <div className="item-media">
                                                            <a
                                                                href="track.detail"
                                                                className="item-media-content"
                                                                style={{ backgroundImage: 'url("images/b8.jpg")' }}
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
                                                                <a href="track.detail">All I Need</a>
                                                            </div>
                                                            <div className="item-author text-sm text-ellipsis">
                                                                <a href="artist.detail" className="text-muted">
                                                                    Pablo Nouvelle
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
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
                                                                <a href="track.detail">Pull Up</a>
                                                            </div>
                                                            <div className="item-author text-sm text-ellipsis">
                                                                <a href="artist.detail" className="text-muted">
                                                                    Summerella
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div
                                                        className="item r"
                                                        data-id="item-6"
                                                        data-src="http://api.soundcloud.com/tracks/236107824/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                    >
                                                        <div className="item-media">
                                                            <a
                                                                href="track.detail"
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
                                                                <a href="track.detail">Body on me</a>
                                                            </div>
                                                            <div className="item-author text-sm text-ellipsis">
                                                                <a href="artist.detail" className="text-muted">
                                                                    Rita Ora
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
                                                    <div
                                                        className="item r"
                                                        data-id="item-12"
                                                        data-src="http://api.soundcloud.com/tracks/174495152/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                    >
                                                        <div className="item-media">
                                                            <a
                                                                href="track.detail"
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
                                                                <a href="track.detail">Happy ending</a>
                                                            </div>
                                                            <div className="item-author text-sm text-ellipsis">
                                                                <a href="artist.detail" className="text-muted">
                                                                    Postiljonen
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-sm-4 col-md-3">
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
                                                                <a href="track.detail">Reflection (Deluxe)</a>
                                                            </div>
                                                            <div className="item-author text-sm text-ellipsis">
                                                                <a href="artist.detail" className="text-muted">
                                                                    Fifth Harmony
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    href="scroll.item"
                                                    className="btn btn-sm white rounded jscroll-next"
                                                >
                                                    Show More
                                                </a>
                                            </div>
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
                                                    data-id="item-9"
                                                    data-src="http://api.soundcloud.com/tracks/264094434/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                >
                                                    <div className="item-media">
                                                        <a
                                                            href="track.detail"
                                                            className="item-media-content"
                                                            style={{ backgroundImage: 'url("images/b8.jpg")' }}
                                                        />
                                                    </div>
                                                    <div className="item-info">
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">All I Need</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis">
                                                            <a href="artist.detail" className="text-muted">
                                                                Pablo Nouvelle
                                                            </a>
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
                                                            href="track.detail"
                                                            className="item-media-content"
                                                            style={{ backgroundImage: 'url("images/b7.jpg")' }}
                                                        />
                                                    </div>
                                                    <div className="item-info">
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Simple Place To Be</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis">
                                                            <a href="artist.detail" className="text-muted">
                                                                RYD
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
                                                            <a href="artist.detail" className="text-muted">
                                                                Fifth Harmony
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
                                                            <a href="artist.detail" className="text-muted">
                                                                Postiljonen
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
                                                            href="track.detail"
                                                            className="item-media-content"
                                                            style={{ backgroundImage: 'url("images/b4.jpg")' }}
                                                        />
                                                    </div>
                                                    <div className="item-info">
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Live Radio</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis">
                                                            <a href="artist.detail" className="text-muted">
                                                                Radionomy
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
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Browse3;