import './subscribers.css';
const Subscribers = () => {
    return (
        <div className='subscribe section'>
            <div className='sectionContainer container'>
                <h2>Subscribe Newletters & get Latest News</h2>
                <div className='inputDiv flex'>
                    <input type='text' placeholder='Enter your email' />
                    <button className='btn'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribers