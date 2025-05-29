import { useState } from "react";

const Contact = () => {
    const [error, setError] = useState({});
    const [success, setSuccess] = useState (false);

    const [value, setValue] = useState(
        {
            name: "",
            subject: "",
            email: "",
            message: "",
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formError = validate(value);
        setError(formError);
        if (Object.keys(formError).length === 0) {
            try {
                const response = await fetch("http://localhost:8000/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(value),
                });
    
                if (response.ok) {
                    setSuccess(true);
                    setValue({
                        name: "",
                        subject: "",
                        email: "",
                        message: "",
                        });
                } else {
                    throw new Error("Failed to submit the form");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
            }
  
    // const response = await fetch(`http://localhost:8000/contact`,{
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(value),
    // })
}
    }
    const validate = () => {
        const error = {};
        if(!value.name) {
            error.name = "Please enter your name";
            setSuccess(false);
        }
        if(!value.subject) {
            error.subject = "Please enter your subject";
            setSuccess(false);
        }
        if(!value.email) {
            error.email = "Please enter your email";
            setSuccess(false);
        }
        if(!value.message) {
            error.message = "Please enter your message";
            setSuccess(false);
        }
        return error;
    }

    return (
        <div className="contact-div">
            <h1 className="wlc text-black about-heading mt-4 mx-auto text-center">
             Contact Us
            </h1>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8936553192584!2d90.38806817507252!3d23.751171388747228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1697781878722!5m2!1sen!2sbd" title="map" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {success && <div className="success-msg">
              Thank you for your message
            </div>
            }
            <form action="https://formspree.io/f/xkndrzjn" method = "POST"className="text-center form" onSubmit={handleSubmit}>
              <div>
               <input type="text"
               placeholder="NAME" 
               className="input"
               name="name"
               value={value.name}
               onChange={InputValue}
               />
               </div>
               <div className = "error-msg">{error.name}</div>
               <div>
               <input 
               type="text" 
               placeholder="SUBJECT" 
               className="input"
               name="subject"
               value={value.subject}
               onChange={InputValue}
               />
               </div>
               <div className = "error-msg">{error.subject}</div>
               <div>
               <input 
               type="email" 
               placeholder="EMAIL" 
               className="input"
               name="email"
               value={value.email}
               onChange={InputValue}
               />
               </div>
               <div className = "error-msg">{error.email}</div>
               <div>
               <input 
               type="text" 
               className="input input-3" placeholder="MESSAGE"
               name="message"
               value={value.message}
               onChange={InputValue}
               />
               </div>
               <div className = "error-msg">{error.message}</div>
               <button type="submit" className="btn-1">SEND MESSAGE</button>
            </form>
        </div>
    )
}
export default Contact;
