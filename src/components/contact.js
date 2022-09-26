import React    from "react";
import './contact.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
    return (
        <div className="contact" id='contact'>
            <div className="contain">

                <div className="wrapper">

                    <div className="form">
                        <h4>GET IN TOUCH</h4>
                        <h2 className="form-headline">Send me a message</h2>
                        <form id="submit-form" action="https://formsubmit.co/youssef.kaffel99@gmail.com" method="POST" >
                            <input type="hidden" name="_subject" value="New message has been sent from your portfolio form!"/>
                            <p>
                                <input id="name" name='name' className="form-input" type="text" placeholder="Your Name*"/>
                                    <small className="name-error"></small>
                            </p>
                            <p>
                                <input id="email" name='email' className="form-input" type="email" placeholder="Your Email*"/>
                                    <small className="name-error"></small>
                            </p>

                            <p className="full-width">
                                <textarea name='message' minLength="20" id="message" cols="30" rows="7" placeholder="Your Message*"
                                          required></textarea>
                                <small></small>
                            </p>

                            <p className="full-width">
                                <input type="submit" className="submit-btn" value="Submit" />
                            </p>
                        </form>
                    </div>

                    <div className="contacts contact-wrapper">
                        <ul>
                                <li>
                                    <h4>CONTACT INFO</h4>
                                </li>
                                <span className="hightlight-contact-info">
                                   <a href='https://github.com/YoussefKaffel' style={{margin:'0px', color:'#212d31'}}><li className="email-info" >
                                      <GitHubIcon fontSize='large'/> <p> youssefKaffel</p>
                                    </li></a>
                                    <a href='https://www.linkedin.com/in/youssefkaffel/' style={{margin:'0px', color:'#212d31'}}><li className="email-info">
                                       <LinkedInIcon fontSize='large'/> <p>youssefkaffel</p>
                                    </li></a>
                                    <a style={{margin:'0px', color:'#212d31'}}><li className="email-info">
                                        youssef.kaffel99@gmail.com
                                    </li></a>
                                    <li>
                                        <span className="highlight-text">23 911 695</span>
                                    </li>
                                  </span>
                            </ul>;

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;