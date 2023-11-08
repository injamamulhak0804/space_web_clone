import React from 'react'

const Destination = () => {
  return (
    <>
      <div className="img-wrapper">
        <main className='destination-main'>
          <div className="destination-header">
            <h2>01 PICK YOUR DESTINATION</h2>
          </div>
          <div className="img-content">
            <div className="img-destination">
              <img src="img/image-moon.webp" className='img-diff-destination' alt="image is here" />
            </div>
            <div className="destination-list">
              <ul>
                <li>MOON</li>
                <li>MARS</li>
                <li>EUROPA</li>
                <li>TITAN</li>
              </ul>
              <div className="destination-content">
                <h2>MOON</h2>
                <p>
                  See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <hr />
                <div className="distance">
                  <div className="avg-distance">
                    <span>
                      AVG. DISTANCE
                    </span>  <br />
                    <span className="km">
                      384,400 KM
                    </span>
                  </div>

                  <div className="time-travel">
                    <span>
                      AVG. DISTANCE
                    </span> <br />
                    <span className="km">
                      384,400 KM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Destination