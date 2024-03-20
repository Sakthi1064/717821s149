import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
function Login() {
  return (
    <div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header background-color='black' textAlign='center'>
        <h1>GO-MART</h1> 
        <span style={{color:'white'}}>Log-in to your account</span>
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='purple' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        <p>New to us? <a href='#'>Sign Up</a></p>
      </Message>
    </Grid.Column>
  </Grid>
    </div>
  )
} 

export default Login
