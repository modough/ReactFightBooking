import './lounge.css';
import cabin from '../../assets/cabin.jpeg';
import cabinStaff from '../../assets/cabin staff.jpg';

const Lounge = () => {
    return (
        <div className='lounge container section'>
            <div className='sectionContainer grid'>
                <div className='imgDiv'>
                    <img className='cabin' src={cabin} alt="" />
                    <img className='cabinStaff' src={cabinStaff} alt="" />
                </div>
                <div className='textDiv'>
                    <h2>Unaccompanied Minor Lounge</h2>

                    <div className='grids grid'>
                        <div className='singleGrid'>
                            <span className='gridTitle'>Help through the airport</span>
                            <p>You can also call airlines from yor phone an dbook a flight ticket to one of your favorite destinations .</p>
                        </div>
                        <div className='singleGrid'>
                            <span className='gridTitle'>Priority boarding</span>
                            <p>You can also call airlines from yor phone an dbook a flight ticket to one of your favorite destinations .</p>
                        </div>
                        <div className='singleGrid'>
                            <span className='gridTitle'>Care on the flight</span>
                            <p>You can also call airlines from yor phone an dbook a flight ticket to one of your favorite destinations .</p>
                        </div>
                        <div className='singleGrid'>
                            <span className='gridTitle'>Chauffeur-drive service</span>
                            <p>You can also call airlines from yor phone an dbook a flight ticket to one of your favorite destinations .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lounge