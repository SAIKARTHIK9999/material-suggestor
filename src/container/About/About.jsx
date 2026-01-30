import React from 'react';
import {motion} from 'framer-motion';

import './About.scss';
import {images} from '../../constants';

const abouts = [
  { title: 'Construct efficiently', description:'save resources', imgUrl:images.about01},
  { title: 'Design', description:'attractive', imgUrl:images.about02},
  { title: 'Use Materials', description:'that last decades', imgUrl:images.about04},
  { title: 'Construct', description:'the best', imgUrl:images.about03},
];

const About = () => {
  return (
    <>
     <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{duration: 0.5}}
       
        >
      <h2 className="head-text">Know That <span>Good Materials</span><br/>means <span>Safer Infrastructures</span></h2>
      </motion.div>
      <div className="app__profiles">
        {abouts.map((about,index) => (
          <motion.div
          whileInView={{y: [100, 0],opacity:1}}
          whileHover={{scale: 1.5}}
          transition={{duration:0.5,type: 'tween'}}
          className='app__profile-item'
          key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About