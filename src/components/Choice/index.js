import React, { Component } from 'react';

import styles from './styles.module.scss';

class Choice extends Component {
  state = { error: false, choice: '' }

  handleSubmit = event => {
    event.preventDefault()
    const { options, options: { selectedIndex } } = document.getElementById('choice')
    const value = options[selectedIndex].value
    if(!value) this.setState({ error: true })
    else this.setState({ choice: value })
  }

  handleValidate = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.choice)
  }

  handleCancel = event => {
    event.preventDefault()
    this.setState({ choice: '' })
  }

  handleChange = event => {
    this.state.error && this.setState({ error: false })
  }

  render() {
    return (
      <div className={styles.Choice}>
        <p className={styles.file}>Numéro de dossier : <b>CZJ1305</b></p>
        {this.state.choice ?
          (
            <div className={styles.validate}>
              <p><b>Valider ce choix ?</b></p>
              <p className={styles.choice}><span>{this.state.choice}</span></p>
              <p className={styles.warning}>Ce choix est définitif et ne pourra plus être modifié.</p>
              <div>
                <button onClick={this.handleValidate}>Oui</button>
                <button onClick={this.handleCancel}>J'ai changé d'avis</button>
              </div>
            </div>
          )
        : (
            <div>
              <p className={styles.details}>
                Merci de sélectionner votre prochain voyage parmi les propositions suivantes :
              </p>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Votre choix :
                  <br/>
                  <select id="choice" onChange={this.handleChange}>
                    <option value="">« Sélectionner une destination »</option>
                    <option value="Copenhague">Proposition n°1 : Copenhague</option>
                    <option value="Cracovie">Proposition n°2 : Cracovie</option>
                  </select>
                  {this.state.error && (
                    <p className={styles.error}>Veuillez sélectionner une option</p>
                  )}
                </label>
                <br/>
                <button type="submit">CONFIRMER</button>
              </form>
            </div>
          )
        }
      </div>
    )
  }
}

export default Choice
