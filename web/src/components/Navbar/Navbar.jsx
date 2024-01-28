import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to='/' className='site-tiltle'>
        <img src={images.logo} alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
      <li className="app__flex p-text">
        <Link id='a'to='/Login' >Login</Link>
        <Link id='a'to='/Contact' >&ensp;&ensp;&ensp;&ensp;Contact</Link>
        <Link id='a'to='/About_m' >&ensp;&ensp;&ensp;&ensp;About</Link>
        <Link id='a'to='/Logout' >&ensp;&ensp;&ensp;&ensp;Logout</Link>
        </li>
      </ul>
      

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
                <li>
                  <Link to='/Login' >Login</Link><br/><br/>
                  <Link to='/Contact' >Contact</Link>
                </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;