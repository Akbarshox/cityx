import React from 'react';
import ParticlesBg from 'particles-bg'

export default function Contact() {
   let arr = ["color", "cobweb", "polygon"];
   return(
       <div className="container">
          <ParticlesBg type={arr[Math.floor(Math.random()*arr.length)]} bg={true} color="#00f7ce" />
       </div>
   )
}