import React, { Component } from 'react';

import styles from './styles.module.scss';

class Valid extends Component {
  componentDidMount () {
    if(!localStorage.getItem('email')) {
      localStorage.setItem('email', this.props.email)
      localStorage.setItem('choice', this.props.choice)

      var service_id = "default_service"
      var template_id = this.props.choice === 'Cracovie' ? 'clpn_co' : 'clpn_cr'
      var template_params = {
        to: this.props.email,
      }

      window.emailjs.send(service_id,template_id,template_params)
    }
  }

  render() {
    return (
      <div className={styles.Valid}>
        <p className={styles.done}><b>Votre demande a bien été prise en compte !</b></p>
        <p>Un email de confirmation vient de vous être envoyé à l'adresse : <span className={styles.grey}>{this.props.email}</span>.<br/>Ce dernier contient des informations importantes concernant votre prochain voyage.</p>
        <p><b><i>Et maintenant ?</i></b><br/>Notre service de réservation s'empresse d'ores et déjà de traiter les derniers préparatifs nécessaires au bon déroulement de votre week-end à <span className={styles.grey}>{this.props.choice}</span> <i>(réservation des billets d'avion, chambre d'hôtel, etc.)</i>.</p>
        <p>Nous vous tiendrons informés, très prochainement, de l'état d'avancement de votre dossier.</p>
        <br/>
        <p><i>Si vous ne voyez pas l'email de confirmation, merci de vérifier que ce dernier ne soit arrivé dans vos emails indésirables ou dans vos spams.</i></p>
        <p className={styles.end}>Au nom de toute l'équipe de CLPN, nous vous souhaitons un très<span className={styles.happy}> Joyeux Noël</span> !</p>
      </div>
    )
  }
}

export default Valid
