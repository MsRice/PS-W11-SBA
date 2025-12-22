import React from 'react';
import PMaxwell_Resume from '../assets/Patrice Maxwell.pdf'
import taskbyRice from '../assets/rice_codesLOGOS/RiceCodes.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer--wrapper'>

                <ul className="social__links">
                    <li className="footer__link"><a href="https://app.joinhandshake.com/profiles/gqqjmh" target="_blank">HandShake</a></li>
                    <li className="footer__link"><a href="https://https://github.com/MsRice" target="_blank">Github</a></li>
                    <li className="footer__link"><a href="https://www.linkedin.com/in/patrice-maxwell" target="_blank">LinkedIn</a></li>
                    <li className="footer__link"><a href="https://www.thegrainofrice.com/patricemaxwell" target="_blank">GrainofRice.com</a></li>
                    <li className="footer__link"><a href={PMaxwell_Resume} target="_blank">Download CV</a></li>
                </ul>

                <div className="footer-logo--wrapper">
                    <div className="footer__image--wrapper">
                        <img className="footer__image--img"src={taskbyRice} alt="" />
                    </div>
                    <p className="footer__link--copy">
                    Presented by Rice 🍚  &copy; &nbsp; 2025 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
