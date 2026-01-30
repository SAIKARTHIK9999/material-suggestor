import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

import './Login.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {

  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()

  return (
    <>
    <h2>  
      <br/>
      <br/>
      <br/>
    </h2>

      <section>
      <motion.div
        whileInView={{ x: [-500, 0], opacity: [0, 1] }}
        transition={{duration: 1}}
        className='app__header-info'
        >
      <form>

          <input 
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          class="form-control mr-sm-2"
          placeholder='username'
          required 
          ></input>
          <br></br>

          <input 
            required
           value={password}
           onChange={(e) => setPassword(e.target.value)}
          type="password" 
          class="form-control mr-sm-2"
          placeholder='password'></input>
              <Link to='/Choose'>
              <button type="submit" class="btn btn-primary">Submit</button>
            </Link>
    </form>
    </motion.div>  
    </section>
    </>
  )
}

export default Login