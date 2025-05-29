import React, { useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import img from "./Images/signup-image.jpg";
import { useSelector, useDispatch } from 'react-redux';
import { storeInLocalStorage } from "./Slice/LocalStorage";

const Registration = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [success, setSuccess] = useState (false);
    const [isChecked, setIsChecked] = useState(false);
    const [regMsg, setRegMsg] = useState ("");

    const [value, setValue] = useState(
        {
            name: "",
            email: "",
            password: "",
            cpassword: "",
        }
    )

    const InputValue = (event) => {
       const { name, value } = event.target;
       setValue ((prevValue) => {
           return {
               ...prevValue,
               [name]: value,
           }
       })
    }
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formError = validate(value);
        setError(formError);
        if (Object.keys(formError).length === 0 && isChecked) {
            try {
                const response = await fetch("http://localhost:8000/registration", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(value),
                });
    
                if (response.ok) {
                    setSuccess(true);
                    const res_data = await response.json();
                    console.log("response from server", res_data);
                    
                    localStorage.setItem ("token", res_data.token);
                    setValue({
                        name: "",
                        email: "",
                        password: "",
                        cpassword: "",
                    });
                    navigate('/e-commerce/');
                } else {
                    const errorResponseData = await response.json();
                    setRegMsg(errorResponseData.message);
                    alert (regMsg);
                    throw new Error("Failed to submit the form");
                }
                
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        }
    }
    const validate = () => {
        const error = {};
        if(!value.name) {
            error.name = "Please enter your name";
            setSuccess(false);
        }
        if(!value.email) {
            error.email = "Please enter your email";
            setSuccess(false);
        }
        if(!value.password) {
            error.password = "Please enter your password";
            setSuccess(false);
        }
        if(value.password.length > 0 && value.password.length < 6) {
            error.password = "Password must be atleast 6 characters";
            setSuccess(false);
        }
        if(!value.cpassword) {
            error.cpassword = "Please confirm your password";
            setSuccess(false);
        }
        if(value.cpassword.length > 0 && value.password !== value.cpassword) {
            error.cpassword = "Confirm password does not match";
            setSuccess(false);
        }
        return error;
    }
  return (
    <div className='register-div'>
        <div className="text-center form reg-form">
        <div className='row'>
        <div className='col-md-6'>
        <form className='my-auto p-0 text-start' action="https://formspree.io/f/xkndrzjn" method = "POST" onSubmit={handleSubmit}>
            <h4 className='reg-head'>Registration</h4>
              <div className='position-relative'>
              <i className="fa-solid fa-user reg-icon"></i>
               <input type="text"
               placeholder="Your Name"
               className="input reg-input"
               name="name"
               value={value.name}
               onChange={InputValue}
               />
               </div>
               <div className = "error-msg reg-error-msg">{error.name}</div>
               
               <div className='position-relative'>
               <i className="fa-solid fa-envelope reg-icon"></i>
               <input 
               type="email" 
               placeholder="Your Email" 
               className="input reg-input"
               name="email"
               value={value.email}
               onChange={InputValue}
               />
               </div>
               <div className = "error-msg reg-error-msg">{error.email}
               {/* {regMsg} */}
               </div>

               <div className='position-relative'>
               <i className="fa-solid fa-lock reg-icon"></i>
               <input 
               type="password" 
               placeholder="Password" 
               className="input reg-input"
               name="password"
               value={value.password}
               onChange={InputValue}
               />
               </div>
               <div className = "error-msg reg-error-msg">{error.password}</div>

               <div className='position-relative'>
               <i className="fa-solid fa-unlock-keyhole reg-icon"></i>
               <input 
               type="password" 
               placeholder="Confirm Password" 
               className="input reg-input"
               name="cpassword"
               value={value.cpassword}
               onChange={InputValue}
               />
               </div>
               <div className = "error-msg reg-error-msg">{error.cpassword}</div>

               <label className="reg-checkbox">
               <input 
               type="checkbox"
               checked={isChecked}
               onChange={handleCheckboxChange}
               />
                <span className='ms-2'>
                   I accept all terms & conditions
                </span>
               <span className="checkmark"></span>
                </label>
            
               <button type="submit" className="btn-1 reg-btn">REGISTER NOW</button>

               <p className='mt-3'>
                <span className='reg-bold'>
                Already have an account?
                </span> 
                <Link to="/e-commerce/login" className='text-decoration-none redirect'> Login now</Link>
               </p>
            </form>
            </div>

            <div className='col-md-6 d-flex align-items-center'>
               <img src={img} alt='' className='reg-img'/>
            </div>
             
            </div>
            </div>
    </div>
  )
}

export default Registration
