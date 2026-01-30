import React from 'react'
import {motion} from 'framer-motion'

const About_m = () => {
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
    <h2>Dr. Kode Jaya Prakash ( Mentor ) </h2>
    <h2>M Sai Karthik: 22075A1206 ( GUI Developer ) </h2>
    <h2>Sriram Prayaga: 19071A03B3 ( Idea & Leadership ) </h2>
    <h2>Madhusudhan Andukuri:  (Java Developer ) </h2>
    <h2>Thanikella Nikhil: 19071A05H5 ( CUI Developer) </h2>
    <h1>( Material Engineers )</h1>
    <h2>M. Shreya: 19071A03B0 </h2>
    <h2>N Harish: 19071A0399</h2>
    <h2>M. Ganesh Vaibhav: 19071A0396</h2>
    <h2>B. Naveen Kumar: 19071A0371</h2>
    <h2>R. L Akanksha: 19071A03A7</h2>
    <h2>M. Sathvika: 19071A03A9</h2>
    <h2>A. Sandeep: 19071A0366</h2>
    <h2>R.Ramprasad: 19071A03A5</h2>
    <h2>S.V. Pavan Kalyan: 19071A03B1</h2>
    <label>Thermal Star is a high class material suggestor which helps you to find the right material for the right set of properties or applications. Login to experience the magic of Thermal Star!</label>
    <label>Dedicated to my best friend Dhanuja....</label></motion.div>
    </center>
    </>
  )
}

export default About_m