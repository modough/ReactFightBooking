import './info.css';
import { RxCalendar } from 'react-icons/rx';

const Info = () => {
    return (
        <div className="info section">
            <div className='infocontainer container'>
                <div className='titleDiv flex'>
                    <h2>Travel to make memories all around the world</h2>
                    <button className='btn' type="">View all</button>
                </div>
            </div>
            <div className='cardsDiv'>
                <div className='singleCard grid'>
                    <div className="iconDiv flex">
                        <RxCalendar className='icon' />
                    </div>
                    <span className='cardTitle'>Book & Relax</span>
                    <p>You can also call airlines from your phone and book a flight ticket!</p>
                </div>
            </div>
        </div>
    )
}

export default Info