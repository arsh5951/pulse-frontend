import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast'
import VerifyOTP from './VerifyOTP';
const Signin = () => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otpScreen, setOtpScreen] = useState(false);
    const [data, setData] = useState("");


    const loginHandle = async (e) => {

        e.preventDefault();
        try {
            setLoading(true);

            if (email == "" && password == "") {
                throw new Error("Email and Password are required!");
            }

            const res = await axios.post(" http://127.0.0.1:5000/auth/login", {
                email,
                password
            });

            if (res.data.status === true) {
                setData(res.data.data);
                toast.success(res.data.message);

                setOtpScreen(true)
            }

        }
        catch (err) {
            console.log(err)
            toast.error(err?.response?.data?.message || err.message)

        }

        finally {
            setLoading(false)
        }

    }
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
            {!otpScreen && (
                <>
                    <div className="b-t">
                        <div className="center-block w-xxl w-auto-xs p-y-md text-center">
                            <div className="p-a-md">
                                <div>
                                    <a href="#" className="btn btn-block indigo text-white m-b-sm">
                                        <i className="fa fa-facebook pull-left" /> Sign in with Facebook
                                    </a>{" "}
                                    <a href="#" className="btn btn-block red text-white">
                                        <i className="fa fa-google-plus pull-left" /> Sign in with Google+
                                    </a>
                                </div>
                                <div className="m-y text-sm">OR</div>
                                <form name="form" onSubmit={loginHandle}>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            onKeyUp={(e) => setEmail(e.target.value)}
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="password"
                                            onKeyUp={(e) => setPassword(e.target.value)}

                                            required=""
                                        />
                                    </div>
                                    <div className="m-b-md">
                                        <label className="md-check">
                                            <input type="checkbox" />
                                            <i className="primary" /> Keep me signed in
                                        </label>
                                    </div>
                                    <button type="submit" disabled={loading} className="btn btn-lg black p-x-lg">
                                        {loading ? "Signing..." : "Sign in"}
                                    </button>
                                </form>
                                <div className="m-y">
                                    <a href="forgotpassword" className="_600">
                                        Forgot password?
                                    </a>
                                </div>
                                <div>
                                    Do not have an account?{" "}
                                    <a href="signup" className="text-primary _600">
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {otpScreen && (
                <>
                    <VerifyOTP email={email} expired_at={data?.expired_at} type="login" />
                </>
            )}
        </>
    )
}

export default Signin;