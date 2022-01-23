import { Link, Typography } from '@material-ui/core'
import React from 'react'
import './styles.scss'
import logo from './../../assets/logo.jpeg'
// import { Link } from 'react-router-dom'

const index = () => {
    return (
        <header className='header'>
         <div className='wrap'>
             <div className='logo'>
                <img src={logo} alt='Tech Mindset logo' />

            </div>
            <nav>
            <ul>
            <li>
              {/* <Link to="/"> */}
                Home
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to="/search"> */}
                Search
              {/* </Link> */}
            </li>
          </ul>
        </nav>

         </div>
        </header>          
     
        )
}

export default index
