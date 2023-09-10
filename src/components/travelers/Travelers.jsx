import './travelers.css';
import { travelers } from '../../data/tarvelers';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Travelers = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='travelers container section'>
            <div className='sectionContainer'>
                <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month !</h2>
                <div className='travelersContainer grid'>
                    {travelers.map(({ id, destinationImg, travelerImg, travelerName, socialLink }) => {
                        return (<div data-aos='fade-up' data-aos-duration='2500' key={id} className='singleTraveler'>
                            <img className='destinationImg' src={destinationImg} alt="" />
                            <div className='travelerDetails'>
                                <div className='travelerPic'>
                                    <img className='travelerImg' src={travelerImg} alt="" />
                                </div>
                                <div className='travelerName'>
                                    <span>{travelerName}</span>
                                    <p>{socialLink}</p>
                                </div>
                            </div>
                        </div>)
                    })
                    }
                </div>
            </div>
        </div>
    )
}
export default Travelers