import React, { useState } from "react";
import {Link} from 'react-router-dom'

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import {motion} from 'framer-motion'

export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length === "thermalstar@vnrvjiet.in" && password === "sriramprayaga02"
//thermalstar@vnrvjiet.in
//sriramprayaga02
  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (<>
  <center>
    <h2>  
    <br/>
    <br/>
    <br/>
    </h2>
    <div className="Login">
      
    <motion.div
        whileInView={{ x: [-500, 0], opacity: [0, 1] }}
        transition={{duration: 1}}
        className='app__header-info'
        >
      <Form onSubmit={handleSubmit} className="max-w-xs">
        <Form.Group size="lg" controlId="email">
          <Form.Label className="text-xl font-bold">Email</Form.Label>
          <Form.Control className=""
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="required"
          />

        </Form.Group>

        <Form.Group size="lg" controlId="password">

          <Form.Label className="text-xl font-bold"
          >Password</Form.Label>

          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="required"
          />
        <br/>
        <br/>
        </Form.Group>

        <Link to='/Choose'>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
        
          Login
          
        </Button>
        </Link>

      </Form>
    </motion.div>
    </div>
    </center>
    </>);

}