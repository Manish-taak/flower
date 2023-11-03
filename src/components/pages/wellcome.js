import React , { useRef, useState } from 'react'
import apple from '../image/Apple.png'
import google from '../image/Google.png'
const Wellcome = ({popup}) => {

    const signref = useRef()
     
    const [user, setuser] = useState({
        phonenumber: ""
      })
      const [res, setres] = useState("")
    
      let name,value;
      let inputdata = async (e) => {
        name = e.target.name
        value = e.target.value
        // setuser((value) => ({ ...value, [e.target.name]: [e.target.value] }));
        setuser({...user,[name]:value})
        console.log(e)
      }
    
      let submitdata = async(e) => {
        e.preventDefault();
    
        if(user.phonenumber === ""){
          alert("Enter your phonenumber")
        };
    
        var requestoption = {
            method:"POST",
            headers : {
              "content-type" : "application/json",
          },
          body: JSON.stringify(user),
        };
    
        let res = await fetch("http://localhost:2005/signup/signuppost",requestoption)
        .then((res)=>res.json)
        .then((result)=>{
            setres(alert("Your aacount has been successfully created"))
            if(result.status === 200){
                signref.current&&signref.current.reset();
                setuser(user)
            }else{
            }
        })
      };

    return (
        <>
        {res}
            <section className={popup ? "wellcome open-popup" : "wellcome"}>
                <div className="wellcome-main-father-div">
                    <div className="wellcome-child-1"></div>
                    <div className="wellcome-child-2">
                        <div className="wellcome-main-contant">
                            <div className="wellcome-child-2-part-1">
                                <h1 className='common-h-50' >Greetings! Welcome to luxury gift shop.</h1>
                            </div>
                            <div className="wellcome-child-2-part-2">
                                <div>
                                    <p className='wellcome-child-2-part-2-text-p' >Use your mobile number to sign up or log in</p>
                                    <input ref={signref} className='wellcome-child-2-part-2-input'  onChange={(e)=>inputdata(e)} name='phonenumber'     type="text" placeholder='+380 XX XXX XX XX' />
                                </div>
                                <button  onClick={(e)=>submitdata(e)} className='btn-black' >CONTINUE</button>
                            </div>
                            <div className="wellcome-child-2-part-3">
                                <span className='span1' ></span>
                                <span className='span2' >or</span>
                                <span className='span3'  ></span>
                            </div>
                            <div className="wellcome-child-2-part-4">
                                <p>Instantly login or sign up via Google</p>
                                <div className='wellcome-btn-1-2' >
                                    <button className=' continue-google-btn btn-white' > <img src={google} /> CONTINUE WITH GOOGLE</button>
                                    <button className=' continue-google-btn btn-white' > <img src={apple} /> CONTINUE WITH APPLE</button>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-text-wellcome' >
                            <p>Privacy Policy</p>
                            <div className="row-line"></div>
                            <p>Terms and Conditions</p>
                        </div>
                    </div>
                    <div className="wellcome-child-1"></div>
                </div>
            </section>
        </>
    )
}

export default Wellcome;