import './travelers.css';
import { travelers } from '../../data/tarvelers';

const Travelers = () => {
    return (
        <div className='travelers container section'>
            <div className='sectionContainer'>
                <h2>Top travelers of this month !</h2>
                <div className='travelersContainer grid'>
                    {travelers.map(({ id, destinationImg, travelerImg, travelerName, socialLink }) => {
                        return (<div key={id} className='singleTraveler'>
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