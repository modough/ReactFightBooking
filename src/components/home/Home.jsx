import airplane from '../../assets/airplane.png'
import './home.css'
import sky from '../../assets/sky.mp4'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="home flex container">
            <div className="mainText">
                <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>
            </div>
            <div className="homeImages flex">
                <div className="videoDiv">
                    <video className='video' src={sky} autoPlay muted loop>
                    </video>
                </div>

                <img className="plane" src={airplane} alt="plane image" />
            </div>
        </div>
    )
}

export default Home