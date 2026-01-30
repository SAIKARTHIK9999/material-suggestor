import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'

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
    <h1>On what basis do you want Thermal Star to suggest the perfect material?</h1>
    <br/>
    <br/>
    <br/>
    <br/>
    <Link to='/Searchmaterials'>
          <button type="submit" class="btn btn-primary">Properties</button>
    </Link>

    <br/>
    <br/>
    <br/>
    <br/>
    <Link to='/Application'>
    <button className='btn btn-warning'>Application</button>
    </Link>
    </motion.div>
    </center>
    </>
  )
}

export default Logout