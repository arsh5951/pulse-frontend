const Docs = () => {
    return (
        <>
            <div className="row-col">
                <div className="col-md-2 w b-r light lt">
                    <div className="navsidebar">
                        <div className="navside" ui-jp="stick_in_parent">
                        <div className="p-a">
                            <h5>
                                pulse <small className="text-muted">docs</small>
                            </h5>
                        </div>
                        <nav className="nav-border b-primary">
                            <ul className="nav" ui-nav="">
                                <li>
                                    <a href="#build">
                                        <span className="nav-text">Build</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#styles">
                                        <span className="nav-text">Styles</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#scripts">
                                        <span className="nav-text">Scripts</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#elements">
                                        <span className="nav-label">
                                            <b className="label label-sm primary">8</b>
                                        </span>{" "}
                                        <span className="nav-text">Elements</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#browser">
                                        <span className="nav-text">Browser</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#libs">
                                        <span className="nav-text">Libs</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="padding">
                        <div id="build">
                            <h2>Build tools</h2>
                            <p className="text-md">
                                pulse uses{" "}
                                <a href="http://nodejs.org/" className="text-info">
                                    Grunt
                                </a>{" "}
                                for its CSS and JavaScript build system, it's optional, you can use
                                this theme without grunt tools, we included all the dependencies in
                                this theme.
                            </p>
                            <ol>
                                <li>
                                    <a href="https://nodejs.org/download" className="text-info">
                                        Download and install Node
                                    </a>
                                    , which we use to manage our dependencies.
                                </li>
                                <li>
                                    Run <code>npm install -g bower grunt-cli</code>
                                </li>
                                <li>
                                    Run <code>bower install --force-latest</code> to install
                                    dependencies
                                </li>
                                <li>
                                    Run <code>grunt build</code> to build dist with minified js and css
                                </li>
                                <li>
                                    Run <code>npm start</code> to start server
                                </li>
                            </ol>
                            <p className="m-t-md">
                                Note: any commands we tell you to run must be ran from the project's
                                root folder.
                            </p>
                        </div>
                        <div id="includes">
                            <h2 className="m-t-lg m-b">What's include</h2>
                            <p>
                                You'll find the following directories and files, grouping common
                                resources and providing both compiled and minified distribution files,
                                as well as raw source files.
                            </p>
                            <pre className="box p-a black">
                                {"  "}app/{"\n"}
                                {"    "}|-- bower.json{"\n"}
                                {"    "}|-- package.json{"\n"}
                                {"    "}|-- GruntFile.js{"\n"}
                                {"    "}|-- README.md{"\n"}
                                {"    "}|-- CHANGELOG.md{"\n"}
                                {"    "}|-- html/{"\n"}
                                {"    "}|{"   "}|-- css/{"\n"}
                                {"    "}|{"   "}|-- images/{"\n"}
                                {"    "}|{"   "}|-- libs/{"\n"}
                                {"    "}|{"   "}|-- scripts/{"\n"}
                                {"    "}|{"   "}|{"   "}|-- app.js{"\n"}
                                {"    "}|{"   "}|-- index.html
                            </pre>
                        </div>
                        <div id="styles">
                            <h2 className="m-t-lg m-b">Styles / Scss</h2>
                            <p className="text-md">
                                You can apply any provided colors to any blocks, even on the Light,
                                Grey, Dark, Black theme.
                            </p>
                            <p>
                                The css file is generated by Scss files. There are many variables you
                                can config to build the css file. many classes are extended from
                                bootstrap css.
                            </p>
                            <h6>
                                <a href="http://v4-alpha.getbootstrap.com/components/utilities/">
                                    Utility classes <i className="fa fa-link text-muted" />
                                </a>
                            </h6>
                            <h6 className="pointer" ui-toggle-class="show" ui-target="#margin">
                                Margin
                            </h6>
                            <pre className="box p-a hide" id="margin">
                                {"        "}.m-a-0 {"{"} margin:{"        "}0 !important; {"}"}
                                {"\n"}
                                {"        "}.m-t-0 {"{"} margin-top:{"    "}0 !important; {"}"}
                                {"\n"}
                                {"        "}.m-r-0 {"{"} margin-right:{"  "}0 !important; {"}"}
                                {"\n"}
                                {"        "}.m-b-0 {"{"} margin-bottom: 0 !important; {"}"}
                                {"\n"}
                                {"        "}.m-l-0 {"{"} margin-left:{"   "}0 !important; {"}"}
                                {"\n"}
                                {"        "}.m-x-0 {"{"} margin-right:{"  "}0 !important; margin-left:
                                {"   "}0 !important; {"}"}
                                {"\n"}
                                {"        "}.m-y-0 {"{"} margin-top:{"    "}0 !important;
                                margin-bottom: 0 !important; {"}"}
                                {"\n"}
                                {"\n"}
                                {"        "}.m-a {"{"} margin:{"        "}$spacer !important; {"}"}
                                {"\n"}
                                {"        "}.m-t {"{"} margin-top:{"    "}$spacer-y !important; {"}"}
                                {"\n"}
                                {"        "}.m-r {"{"} margin-right:{"  "}$spacer-x !important; {"}"}
                                {"\n"}
                                {"        "}.m-b {"{"} margin-bottom: $spacer-y !important; {"}"}
                                {"\n"}
                                {"        "}.m-l {"{"} margin-left:{"   "}$spacer-x !important; {"}"}
                                {"\n"}
                                {"        "}.m-x {"{"} margin-right:{"  "}$spacer-x !important;
                                margin-left: $spacer-x !important; {"}"}
                                {"\n"}
                                {"        "}.m-y {"{"} margin-top:{"    "}$spacer-y !important;
                                margin-bottom: $spacer-y !important; {"}"}
                                {"\n"}
                                {"        "}.m-x-auto {"{"} margin-right: auto !important;
                                margin-left: auto !important; {"}"}
                                {"\n"}
                                {"\n"}
                                {"        "}.m-a-md {"{"} margin:{"        "}($spacer * 1.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-t-md {"{"} margin-top:{"    "}($spacer-y * 1.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-r-md {"{"} margin-right:{"  "}($spacer-y * 1.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-b-md {"{"} margin-bottom: ($spacer-y * 1.5) !important;{" "}
                                {"}"}
                                {"\n"}
                                {"        "}.m-l-md {"{"} margin-left:{"   "}($spacer-y * 1.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-x-md {"{"} margin-right:{"  "}($spacer-x * 1.5)
                                !important; margin-left:{"   "}($spacer-x * 1.5) !important; {"}"}
                                {"\n"}
                                {"        "}.m-y-md {"{"} margin-top:{"    "}($spacer-y * 1.5)
                                !important; margin-bottom: ($spacer-y * 1.5) !important; {"}"}
                                {"\n"}
                                {"\n"}
                                {"        "}.m-a-lg {"{"} margin:{"        "}($spacer * 3) !important;{" "}
                                {"}"}
                                {"\n"}
                                {"        "}.m-t-lg {"{"} margin-top:{"    "}($spacer-y * 3)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-r-lg {"{"} margin-right:{"  "}($spacer-y * 3)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-b-lg {"{"} margin-bottom: ($spacer-y * 3) !important;{" "}
                                {"}"}
                                {"\n"}
                                {"        "}.m-l-lg {"{"} margin-left:{"   "}($spacer-y * 3)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-x-lg {"{"} margin-right:{"  "}($spacer-x * 3)
                                !important; margin-left:{"   "}($spacer-x * 3) !important; {"}"}
                                {"\n"}
                                {"        "}.m-y-lg {"{"} margin-top:{"    "}($spacer-y * 3)
                                !important; margin-bottom: ($spacer-y * 3) !important; {"}"}
                                {"\n"}
                                {"\n"}
                                {"        "}.m-a-sm {"{"} margin:{"        "}($spacer * 0.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-t-sm {"{"} margin-top:{"    "}($spacer-y * 0.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-r-sm {"{"} margin-right:{"  "}($spacer-y * 0.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-b-sm {"{"} margin-bottom: ($spacer-y * 0.5) !important;{" "}
                                {"}"}
                                {"\n"}
                                {"        "}.m-l-sm {"{"} margin-left:{"   "}($spacer-y * 0.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-x-sm {"{"} margin-right:{"  "}($spacer-x * 0.5)
                                !important; margin-left:{"   "}($spacer-x * 0.5) !important; {"}"}
                                {"\n"}
                                {"        "}.m-y-sm {"{"} margin-top:{"    "}($spacer-y * 0.5)
                                !important; margin-bottom: ($spacer-y * 0.5) !important; {"}"}
                                {"\n"}
                                {"\n"}
                                {"        "}.m-a-xs {"{"} margin:{"        "}($spacer * 0.25)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-t-xs {"{"} margin-top:{"    "}($spacer-y * 0.25)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-r-xs {"{"} margin-right:{"  "}($spacer-y * 0.25)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-b-xs {"{"} margin-bottom: ($spacer-y * 0.25)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-l-xs {"{"} margin-left:{"   "}($spacer-y * 0.25)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.m-x-xs {"{"} margin-right:{"  "}($spacer-x * 0.25)
                                !important; margin-left:{"   "}($spacer-x * 0.25) !important; {"}"}
                                {"\n"}
                                {"        "}.m-y-xs {"{"} margin-top:{"    "}($spacer-y * 0.25)
                                !important; margin-bottom: ($spacer-y * 0.25) !important; {"}"}
                                {"\n"}
                                {"        "}
                            </pre>
                            <h6 className="pointer" ui-toggle-class="show" ui-target="#padding">
                                Padding
                            </h6>
                            <pre className="box p-a hide" id="padding">
                                {"        "}.p-a-0 {"{"} padding:{"        "}0 !important; {"}"}
                                {"\n"}
                                {"        "}.p-t-0 {"{"} padding-top:{"    "}0 !important; {"}"}
                                {"\n"}
                                {"        "}.p-r-0 {"{"} padding-right:{"  "}0 !important; {"}"}
                                {"\n"}
                                {"        "}.p-b-0 {"{"} padding-bottom: 0 !important; {"}"}
                                {"\n"}
                                {"        "}.p-l-0 {"{"} padding-left:{"   "}0 !important; {"}"}
                                {"\n"}
                                {"\n"}
                                {"        "}.p-a {"{"} padding:{"        "}@spacer !important; {"}"}
                                {"\n"}
                                {"        "}.p-t {"{"} padding-top:{"    "}@spacer-y !important; {"}"}
                                {"\n"}
                                {"        "}.p-r {"{"} padding-right:{"  "}@spacer-x !important; {"}"}
                                {"\n"}
                                {"        "}.p-b {"{"} padding-bottom: @spacer-y !important; {"}"}
                                {"\n"}
                                {"        "}.p-l {"{"} padding-left:{"   "}@spacer-x !important; {"}"}
                                {"\n"}
                                {"        "}.p-x {"{"} padding-right:{"  "}@spacer-x !important;
                                padding-left:{"   "}@spacer-x !important; {"}"}
                                {"\n"}
                                {"        "}.p-y {"{"} padding-top:{"    "}@spacer-y !important;
                                padding-bottom: @spacer-y !important; {"}"}
                                {"\n"}
                                {"\n"}
                                {"        "}.p-a-md {"{"} padding:{"        "}(@spacer-y * 1.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-t-md {"{"} padding-top:{"    "}(@spacer-y * 1.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-r-md {"{"} padding-right:{"  "}(@spacer-y * 1.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-b-md {"{"} padding-bottom: (@spacer-y * 1.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-l-md {"{"} padding-left:{"   "}(@spacer-y * 1.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-x-md {"{"} padding-right:{"  "}(@spacer-x * 1.5)
                                !important; padding-left:{"   "}(@spacer-x * 1.5) !important; {"}"}
                                {"\n"}
                                {"        "}.p-y-md {"{"} padding-top:{"    "}(@spacer-y * 1.5)
                                !important; padding-bottom: (@spacer-y * 1.5) !important; {"}"}
                                {"\n"}
                                {"\n"}
                                {"        "}.p-a-lg {"{"} padding:{"        "}(@spacer-y * 3)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-t-lg {"{"} padding-top:{"    "}(@spacer-y * 3)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-r-lg {"{"} padding-right:{"  "}(@spacer-y * 3)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-b-lg {"{"} padding-bottom: (@spacer-y * 3) !important;{" "}
                                {"}"}
                                {"\n"}
                                {"        "}.p-l-lg {"{"} padding-left:{"   "}(@spacer-y * 3)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-x-lg {"{"} padding-right:{"  "}(@spacer-x * 3)
                                !important; padding-left:{"   "}(@spacer-x * 3) !important; {"}"}
                                {"\n"}
                                {"        "}.p-y-lg {"{"} padding-top:{"    "}(@spacer-y * 3)
                                !important; padding-bottom: (@spacer-y * 3) !important; {"}"}
                                {"\n"}
                                {"\n"}
                                {"        "}.p-a-sm {"{"} padding:{"        "}($spacer * 0.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-t-sm {"{"} padding-top:{"    "}($spacer-y * 0.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-r-sm {"{"} padding-right:{"  "}($spacer-y * 0.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-b-sm {"{"} padding-bottom: ($spacer-y * 0.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-l-sm {"{"} padding-left:{"   "}($spacer-y * 0.5)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-x-sm {"{"} padding-right:{"  "}($spacer-x * 0.5)
                                !important; padding-left:{"   "}($spacer-x * 0.5) !important; {"}"}
                                {"\n"}
                                {"        "}.p-y-sm {"{"} padding-top:{"    "}($spacer-y * 0.5)
                                !important; padding-bottom: ($spacer-y * 0.5) !important; {"}"}
                                {"\n"}
                                {"\n"}
                                {"        "}.p-a-xs {"{"} padding:{"        "}($spacer * 0.25)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-t-xs {"{"} padding-top:{"    "}($spacer-y * 0.25)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-r-xs {"{"} padding-right:{"  "}($spacer-y * 0.25)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-b-xs {"{"} padding-bottom: ($spacer-y * 0.25)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-l-xs {"{"} padding-left:{"   "}($spacer-y * 0.25)
                                !important; {"}"}
                                {"\n"}
                                {"        "}.p-x-xs {"{"} padding-right:{"  "}($spacer-x * 0.25)
                                !important; padding-left:{"   "}($spacer-x * 0.25) !important; {"}"}
                                {"\n"}
                                {"        "}.p-y-xs {"{"} padding-top:{"    "}($spacer-y * 0.25)
                                !important; padding-bottom: ($spacer-y * 0.25) !important; {"}"}
                                {"\n"}
                                {"\n"}
                                {"        "}
                            </pre>
                        </div>
                        <div id="scripts">
                            <h2 className="m-t-lg m-b">Scripts</h2>
                            <h5>Core modules</h5>
                            <ul>
                                <li>
                                    <h6>ui-jp</h6>
                                    <p>
                                        Dynamic jQuery plugin call on dom
                                        <br />
                                        <code>
                                            &lt;div ui-jp="stick_in_parent"
                                            ui-options="options"&gt;&lt;/div&gt;
                                        </code>
                                        <br />
                                        the ui-jp plugin will call the "stick_in_parent" function with the
                                        options, same as
                                        <code>$.stick_in_parent(options)</code>
                                        <br />
                                        you can config the plugins in the
                                        "html/scripts/config.lazyload.js".
                                    </p>
                                </li>
                                <li>
                                    <h6>ui-include</h6>
                                    <p>
                                        Include the html partials into the page
                                        <br />
                                        <code>
                                            &lt;div
                                            ui-include="'../views/blocks/navbar.brand.html'"&gt;&lt;/div&gt;
                                        </code>
                                        <br />
                                        the ui-include will be replaced with the real partial.
                                        <br />
                                        if you do not want to include the partials, you can just copy the
                                        real blocks and replace it.
                                    </p>
                                </li>
                            </ul>
                            <h5>Ajax</h5>
                            <p>
                                This template uses the Pjax for ajax load the page. you can disable it
                                by remove the relative codes(remove the html/scripts/ajax.js)
                            </p>
                        </div>
                        <div id="elements">
                            <h2 className="m-t-lg m-b">Elements</h2>
                            <p>Bootstrap 4 components</p>
                            <ul className="nav h6 l-h-2x">
                                <li>
                                    <a href="ui.arrow.html">
                                        <span>Arrow</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.box.html">
                                        <span>Box</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.button.html">
                                        <span>Button</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.color.html">
                                        <span>Color</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.dropdown.html">
                                        <span>Dropdown</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.grid.html">
                                        <span>Grid</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.icon.html">
                                        <span>Icon</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.label.html">
                                        <span>Label</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.list.html">
                                        <span>List Group</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.modal.html">
                                        <span>Modal</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.nav.html">
                                        <span>Nav</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.progress.html">
                                        <span>Progress</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.social.html">
                                        <span>Social</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.streamline.html">
                                        <span>Streamline</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.timeline.html">
                                        <span>Timeline</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="ui.widget.html">
                                        <span>Widget</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div id="browser">
                            <h2 className="m-t-lg m-b">Browser</h2>
                            <p>
                                For material icons on ie9, please check{" "}
                                <a
                                    href="http://google.github.io/material-design-icons/#icon-font-for-the-web"
                                    className="text-primary"
                                >
                                    Material Icons
                                </a>
                            </p>
                            <p>
                                <em>
                                    "For browsers that do not support ligatures, fall back to specifying
                                    the icons using numeric character references."
                                </em>
                            </p>
                            <p>
                                But numeric character does not pass the http://validator.w3.org/ .
                            </p>
                        </div>
                        <div id="libs">
                            <h2 className="m-t-lg m-b">Libs</h2>
                            <ul className="nav h6 l-h-2x">
                                <li>
                                    <a href="https://github.com/defunkt/jquery-pjax">
                                        <span>Pjax</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/HubSpot/pace">
                                        <span>Pace</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/pklauzinski/jscroll">
                                        <span>jScroll</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="../../../github.com/markdalgleish/stellar.html">
                                        <span>Stellar</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/johndyer/mediaelement">
                                        <span>Mediaelement</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/OwlCarousel2/OwlCarousel2">
                                        <span>OwlCarousel2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/leafo/sticky-kit">
                                        <span>Sticky-kit</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-y-lg text-muted">
                            <h2 className="text-muted">Thanks!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Docs;