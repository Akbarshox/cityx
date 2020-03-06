import React from 'react';
import Particles from 'react-particles-js';
import Typist from 'react-typist';
import { motion } from "framer-motion"
import shokh from '../assets/shokh.svg';

export default function Home() {
   return(
       <div className="container">
          <div className="typewriter">
             <Typist speed={10} >
                Hi,
                <br />
                <Typist.Delay count={8} ms={500} />
                I'm Akbarshox
                <br />
                <Typist.Delay ms={500} />
                web developer.
             </Typist>
          </div>
          <motion.div
              animate={{ scale: 1, rotate: 5, opacity: 0.8 }}
              transition={{
                 yoyo: Infinity,
                 duration: 2,
                 ease: "easeInOut"
              }}
          >
          <img src={shokh} className="a" alt="req" />
          </motion.div>
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
