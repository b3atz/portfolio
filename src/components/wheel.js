import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.css'

//As projects expand, this will be a wheel that can cycle though all of the cards
const Wheel = () => {
    return (
        <div class="cards-wrapper">
            <div class="card" style={{width: '18rem'}}>
                <img src={'IMG_1.png'} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Operating systems project</h5>
                    <p class="card-text">This project is an a collection of homework assignments completed during CS333. Based on the RISC-v OS, this project effectifly taught me how to work and maintain consitacy in a code base as long as work on lower level functions and programming</p>
                    <a href="#" class="btn btn-primary">Git Hub</a>
                </div>
            </div>
            <div class="card" style={{width: '18rem'}}>
                <img src={'IMG_2.png'} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

/**
 This a card
 
 */
export default Wheel;
