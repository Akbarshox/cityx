import React from 'react';
import Particles from "react-particles-js";

export default function Contact() {
   return(
       <div className="container">
          <Particles
              params={{
                 "particles": {
                    "number": {
                       "value": 8,
                       "density": {
                          "enable": true,
                          "value_area": 800
                       }
                    },
                    "line_linked": {
                       "enable": false
                    },
                    "move": {
                       "speed": 1,
                       "out_mode": "out"
                    },
                    "shape": {
                       "type": [
                          "images",
                          "circle"
                       ],
                       "images": [
                          {
                             "src": "../assets/Instagram.svg",
                             "height": 20,
                             "width": 23
                          },
                          {
                             "src": "../assets/Mail.svg",
                             "height": 20,
                             "width": 20
                          },
                          {
                             "src": "../assets/Github.svg",
                             "height": 20,
                             "width": 20
                          }
                       ]
                    },
                    "color": {
                       "value": "#CCC"
                    },
                    "size": {
                       "value": 30,
                       "random": false,
                       "anim": {
                          "enable": true,
                          "speed": 4,
                          "size_min": 10,
                          "sync": false
                       }
                    }
                 },
                 "retina_detect": false
              }} />
       </div>
   )
}