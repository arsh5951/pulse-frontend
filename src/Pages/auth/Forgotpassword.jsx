const Forgotpassword = () => {
    return (
        <>
            <div className="padding">
                <div className="navbar">
                    <div className="pull-center">
                        <a href="/" className="navbar-brand md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width={32}
                                height={32}
                            >
                                <circle cx={24} cy={24} r={24} fill="rgba(255,255,255,0.2)" />
                                <circle
                                    cx={24}
                                    cy={24}
                                    r={22}
                                    fill="#1c202b"
                                    className="brand-color"
                                />
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
                </div>
            </div>
            <div className="b-t">
                <div className="center-block w-xxl w-auto-xs p-y-md text-center">
                    <div className="p-a-md">
                        <div>
                            <h4>Forgot your password?</h4>
                            <p className="text-muted m-y">
                                Enter your email below and we will send you instructions on how to
                                change your password.
                            </p>
                        </div>
                        <form name="reset">
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    required=""
                                />
                            </div>
                            <button type="submit" className="btn black btn-block p-x-md">
                                Send
                            </button>
                        </form>
                        <div className="p-y-lg">
                            Return to{" "}
                            <a href="signin" className="text-primary _600">
                                Sign in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgotpassword;