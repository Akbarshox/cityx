import React, { useState, useEffect } from 'react'
import { useTransition, a } from 'react-spring'
import Particles from "react-particles-js";
import shuffle from 'lodash/shuffle'
import useMeasure from './skillDirectory/useMeasure'
import useMedia from './skillDirectory/useMedia'
import data from './skillDirectory/data'

export default function Skills() {
   // Hook1: Tie media queries to the number of columns
   const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
   // Hook2: Measure the width of the container element
   const [bind, { width }] = useMeasure();
   // Hook3: Hold items
   const [items, set] = useState(data);
   // Hook4: shuffle data every 2 seconds
   useEffect(() => void setInterval(() => set(shuffle), 2000), [])
   // Form a grid of stacked items using width & columns we got from hooks 1 & 2
   let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
   let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2]; // X = container width / number of columns * column index, Y = it's just the height of the current column
      return { ...child, xy, width: width / columns, height: child.height / 2 }
   })
   // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
   const transitions = useTransition(gridItems, item => item.css, {
      from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
      enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
      update: ({ xy, width, height }) => ({ xy, width, height }),
      leave: { height: 0, opacity: 0 },
      config: { mass: 5, tension: 500, friction: 100 },
      trail: 25
   });
   // Render the grid
   return(
       <div className="container">
          <div className="skills-ex">
             <p className="skill-p">Skills & </p>
             <p className="skill-p">Experience</p>
             <p className="about-title">
                My main job in this sphere is doing the Front-End side of the web site (Client side of the web).
                HTML, CSS, JS, building small and medium web apps with React JS,
                custom plugins, features, animations, and coding interactive layouts.
                I do also have a small experience with React Native as well, currently I am working on this.
                I have interests in Machine Learning, Cyber Security and Blockchain. In the Future I really want to learn them as well.
             </p>
          </div>
          <div {...bind} className="list-skill" style={{height: Math.max(...heights)}}>
             {transitions.map(({item, props: {xy, ...rest}, key}) => (
                 <a.div key={key}
                        style={{transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest}}>
                    <div className="skill-text">{item.text}</div>
                 </a.div>
             ))}
          </div>
          <Particles
              className="particles"
              params={{
                 "particles": {
                    "number": {
                       "value": 160,
                       "density": {
                          "enable": false
                       }
                    },
                    "size": {
                       "value": 10,
                       "random": true
                    },
                    "move": {
                       "direction": "bottom",
                       "out_mode": "out"
                    },
                    "line_linked": {
                       "enable": false
                    }
                 },
                 "interactivity": {
                    "events": {
                       "onclick": {
                          "enable": true,
                          "mode": "remove"
                       }
                    },
                    "modes": {
                       "remove": {
                          "particles_nb": 10
                       }
                    }
                 }
              }} />
       </div>
   )
}