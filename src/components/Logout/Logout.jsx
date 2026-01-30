import React from 'react'
import {motion} from 'framer-motion'

const Logout = () => {
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
    <div>User Sucessfully Logged out</div>
    </motion.div>
    </center>
    </>
  )
}

export default Logout