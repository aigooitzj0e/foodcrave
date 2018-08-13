import React, { Component } from 'react';
import hero from './assets/foodcrave-hero.png';
import '../css/landing.css';

class Landing extends Component {
    render() {
        return (
            <div>
                <img src={hero} className="hero" />
            </div>
        );
    }
}

export default Landing;
