import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'

//As projects expand, this will be a wheel that can cycle though all of the cards
const Wheel = () => {
    return (
        <div className="cards-wrapper">
            <div className="card" style={{width: '18rem'}}>
                <img src={'IMG_1.png'} className="card-img-top" alt="OS project" />
                <div className="card-body">
                    <h5 className="card-title">Operating systems project</h5>
                    <p className="card-text">This project is an a collection of homework assignments completed during CS333. Based on the RISC-v OS, this project effectifly taught me how to work and maintain consitacy in a code base as long as work on lower level functions and programming</p>
                    <a href="https://github.com/b3atz/xv6-risk5" className="btn btn-primary">GitHub</a>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img src={'IMG_2.png'} className="card-img-top" alt="IRC code" />
                <div className="card-body">
                    <h5 className="card-title">IRC Client</h5>
                    <p className="card-text">This was a school project was an IRC client and server bulit in java.</p>
                    <a href="https://github.com/b3atz/cs494-final-project" className="btn btn-primary">GitHub</a>
                </div>
            </div>
        </div>
    );
}

/**
 This a card
 
 */
export default Wheel;
