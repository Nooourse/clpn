import React, { Component } from 'react';

import styles from './styles.module.scss';

class Form extends Component {
  state = { error: false }

  handleSubmit = event => {
    event.preventDefault()
    const fileNumber = document.getElementById('file').value.toUpperCase()
    const email = document.getElementById('email').value

    if (fileNumber !== 'CZJ1305') this.setState({ error: true })
    else this.props.onSubmit(email)
  }

  handleChange = event => {
    this.state.error && this.setState({ error: false })
  }

  render() {
    return (
      <div className={styles.Form}>
        <p className={styles.details}>
          Veuillez renseigner votre adresse email ainsi que le numéro de dossier associé à votre requête.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email :
            <br/>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@mail.fr"
            />
          </label>
          <br/>
          <label>
            Numéro de dossier :
            <br/>
            <input
              onChange={this.handleChange}
              id="file"
              maxLength="7"
              className={styles.file}
              placeholder="ABC1234"
            />
            {this.state.error && (
              <p className={styles.error}>Numéro de dossier invalide</p>
            )}
          </label>
          <br/>
          <button type="submit">VALIDER</button>
        </form>
      </div>
    )
  }
}

export default Form
