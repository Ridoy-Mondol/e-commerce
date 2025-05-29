import React, { useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import img from "./Images/signin-image.jpg";

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [success, setSuccess] = useState (false);
    const [isChecked, setIsChecked] = useState(false);
    const [value, setValue] = useState(
        {
            email: "",
            password: "",
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
                const response = await fetch("http://localhost:8000/login", {
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
                    localStorage.setItem ("token", res_data.logintoken);
                    setValue({
                        email: "",
                        password: "",
                    });
                    setError({});
                    navigate('/e-commerce/');
                } else {
                    const responseData = await response.json();
                    setError ({invalid: responseData.message});
                //    if (response.status === 401) {
                //     setError({ invalid: responseData.message });
                // } else {
                //     throw new Error(responseData.message);
                // }

                }
            } catch (error) {
                console.error("Error submitting form:", error);
            }
}
    }
    const validate = () => {
        const error = {};
        if(!value.email) {
            error.email = "Please enter your email";
            setSuccess(false);
        }
        if(!value.password) {
            error.password = "Please enter your password";
            setSuccess(false);
        }
        return error;
    }
  return (
    <div className='register-div'>
        <div className='text-center form reg-form'>
        <div className='row'>
        <div className='col-md-6 d-flex align-items-center'>
               <img src={img} alt='' className='reg-img'/>
        </div>

        <div className='col-md-6'>
        <form  className='my-auto p-0 text-start'action="https://formspree.io/f/xkndrzjn" method = "POST" onSubmit={handleSubmit}>
            <h4 className='reg-head'>Log In</h4>

               <div className='position-relative'>
               <i className="fa-solid fa-envelope reg-icon"></i>
               <input 
               type="email" 
               placeholder="Your email" 
               className="input reg-input"
               name="email"
               value={value.email}
               onChange={InputValue}
               />
               </div>
               <div className = "error-msg reg-error-msg">{error.email}</div>
               {error.invalid && <div className="error-msg reg-error-msg">{error.invalid}</div>}

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
               {error.invalid && <div className="error-msg reg-error-msg">{error.invalid}</div>}


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
            
               <button type="submit" className="btn-1 reg-btn">Log in</button>

               <p className='mt-3'>
                <span className='reg-bold'>
                Don't have an account?
                </span> 
                <Link to="/e-commerce/registration" className='text-decoration-none redirect'> Register now</Link>
               </p>
            </form>
            </div>
            </div>
            </div>
            </div>
  )
}

export default Login
