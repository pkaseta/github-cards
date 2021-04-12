import React, { useState } from 'react'
import './App.css';
import { Button, Card, Form, InputGroup, FormControl } from 'react-bootstrap'


function App() {
  const [user, setUser] = useState({})
  const [active, setActive] = useState(false)
  const [userInput, setUserInput] = useState('')

  const handleToggle = () => {
    fetch(`https://api.github.com/users/${userInput} `)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .then(setActive(!active))
  }

  return (
    <div className='mainPage'>

      <h1>Github Cards</h1>
      <br />

      <Form inline
        style={{ display: 'flex', justifyContent: 'center' }}>
        <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
          Username
        </Form.Label>

        <InputGroup className="mb-2 mr-sm-2">
          <FormControl id="inlineFormInputGroupUsername2" placeholder="Username" onChange={(e) => setUserInput(e.target.value)} />
        </InputGroup>

        <Button style={{ marginBottom: '20px' }} variant="outline-dark" onClick={handleToggle}>
          {active === false ? `View ${userInput}'s Github` : 'cancel view'}</Button>
      </Form>

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
