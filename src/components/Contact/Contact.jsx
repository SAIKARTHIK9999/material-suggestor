import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <>
    <h2>
      
      <br/>
      <br/>
      <br/>
      </h2>
      <center>
      <motion.div
        whileInView={{ x: [-500, 0], opacity: [0, 1] }}
        transition={{duration: 1}}
        className='app__header-info'
        >
    <div>Contact Number:<a href="tel:9704214914"> +91 9704214914</a></div>
    <div>E-mail:<a href="mailto:sriramprayaga02@gmail.com"> sriramprayaga02@gmail</a></div>
    </motion.div>
    </center>
    </>
  )
}

export default Contact