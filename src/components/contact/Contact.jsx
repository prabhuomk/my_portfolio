
import "./contact.scss";
import emailjs from 'emailjs-com';


export default function Contact() {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_zgvu1ag', 'template_3r5u6l7', e.target, 'user_ExJNhvP9CO34tX1L02rj4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert("Thanks for your Response , I will Contact You as soon as possible")

      
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email Address" name="email" />
          <input type="text" placeholder="Subject" name="subject" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
         
        </form>
      </div>
    </div>
  );
  }