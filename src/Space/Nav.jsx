import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav>
                <div className="nav-logo">
                    <img src="https://space-tourism-website-murex.vercel.app/images/shared/logo.svg" alt="Logo" />
                </div>
                <div className="nav-group">
                    <ul>
                        <li>
                            <Link className='link' to='/' >00 HOME</Link>
                        </li>
                        <li>
                            <Link className='link' to='/destination' >01 DESTINATION</Link>
                        </li>
                        <li>
                            <Link className='link' to='/crew' >02 CREW</Link>
                        </li>
                        <li>
                            <Link className='link' to='/technology'>03 TECHNOLOGY</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav