import React from 'react'
import { motion } from 'framer-motion'
import './Card1.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Card1({pic, text1, text2, text3, text4, text5}) {
  return (
    <div className='card1outer'>

    <div class="card-box">
        <div class="card">
            <div className="ccimf">
            <img class="card-img"
                src={pic}
                alt="" />
            <div class="card-body">
                <h3>{text1}</h3>
                <p>{text2}</p>
            </div>
            </div>
        </div>
        <div className="card-cont">
       {text3} <br /><br />
       <h4>Date: {text4}</h4>
       <h4>Time: {text5}</h4>
       <h4>Venue: LT-4</h4>


        </div>
      
    </div>
    </div>
  )
}

export default Card1