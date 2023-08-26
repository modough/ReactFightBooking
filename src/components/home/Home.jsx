import airplane from '../../assets/airplane.png'
import './home.css'
import sky from '../../assets/sky.mp4'
const Home = () => {
    return (
        <div className="home flex container">
            <div className="mainText">
                <h1>Create Ever-lasting Memories With Us</h1>
            </div>
            <div className="homeImages flex">
                <div className="videoDiv">
                    <video src={sky} autoPlay muted loop>

                    </video>
                </div>

                <img className="plane" src={airplane} alt="plane image" />
            </div>
        </div>
    )
}

export default Home