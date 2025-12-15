import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import VerifyOTP from './VerifyOTP';
import { useLoginMutation } from '../../../service/auth';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpScreen, setOtpScreen] = useState(false);
  const [login, { isLoading, isSuccess, data, isError, error }] =
    useLoginMutation();

    
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('useEmail', email);
      toast.success('OTP sent to your email');
      setOtpScreen(true);
    }
    if (isError) {
      toast.error(error?.data?.message || 'Login failed');
    }
  }, [isSuccess, isError, data, error, email]);

  const loginHandle = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Email and Password are required!');
      return;
    }

    try {
      await login({ email, password }).unwrap();
    } catch (err) {
      toast.error(err?.data?.message || err.message);
    }
  };

  return (
    <>
      <div className="padding">
        <div className="navbar">
          <div className="pull-center">
            <a href="/" className="navbar-brand md">
              <span className="hidden-folded inline">pulse</span>
            </a>
          </div>
        </div>
      </div>

      {!otpScreen && (
        <div className="b-t">
          <div className="center-block w-xxl w-auto-xs p-y-md text-center">
            <div className="p-a-md">
              <div className="m-y text-sm">OR</div>

              <form onSubmit={loginHandle}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-lg black p-x-lg"
                >
                  {isLoading ? 'Signing...' : 'Sign in'}
                </button>
              </form>

              <div className="m-y">
                <a href="forgotpassword" className="_600">
                  Forgot password?
                </a>
              </div>

              <div>
                Do not have an account?{' '}
                <a href="signup" className="text-primary _600">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {otpScreen && (
        <VerifyOTP
          email={email}
          expired_at={data?.expired_at}
          type="login"
        />
      )}
    </>
  );
};

export default Signin;
