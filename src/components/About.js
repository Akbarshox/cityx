import React from 'react';
import Particles from 'react-particles-js';
import tg from '../assets/tg.svg';
import js from '../assets/js.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import react from '../assets/react.png';
import material from '../assets/material.png';


export default function About() {
   return(
       <div className="container">
          <div className="about-me">
             <p className="about-p">About Me</p>
             <p className="about-title">Meticulous web developer with over a
                year of front end experience and passion
                for responsive website design and a firm believer in the mobile-first approach.
                Implemented new responsive website approach which increased mobile traffic by 20%.</p>
          </div>
          <div className="wrapper">
             <ul className="cube">
                <li className="side front"><img src={js} alt="req" /></li>
                <li className="side back"><img src={css} alt="req" /></li>
                <li className="side right"><img src={react} alt="req" /></li>
                <li className="side left"><img src={html} alt="req" /></li>
                <li className="side top"><img src={material} alt="req" /></li>
                <li className="side bottom"><img src={tg} alt="req" /></li>
             </ul>
          </div>
          <Particles
              params={{
                 "particles": {
                    "number": {
                       "value": 160,
                       "density": {
                          "enable": false
                       }
                    },
                    "size": {
                       "value": 3,
                       "random": true,
                       "anim": {
                          "speed": 4,
                          "size_min": 0.3
                       }
                    },
                    "line_linked": {
                       "enable": false
                    },
                    "move": {
                       "random": true,
                       "speed": 1,
                       "direction": "top",
                       "out_mode": "out"
                    }
                 },
                 "interactivity": {
                    "events": {
                       "onhover": {
                          "enable": true,
                          "mode": "bubble"
                       },
                       "onclick": {
                          "enable": true,
                          "mode": "repulse"
                       }
                    },
                    "modes": {
                       "bubble": {
                          "distance": 250,
                          "duration": 2,
                          "size": 0,
                          "opacity": 0
                       },
                       "repulse": {
                          "distance": 400,
                          "duration": 4
                       }
                    }
                 }
              }} />
       </div>
   )
}