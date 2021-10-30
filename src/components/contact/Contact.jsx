import {useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';


export default function Contact() {
   const[disable,setDisable]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('service_zgvu1ag', 'template_3r5u6l7', e.target, 'user_ExJNhvP9CO34tX1L02rj4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert("Thanks for your Response , I will Contact You as soon as possible And an auto reply mail will be sent to you to give confirmation that i received your mail ")
      setDisable(!disable)
        
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <div>
      <div><h3>You Can Contact Me...</h3></div>
      <div><img  className="img1"src="assets/linkedin.png" alt="" onClick={()=>window.open("https://www.linkedin.com/in/prabhakaran-v-810607144/", "_blank")}/>
        <img  className="img2"src="assets/GitHub-logo.png" alt="" onClick={()=>window.open("https://github.com/prabhuomk/", "_blank")}/>
        <img  className="img3"src="assets/email.png" alt=""onClick={()=>setDisable(!disable)} /></div> 
      </div>
      </div>
     
      <div className="right">
          {disable===false?"":
         
       
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email Address" name="email"  required/>
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send <img  className="img2"src="assets/email.png" alt="" /></button>
         
        </form>
       }
      </div>
    </div>
  );
  }