import React from 'react';
import {motion} from'framer-motion';

import './Footer.scss';

const Footer = () => {
  return (
    <div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{duration: 0.5}}
        className='app__footer-info'
        >
          <p className='p-text'>©2022 Material Suggestor team</p>
      </motion.div>
    </div>
  )
}

export default Footer