import React from 'react';
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "./Footer.css";

{/* footer function */}
const Footer = () => {
    {/* to handle the scroll */}
    const HandleClick = () => {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className="Footer">
                <a  onClick={HandleClick}>
                    <div className="Footer_BackToTop">
                        {/* when click on the expandlesson icon it's back to the to  */}
                        <ExpandLessIcon className="footer_BackToTopText" />
                    </div>
                </a>
                <div className="FooterVerticalRow">
                    {/* the vertical col */}
                    <div className="FooterVerticalCol">
                        <div className="FooterVerticalColHead">Get To Know Us</div>
                        <ul>
                            <li>About</li>
                            <li>Carrer</li>
                            <li>Services</li>
                            <li>Amazon Cares</li>
                            <li>Gift Products</li>
                        </ul>
                    </div>
                    <div className="FooterVerticalCol">
                        <div className="FooterVerticalColHead">Contact With Us</div>
                        <ul>
                            <li>FaceBook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                    <div className="FooterVerticalCol">
                        <div className="FooterVerticalColHead">Make Money</div>
                        <ul>
                            <li>Amazon PropTypes.pay</li>
                            <li>BecomeAn Affiliate</li>
                            <li>Sell On Amazon</li>
                            <li>Fulfilment By Amazon</li>
                            <li>Buy On Amazon</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
