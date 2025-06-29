import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react';
//import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
const Contact =()=>{
      const [letterClass, setLetterClass] = useState('text-animate')
      const form=useRef()
     useEffect(() => {
       const timeoutId = setTimeout(() => {
         setLetterClass('text-animate-hover');
       }, 3000);
     
       return () => clearTimeout(timeoutId); 
     }, []);
     
const sendEmail=(e)=>{
    e.preventDefault()


    emailjs
    
      .sendForm('service_d1nwbjl', 'template_mt1cw7q', form.current, 'vBK0XSMcUxr_mB4XX')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }


    return (
        <>
        <div className="container contact-page">
            <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t',' ','m','e' ] }  
                idx ={15}       />
            </h1>
            <p>
                I have built a strong foundation in Data Structures and Algorithms (DSA), 
                which has sharpened my problem-solving skills and helped me write efficient, 
                optimized code. Alongside this, I’ve developed hands-on experience in web development, 
                with a particular focus on frontend technologies such as HTML, CSS, JavaScript, and React.js.
                However, if you have any other requests or questions, don't hesitate to contact me using 
                below form either.
                </p>

                <div className='contact-form'>

                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                      <input placeholder="Name" type="text" name="name" required />
                            </li>

                            <li className="half">
                                      <input placeholder="Email" type="email" name="email" required />
                            </li>
                            <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
                            
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Swati Gupta,
                <br/>
                India,
                <br/>
                Jamshedpur,jharkhand,831014 <br/>
                NIT Jamshedpur
                <br/>
                <span>swatigupta060605@gmail.com</span>
            </div>
            
            </div>
            <Loader type="pacman"/>
            </>
    )
}
export default Contact