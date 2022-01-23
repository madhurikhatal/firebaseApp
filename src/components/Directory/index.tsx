import React from 'react'
import Mens from './../../assets/Mens.jpeg'
import Womens from './../../assets/Womens.jpeg'
import './styles.scss';

const index = () => {
    return (
        <div className='directory'>
            <div className='wrap'>
            <div 
                className='item'
                style={{
                    backgroundImage: `url(${Womens})`
                  }}
            >
                 <a>
                Womens Shop
            </a>
            </div>
            
           
               <div 
               className='item'
                style={{
                    backgroundImage: `url(${Mens})`
                  }}
            >
                 <a>
                Mens Shop
            </a>
            </div>
            </div>
        </div>
    )
}

export default index









