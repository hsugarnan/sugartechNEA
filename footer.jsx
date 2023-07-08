import React from 'react';
import Logo from './sugartech.jpeg'
const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row row_column">
{/* 
                    <a href="/">
                        <figure className="footer__logo">
                            <img src={Logo} alt=""  className='footer__logo--img'/>
                        </figure>
                    </a> * */}
                 <div className = "footer_Wrapper">
                    <div className="footer__list">
                        <a href="/" className="footer__link">Home</a>
                        <a href="www.sugartech.page" className="footer__link">About HR Sugar</a>
                    </div>
                    <div className="footer__copyright">
                        Copyright SugarTech 2022 
                    </div>

                </div>
            </div>
         </div>
        </footer>
    )
}


export default Footer