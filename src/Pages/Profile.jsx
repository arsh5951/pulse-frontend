

const Profile = () => {
    return (
        <>
            <div className="app-body" id="view">
                <div
                    className="page-bg"
                    data-stellar-ratio={2}
                    style={{ backgroundImage: 'url("images/a3.jpg")' }}
                />
                <div className="page-content">
                    <div className="padding b-b">
                        <div className="row-col">
                            <div className="col-sm w w-auto-xs m-b">
                                <div className="item w rounded">
                                    <div className="item-media">
                                        <div
                                            className="item-media-content"
                                            style={{ backgroundImage: 'url("images/a3.jpg")' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="p-l-md no-padding-xs">
                                    <h1 className="page-title">
                                        <span className="h1 _800">Sidhu Moose Wala</span>
                                    </h1>
                                    <p
                                        className="item-desc text-ellipsis text-muted"
                                        data-ui-toggle-class="text-ellipsis"
                                    >
                                        Sidhu Moose Wala was a hugely popular Punjabi singer, rapper, and politician who began his career writing songs before gaining fame with his track "So High".  <br />
                                        He was known for blending folk music with modern beats to create songs that spoke to Punjabi identity and issues.  <br />
                                        After a successful music career that included collaborations with artists like Burna Boy and a political run with the Indian National Congress,  <br />
                                        he was tragically assassinated in a drive-by shooting in May 2022 at the age of 28.  <br />
                                    </p>
                                    <div className="item-action m-b">
                                        <a href="#" className="btn btn-sm rounded primary">
                                            Upload
                                        </a>{" "}
                                        <a href="#" className="btn btn-sm rounded white">
                                            Edit Profile
                                        </a>
                                    </div>
                                    <div className="block clearfix m-b">
                                        <span>2</span> <span className="text-muted">Studio Albums</span>,{" "}
                                        <span>140</span> <span className="text-muted">Tracks</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-col">
                        <div className="col-lg-9 b-r no-border-md">
                            <div className="padding p-y-0 m-b-md">
                                <div className="nav-active-border b-primary bottom m-b-md m-t">
                                    <ul className="nav l-h-2x" data-ui-jp="taburl">
                                        <li className="nav-item m-r inline">
                                            <a
                                                className="nav-link active"
                                                href="#"
                                                data-toggle="tab"
                                                data-target="#track"
                                            >
                                                Tracks
                                            </a>
                                        </li>
                                        <li className="nav-item m-r inline">
                                            <a
                                                className="nav-link"
                                                href="#"
                                                data-toggle="tab"
                                                data-target="#playlist"
                                            >
                                                Playlists
                                            </a>
                                        </li>
                                        <li className="nav-item m-r inline">
                                            <a
                                                className="nav-link"
                                                href="#"
                                                data-toggle="tab"
                                                data-target="#like"
                                            >
                                                Likes
                                            </a>
                                        </li>
                                        <li className="nav-item m-r inline">
                                            <a
                                                className="nav-link"
                                                href="#"
                                                data-toggle="tab"
                                                data-target="#profile"
                                            >
                                                Profile
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="track">
                                        <div className="row item-list item-list-by m-b">
                                            <div className="col-xs-12">
                                                <div
                                                    className="item r"
                                                    data-id="item-7"
                                                    data-src="http://api.soundcloud.com/tracks/245566366/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                >

                                                   {/* Moosetape  */}
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Moosetape</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Fifth Harmony
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-category">
                                                                <a href="browse" className="label">
                                                                    Punjabi Pop
                                                                </a>
                                                            </span>{" "}
                                                            <span className="item-meta-date text-xs">
                                                                15.05.2021
                                                            </span>
                                                        </div>
                                                        <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                            Moosetape is the second and final studio album by Indian singer, rapper and songwriter Sidhu Moose Wala, released independently on 15 May 2021.
                                                        </div>
                                                        <div className="item-action visible-list m-t-sm">
                                                            <a href="#" className="btn btn-xs white">
                                                                Edit
                                                            </a>{" "}
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs white"
                                                                data-toggle="modal"
                                                                data-target="#delete-modal"
                                                            >
                                                                Delete
                                                            </a>
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
                                                    {/* Snitches gets Stiches */}
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Snitches Get Stitches</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Sidhu Moose Wala
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-category">
                                                                <a href="browse" className="label">
                                                                    Hip-Hop
                                                                </a>
                                                            </span>{" "}
                                                            <span className="item-meta-date text-xs">
                                                                09.05.2020
                                                            </span>
                                                        </div>
                                                        <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                            Snitches Get Stitches is the debut and solo mixtape by singer-rapper Sidhu Moose Wala. The mixtape is a compilation of songs that were released on SoundCloud or leaked on the internet, as well as new songs. It was self-released on 9 May 2020 without prior announcement.
                                                        </div>
                                                        <div className="item-action visible-list m-t-sm">
                                                            <a href="#" className="btn btn-xs white">
                                                                Edit
                                                            </a>{" "}
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs white"
                                                                data-toggle="modal"
                                                                data-target="#delete-modal"
                                                            >
                                                                Delete
                                                            </a>
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
                                                    {/* PBX 1 */}
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">
                                                                PBX 1
                                                            </a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Sidhu Moose Wala
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-category">
                                                                <a href="browse" className="label">
                                                                    Gangsta Rap
                                                                </a>
                                                            </span>{" "}
                                                            <span className="item-meta-date text-xs">
                                                                18.10.2018
                                                            </span>
                                                        </div>
                                                        <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                            PBX 1 is the debut studio album by Indian rapper Sidhu Moose Wala, released on 18 October 2018, by T-Series. The album was produced by Byg Byrd, Intense, Snappy, and Harj Nagra.
                                                        </div>
                                                        <div className="item-action visible-list m-t-sm">
                                                            <a href="#" className="btn btn-xs white">
                                                                Edit
                                                            </a>{" "}
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs white"
                                                                data-toggle="modal"
                                                                data-target="#delete-modal"
                                                            >
                                                                Delete
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
                                                    {/* No Name */}
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">No Name</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Sidhu Moose Wala
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-category">
                                                                <a href="browse" className="label">
                                                                    Gangsta Rap
                                                                </a>
                                                            </span>{" "}
                                                            <span className="item-meta-date text-xs">
                                                                25.08.2022
                                                            </span>
                                                        </div>
                                                        <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                            No Name is the first extended play by Indian singer-rapper Sidhu Moose Wala, self-released on 25 April 2022 without prior announcement. Moose Wala also served as executive producer, while the tracks were produced by SOE, Snappy, JayB & Mxrci.
                                                        </div>
                                                        <div className="item-action visible-list m-t-sm">
                                                            <a href="#" className="btn btn-xs white">
                                                                Edit
                                                            </a>{" "}
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs white"
                                                                data-toggle="modal"
                                                                data-target="#delete-modal"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <div
                                                    className="item r"
                                                    data-id="item-9"
                                                    data-src="http://api.soundcloud.com/tracks/264094434/stream?client_id=a10d44d431ad52868f1bce6d36f5234c"
                                                >
                                                    {/* Moose Print */}
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Moose Print</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Sidhu Moose Wala
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-category">
                                                                <a href="browse" className="label">
                                                                    Hardcore
                                                                </a>
                                                            </span>{" "}
                                                            <span className="item-meta-date text-xs">
                                                                11.06.2025
                                                            </span>
                                                        </div>
                                                        <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                            Moose Print is a posthumous 3-track EP by Sidhu Moose Wala, released in June 2025, featuring songs like "0008," "Neal," and "Take Notes," showcasing his signature style with producers like The Kidd and Jenny Johal
                                                        </div>
                                                        <div className="item-action visible-list m-t-sm">
                                                            <a href="#" className="btn btn-xs white">
                                                                Edit
                                                            </a>{" "}
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs white"
                                                                data-toggle="modal"
                                                                data-target="#delete-modal"
                                                            >
                                                                Delete
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
                                                    {/* A for Arjan */}
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">A for Arjan</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Arjan Dhillon
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-category">
                                                                <a href="browse" className="label">
                                                                    Hip-Hop
                                                                </a>
                                                            </span>{" "}
                                                            <span className="item-meta-date text-xs">
                                                                25.11.22
                                                            </span>
                                                        </div>
                                                        <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                            The album A for Arjan by Punjabi singer-lyricist Arjan Dhillon is a full-length Punjabi music album, released in November 2022, that explores love and relationships through a mix of musical styles including bhangra, pop, rock, and hip-hop
                                                        </div>
                                                        <div className="item-action visible-list m-t-sm">
                                                            <a href="#" className="btn btn-xs white">
                                                                Edit
                                                            </a>{" "}
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs white"
                                                                data-toggle="modal"
                                                                data-target="#delete-modal"
                                                            >
                                                                Delete
                                                            </a>
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
                                                    {/* A for Arjan 2 */}
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">A for Arjan 2</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Arjan Dhillon
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-category">
                                                                <a href="browse" className="label">
                                                                    Heartbreak
                                                                </a>
                                                            </span>{" "}
                                                            <span className="item-meta-date text-xs">
                                                                25.08.2025
                                                            </span>
                                                        </div>
                                                        <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                            Arjan Dhillon's A for Arjan 2, released August 2025, is a 18-song Punjabi album exploring love, heartbreak, and relationships from the guy's perspective, following the first album's theme, featuring his own compositions, and includes hits like "Ki Kariye" and "He Is Mine" with a mix of sounds and deeper emotions.
                                                        </div>
                                                        <div className="item-action visible-list m-t-sm">
                                                            <a href="#" className="btn btn-xs white">
                                                                Edit
                                                            </a>{" "}
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs white"
                                                                data-toggle="modal"
                                                                data-target="#delete-modal"
                                                            >
                                                                Delete
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
                                                    {/* Jalwa */}
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Jalwa</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Arjan Dhillon
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-category">
                                                                <a href="browse" className="label">
                                                                    Punjabi Pop
                                                                </a>
                                                            </span>{" "}
                                                            <span className="item-meta-date text-xs">
                                                                17.10.2022
                                                            </span>
                                                        </div>
                                                        <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                            "Jalwa" is the popular second solo album by Punjabi artist Arjan Dhillon, released in 2022, showcasing his versatile style with electronic-pop, folk, and heartfelt tracks like "25-25," "It's My Time," and "Munde Pindan De," featuring collaborations with producers like Preet Hundal and Desi Crew, solidifying his status as a major breakout star with a massive fanbase.
                                                        </div>
                                                        <div className="item-action visible-list m-t-sm">
                                                            <a href="#" className="btn btn-xs white">
                                                                Edit
                                                            </a>{" "}
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs white"
                                                                data-toggle="modal"
                                                                data-target="#delete-modal"
                                                            >
                                                                Delete
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
                                                    {/* The Revolution */}
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">The Revolution</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                               Arjan Dhillon
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-category">
                                                                <a href="browse" className="label">
                                                                    Hip-Hop
                                                                </a>
                                                            </span>{" "}
                                                            <span className="item-meta-date text-xs">
                                                                19.02.2025
                                                            </span>
                                                        </div>
                                                        <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                            The Revolution is a popular 2025 Punjabi EP by singer-lyricist Arjan Dhillon, featuring 6 tracks like "Gears," "Scheme," and "Narazgi," with music primarily by Mxrci, showcasing Dhillon's strong lyrical skills but drawing some listener critiques for beat repetition, calling for more producer variety.
                                                        </div>
                                                        <div className="item-action visible-list m-t-sm">
                                                            <a href="#" className="btn btn-xs white">
                                                                Edit
                                                            </a>{" "}
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs white"
                                                                data-toggle="modal"
                                                                data-target="#delete-modal"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <div
                                                    className="item r"
                                                    data-id="item-5"
                                                    data-src="http://streaming.Hip-Hopnomy.com/JamendoLounge"
                                                >
                                                    {/* Saroor */}
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Saroor</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Arjan Dhillon
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-category">
                                                                <a href="browse" className="label">
                                                                    Punjabi folk
                                                                </a>
                                                            </span>{" "}
                                                            <span className="item-meta-date text-xs">
                                                                29.07.2023
                                                            </span>
                                                        </div>
                                                        <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                            "Saroor" is a popular 2023 Punjabi album by singer-lyricist Arjan Dhillon and music producer MXRCI, featuring 15 tracks like "Ilzaam," "Dunia," and "Range," showcasing Dhillon's distinct style, with tracks exploring themes of love and Punjabi culture
                                                        </div>
                                                        <div className="item-action visible-list m-t-sm">
                                                            <a href="#" className="btn btn-xs white">
                                                                Edit
                                                            </a>{" "}
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs white"
                                                                data-toggle="modal"
                                                                data-target="#delete-modal"
                                                            >
                                                                Delete
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
                                                    {/* Patander */}
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Patander</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Arjan Dhillon
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-category">
                                                                <a href="browse" className="label">
                                                                    Hip-Hop
                                                                </a>
                                                            </span>{" "}
                                                            <span className="item-meta-date text-xs">
                                                                11.11.2024
                                                            </span>
                                                        </div>
                                                        <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                            Patandar is a highly successful 2024 Punjabi album by singer-songwriter Arjan Dhillon, featuring 16 tracks produced by Mxrci, blending English and Punjabi, showcasing Dhillon's distinct style and cementing his place in the music industry.
                                                        </div>
                                                        <div className="item-action visible-list m-t-sm">
                                                            <a href="#" className="btn btn-xs white">
                                                                Edit
                                                            </a>{" "}
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs white"
                                                                data-toggle="modal"
                                                                data-target="#delete-modal"
                                                            >
                                                                Delete
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
                                                    {/* Manifest */}
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Manifest</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Arjan Dhillon
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-category">
                                                                <a href="browse" className="label">
                                                                    Punjabi folk
                                                                </a>
                                                            </span>{" "}
                                                            <span className="item-meta-date text-xs">
                                                                05.04.2024
                                                            </span>
                                                        </div>
                                                        <div className="item-except visible-list text-sm text-muted h-2x m-t-sm">
                                                            "Manifest" by Arjan Dhillon refers to his prolific Punjabi EP released in April 2024, featuring six tracks like "Opinion," "Fly," and the title track "Manifest," showcasing his diverse, experimental sound with production from Mxrci, highlighting his fast-paced output and blending styles from catchy pop to deep bass.
                                                        </div>
                                                        <div className="item-action visible-list m-t-sm">
                                                            <a href="#" className="btn btn-xs white">
                                                                Edit
                                                            </a>{" "}
                                                            <a
                                                                href="#"
                                                                className="btn btn-xs white"
                                                                data-toggle="modal"
                                                                data-target="#delete-modal"
                                                            >
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="playlist">
                                        <div className="row m-b">
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">The Revolution</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                RYD
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-stats text-xs">
                                                                <i className="fa fa-play text-muted" /> 400{" "}
                                                                <i className="fa fa-heart m-l-sm text-muted" />
                                                                220
                                                            </span>
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Jalwa</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Postiljonen
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-stats text-xs">
                                                                <i className="fa fa-play text-muted" /> 860{" "}
                                                                <i className="fa fa-heart m-l-sm text-muted" />
                                                                240
                                                            </span>
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Body on me</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Rita Ora
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-stats text-xs">
                                                                <i className="fa fa-play text-muted" /> 330{" "}
                                                                <i className="fa fa-heart m-l-sm text-muted" />
                                                                220
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="like">
                                        <div className="row m-b">
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Body on me</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Rita Ora
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-stats text-xs">
                                                                <i className="fa fa-play text-muted" /> 330{" "}
                                                                <i className="fa fa-heart m-l-sm text-muted" />
                                                                220
                                                            </span>
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
                                                            </a>
                                                            <a href="#" className="btn-more" data-toggle="dropdown">
                                                                <i className="fa fa-ellipsis-h" />
                                                            </a>
                                                            <div className="dropdown-menu pull-right black lt" />
                                                        </div>
                                                        <div className="item-title text-ellipsis">
                                                            <a href="track.detail">Jalwa</a>
                                                        </div>
                                                        <div className="item-author text-sm text-ellipsis hide">
                                                            <a href="artist.detail" className="text-muted">
                                                                Postiljonen
                                                            </a>
                                                        </div>
                                                        <div className="item-meta text-sm text-muted">
                                                            <span className="item-meta-stats text-xs">
                                                                <i className="fa fa-play text-muted" /> 860{" "}
                                                                <i className="fa fa-heart m-l-sm text-muted" />
                                                                240
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="profile">
                                        <form>
                                            <div className="form-group row">
                                                <div className="col-sm-3 form-control-label text-muted">
                                                    Location
                                                </div>
                                                <div className="col-sm-9">
                                                    <input defaultValue="Earth" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-3 form-control-label text-muted">
                                                    Website
                                                </div>
                                                <div className="col-sm-9">
                                                    <input placeholder="http://" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-3 form-control-label text-muted">
                                                    Music Type
                                                </div>
                                                <div className="col-sm-9">
                                                    <select className="form-control c-select">
                                                        <option>Blue</option>
                                                        <option>Punjabi folk</option>
                                                        <option>Pop</option>
                                                        <option>Punjabi folk</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
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
                                                    <a href="track.detail">The Revolution</a>
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
                                            data-id="item-5"
                                            data-src="http://streaming.Hip-Hopnomy.com/JamendoLounge"
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
                                                    <a href="track.detail">Saroor</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis">
                                                    <a href="artist.detail" className="text-muted">
                                                        Hip-Hopnomy
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
                                                    <a href="track.detail">Patander</a>
                                                </div>
                                                <div className="item-author text-sm text-ellipsis">
                                                    <a href="artist.detail" className="text-muted">
                                                        Kygo
                                                    </a>
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
                                                    href="track.detail"
                                                    className="item-media-content"
                                                    style={{ backgroundImage: 'url("images/b3.jpg")' }}
                                                />
                                            </div>
                                            <div className="item-info">
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
                <div
                    id="delete-modal"
                    className="modal fade animate black-overlay"
                    data-backdrop="false"
                >
                    <div className="row-col h-v">
                        <div className="row-cell v-m">
                            <div className="modal-dialog modal-sm">
                                <div className="modal-content flip-y">
                                    <div className="modal-body text-center">
                                        <p className="p-y m-t">
                                            <i className="fa fa-remove text-warning fa-3x" />
                                        </p>
                                        <p>Are you sure to delete this item?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-default p-x-md"
                                            data-dismiss="modal"
                                        >
                                            No
                                        </button>{" "}
                                        <button
                                            type="button"
                                            className="btn red p-x-md"
                                            data-dismiss="modal"
                                        >
                                            Yes
                                        </button>
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

export default Profile;