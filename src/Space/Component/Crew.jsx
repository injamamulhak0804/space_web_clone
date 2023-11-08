import React from 'react'

const Crew = () => {
  return (
    <>
      <div className="destination-img">
        <div className="crew-wrapper">
          <h1>02 MEET YOUR CREW</h1>
          <div className="crew-content">
            <div className="content-crew">
              <div className="role">
                <h4>COMMANDER</h4>
                <h3 className="name">DOUGLAS HURLEY</h3>
                <p>
                  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2
                </p>
              </div>
            </div>
            <div className="img-crew">
              <img src="img/crew-name.jpg" className='img-diff-crew' alt="crew.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Crew