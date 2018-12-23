import React, { Component } from 'react';
import styles from './App.module.scss';

import Form from './components/Form'
import Choice from './components/Choice'
import Valid from './components/Valid'
import logo from './assets/logo.png'

class App extends Component {
  state = {
    email: localStorage.getItem('email') || null,
    choice: localStorage.getItem('choice') || null,
  }

  handleLogin = email => {
    this.setState({ email })
  }

  handleChoice = choice => {
    this.setState({ choice })
  }

  render() {
    const { email, choice } = this.state

    return (
      <div className={styles.App}>
        <header>
          <img src={logo} alt="CLPN - Logo" className={styles.logo}/>
          <p className={styles.title}>Service client</p>
        </header>
        {!email && <Form onSubmit={this.handleLogin} />}
        {email && !choice && <Choice onSubmit={this.handleChoice} />}
        {email && choice && <Valid email={email} choice={choice} />}
      </div>
    );
  }
}

export default App;
