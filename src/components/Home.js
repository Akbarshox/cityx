import React from 'react';
import Particles from 'react-particles-js';
import shokh from '../assets/shokh.svg';

export default function Home() {
   return(
       <div className="container">
          <img src={shokh} className="a" alt="req" />
          <Particles
              params={{
                 "particles": {
                    "number": {
                       "value": 60
                    },
                    "size": {
                       "value": 3
                    },
                    "color": {
                       "value": "#00f7ce"
                    }
                 },
                 "interactivity": {
                    "events": {
                       "onhover": {
                          "enable": true,
                          "mode": "repulse"
                       }
                    }
                 }
              }}
          />
       </div>
   )
}
