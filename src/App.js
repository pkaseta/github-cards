import React, { useState } from 'react'
import './App.css';
import { Button, Card, Col, InputGroup, FormControl } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

function App() {
  const [user, setUser] = useState({})
  const [active, setActive] = useState(false)

  const handleToggle = () => {

    console.log('Button is working')
    fetch('https://api.github.com/users/pkaseta ')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .then(setActive(!active))
  }
  return (
    <div className='mainPage'>

      <h1>Paul K's Github Card</h1>
      <br />

      <Button style={{ marginBottom: '20px' }} variant="outline-dark" onClick={handleToggle}>
        {active === false ? 'View Pauls Github' : 'cancel view'}</Button>

      {active === true ? <Card style={{ width: '18rem', margin: 'auto' }}>
        {active === true ? <Card.Img variant="top" src={user.avatar_url} /> : ''}
        <Card.Body>
          <Card.Title><h2>{user.name}</h2></Card.Title>
          <hr />
          <Card.Text>
            <h4>Type</h4>
            {user.type}
          </Card.Text>
          <Card.Text>
            <h4>Username</h4>
            {user.login}
          </Card.Text>
          <Card.Text>
            <h4>Repos</h4>
            {user.public_repos}
          </Card.Text>
          <Card.Text>
            <h4>Biography</h4>
            {user.bio}
          </Card.Text>
        </Card.Body>
      </Card> : <div></div>
      }
    </div>
  );
}

export default App;
