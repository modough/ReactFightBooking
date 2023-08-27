import './info.css';
import { RxCalendar } from 'react-icons/rx';
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs';


const Info = () => {
    return (
        <div className="info section">
            <div className='infoContainer container'>
                <div className='titleDiv flex'>
                    <h2>Travel to make memories all around the world</h2>
                    <button className='btn' type="">View all</button>
                </div>

                <div className='cardsDiv grid'>
                    <div className='singleCard grid'>
                        <div className="iconDiv flex">
                            <RxCalendar className='icon' />
                        </div>
                        <span className='cardTitle'>Book & Relax</span>
                        <p>You can also call airlines from your phone and book a flight ticket!</p>
                    </div>
                    <div className='singleCard grid'>
                        <div className="iconDiv flex">
                            <BsShieldCheck className='icon' />
                        </div>
                        <span className='cardTitle'>Smart Checklist</span>
                        <p>You can also call airlines from your phone and book a flight ticket!</p>
                    </div>
                    <div className='singleCard grid'>
                        <div className="iconDiv flex">
                            <BsBookmarkCheck className='icon' />
                        </div>
                        <span className='cardTitle'>Save more</span>
                        <p>You can also call airlines from your phone and book a flight ticket!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info