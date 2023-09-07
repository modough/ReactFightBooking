import './footer.css';
import logo from '../../assets/flight resa logo.jpg';
import { TiSocialFacebook } from 'react-icons/ti'
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import {
    guideLinks,
    firstInformationLinks,
    secondInformationLinks
} from '../../data/footerLinks';
const Footer = () => {
    return (
        <div className="footer">
            <div className='sectionContainer container grid'>
                <div className='gridOne'>
                    <div className='logoDiv'>
                        <img className='logo' src={logo} alt="" />
                        <h2>Flight Resa</h2>
                    </div>
                    <p>Your mind should be stronger than your feelings, fly !</p>
                    <div className='socialIcon flex'>
                        <TiSocialFacebook className='icon' />
                        <AiOutlineTwitter className='icon' />
                        <AiFillYoutube className='icon' />
                        <FaPinterestP className='icon' />
                    </div>
                </div>

                <div className='footerLinks'>
                    <span className='linkTitle'>
                        Information
                    </span>
                    {firstInformationLinks.map((link, i) => {
                        return (
                            <li key={firstInformationLinks[i]}>
                                <a href='#'>{link}</a>
                            </li>
                        )
                    })}
                </div>
                <div className='footerLinks'>
                    <span className='linkTitle'>
                        Quick Guide
                    </span>
                    {guideLinks.map((link, i) => {
                        return (
                            <li key={guideLinks[i]}>
                                <a href='#'>{link}</a>
                            </li>
                        )
                    })}
                </div>
                <div className='footerLinks'>
                    <span className='linkTitle'>
                        Information
                    </span>
                    {secondInformationLinks.map((link, i) => {
                        return (
                            <li key={secondInformationLinks[i]}>
                                <a href='#'>{link}</a>
                            </li>
                        )
                    })}
                </div>
            </div>
            <div className='copyRightDiv flex'>
                <p>Modough Design | Developped by <a href="https://emailto-doumo1@hotmail.fr" target='_blank' rel='noreferrer'>Modough</a></p>

            </div>
        </div>
    )
}

export default Footer