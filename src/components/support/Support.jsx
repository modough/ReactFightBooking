import './support.css'
import lady from '../../assets/lady.jpg';
import wing from '../../assets/wing.jpg';
import sunset from '../../assets/hublot sunset.jpg';

const Support = () => {
    return (
        <div className="support container section">
            <div className="sectionContainer ">
                <div className="titleDiv">
                    <small>Travel support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Find help with booking and travel plans, see what to expect along the journey !</p>
                </div>
                <div className="infoDiv grid">
                    <div className='textDiv grid'>
                        <div className='singleInfo'>
                            <span className='number'>01</span>
                            <h4>Travel requirement for Dubai</h4>
                            <p>Find help with booking and travel plans, see what to expect along the journey to your favorites destinations !</p>
                        </div>
                    </div>
                    <div className='textDiv grid'>
                        <div className='singleInfo'>
                            <span className='number colorOne'>02</span>
                            <h4>Chauffeur services at your arrival</h4>
                            <p>Find help with booking and travel plans, see what to expect along the journey to your favorites destinations !</p>
                        </div>
                    </div>
                    <div className='textDiv grid'>
                        <div className='singleInfo'>
                            <span className='number colorTwo'>03</span>
                            <h4>Multi-risk travel insurance</h4>
                            <p>Find help with booking and travel plans, see what to expect along the journey to your favorites destinations !</p>
                        </div>
                    </div>
                    <div className='imgDiv'>
                        <img className='ladyPic' src={lady} alt="" />
                        <img className='wingPic' src={wing} alt="" />
                        <img className='sunsetPic' src={sunset} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support