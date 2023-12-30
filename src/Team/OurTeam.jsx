import React from 'react'
import './OurTeam.css'
import naman from '../images/naman.jpeg'
import nancy from '../images/Nancy.jpeg'
import ronit from '../images/ronit.jpeg'
import aryan from '../images/Aryan_arora.jpeg'
import aryanGoyal from '../images/aryanGoyal.jpeg'
import deepti from '../images/deepti.jpeg'


const OurTeam = () => {
  return (

    <div className="main">
        <div className="ourTeam" data-aos="zoom-in">
            <h1>OUR TEAM</h1>
        </div>
       <div className="profileSection">
       <div className="profile-card">
                <div className="img" id="naman">
                    <img src={naman} />
                </div>
                <div className="caption">
                    <h3>NAMAN GUPTA</h3>
                    <p>TECHNICAL HEAD</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={ronit} />
                </div>
                <div className="caption">
                    <h3>RONIT KHATRI</h3>
                    <p>WEB MASTER</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div> 
            <div className="profile-card">
                <div className="img">
                    <img src={aryan} />
                </div>
                <div className="caption">
                    <h3>ARYAN ARORA</h3>
                    <p>TECH VOLUNTEER</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>

            <div className="profile-card">
                <div className="img">
                    <img src={deepti} />
                </div>
                <div className="caption">
                    <h3>DEEPTI JAIN</h3>
                    <p>TECH VOLUNTEER</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={nancy} />
                </div>
                <div className="caption">
                    <h3>NANCY SONI</h3>
                    <p>TECH VOLUTEER</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="profile-card">
                <div className="img">
                    <img src={aryanGoyal} />
                </div>
                <div className="caption">
                    <h3>ARYAN GOYAL</h3>
                    <p>TECH VOLUTEER</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
       </div>
        
    </div>

  )
}

export default OurTeam