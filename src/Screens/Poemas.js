import React from 'react'
import { useState } from 'react';
import { spanishPoems , italianPoems , frenchPoems } from './PoemasLocos';
import styles from './Poemas.module.css'

const Poemas = () => {
  const [PoemaSpanish, setPoemaSpanish] = useState('"Eres perfecta, como la bolea de Zidane, los regates de Messi o la chilena de Cristiano"');
  const [Author, setAuthor] = useState()
  const [activarTransicion, setActivarTransicion] = useState(false);

  const handleSpanish = () => {
    const numerodePoemas = spanishPoems.length
    const numeroAleatorio = Math.floor(Math.random() * numerodePoemas);
    setPoemaSpanish(spanishPoems[numeroAleatorio].poem);
    setAuthor(spanishPoems[numeroAleatorio].author);
    setActivarTransicion(true);
    setTimeout(() => {
      setActivarTransicion(false);
    }, 500);
  }

  const handleItalian = () => {
    const numerodePoemas = italianPoems.length
    const numeroAleatorio = Math.floor(Math.random() * numerodePoemas);
    setPoemaSpanish(italianPoems[numeroAleatorio].poem);
    setAuthor(italianPoems[numeroAleatorio].author);
    setActivarTransicion(true);
    setTimeout(() => {
      setActivarTransicion(false);
    }, 500);
  }

  const handleFrench = () => {
    const numerodePoemas = frenchPoems.length;
    const numeroAleatorio = Math.floor(Math.random() * numerodePoemas);
    setPoemaSpanish(frenchPoems[numeroAleatorio].poem);
    setAuthor(frenchPoems[numeroAleatorio].author);
    setActivarTransicion(true);
    setTimeout(() => {
      setActivarTransicion(false);
    }, 500);
  }

  return (
    <div className={styles.Poemas}>
        <h1>Poemas para La chica de mis sueños (Aylin)</h1>
        <p>En esta página están todos aquellos poemas que alguna vez ví y decidí guardar para dedicarselo a la chica de mis sueños, no se si lo seas tu, 
          pero lo que si sé, es que no quiero dedicarle estos poemas a nadie que no seas tú.
        </p>
        <div className={styles.sistemaDePoemas}>
          <div className={styles.container}>
            <h3 className={activarTransicion === true && styles.pantallaPoema}>{PoemaSpanish}</h3>
            <h5 className={activarTransicion === true && styles.pantallaPoema}>{Author}</h5>
          </div>
          <div className={styles.buttons}>
            <button onClick={handleSpanish}>Poema Español</button>
            <button onClick={handleItalian}>Poema Italiano</button>
            <button onClick={handleFrench}>Poema Francés</button>
          </div>
        </div>

    </div>
  )
}

export default Poemas