import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast'

const VerifyOTP = ({type,email,expired_at}) => {

    const [loading,setLoading]= useState(false);
    const [otp, setOTP] = useState("");

    const HandleSubmit = async(e) => {
        e.preventDefault();
        
  if(email == "" && otp == ""){
    throw new Error("otp are required!");
  }

   const res = await axios.post(" http://127.0.0.1:5000/auth/verify-otp",{
              email,
              otp
          });


    }


    return (
          <div className="b-t">
                <div className="center-block w-xxl w-auto-xs p-y-md text-center">
                    <div className="p-a-md">
                      
                      <p>OTP sent on this {email}</p>
                        <form name="form" onSubmit={HandleSubmit}>
                          
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="6 digit OTP"
                                    onKeyUp={(e) => setOTP(e.target.value)}
                                  
                                    required=""
                                />
                            </div>
                            <p>     expired_at:  {expired_at}
                      </p>
                        
                            <button type="submit" disabled={loading} className="btn btn-lg black p-x-lg">
                                {loading ? "Verifying..." : "Verfiy OTP"}
                            </button>

                        </form>
                       
                       
                    </div>
                </div>
            </div>
    )
}

export default VerifyOTP