import React, { Component } from 'react';

import styles from './styles.module.scss';

class Valid extends Component {
  componentDidMount () {
    if(!localStorage.getItem('email')) {
      localStorage.setItem('email', this.props.email)
      localStorage.setItem('choice', this.props.choice)
    }
  }

  render() {
    return (
      <div className={styles.Valid}>
        <p className={styles.done}><b>Votre demande a bien été prise en compte !</b></p>
        <p>Un email de validation vient de vous être envoyé à l'adresse : <span className={styles.grey}>{this.props.email}</span>.<br/>Ce dernier contient quelques informations importantes concernant votre prochain voyage.</p>
        <p><b><i>Et maintenant ?</i></b><br/>Notre service de réservation s'empresse d'ores et déjà de traiter les derniers préparatifs nécessaires au bon déroulement de votre week-end à <span className={styles.grey}>{this.props.choice}</span> <i>(réservation des billets d'avion, chambre d'hôtel...)</i>.</p>
        <p><b>N'hésitez pas à consulter régulièrement votre boîte de réception</b>.<br/>Un email récapitulatif vous sera très prochainement transmis et incorporera, entre autres, dates précises de votre séjour, hôtel, horaires de vols, etc.
        </p>
        <p className={styles.end}>Au nom de toute l'équipe de CLPN, nous vous souhaitons un très<span className={styles.happy}> Joyeux Noël</span> !</p>
      </div>
    )
  }
}

export default Valid
