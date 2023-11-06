import React from 'react'
import styles from './Funcionamiento.module.css'

const Funcionamiento = () => {
  return (
    <div className={styles.indications}>
      <h1>Funcionamiento</h1>
      <p>En la parte de arriba puedes ver 3 botones, cado uno con una función 
        similar pero diferente.
      </p>
      <ul className={styles.lista}>
        <li><strong>Poema Español.-</strong> Al presionar este botón te apareceran de manera aleatoria 
          poemas en Español.
        </li>
        <li><strong>Poema Italiano.-</strong> Al presionar este botón te apareceran,
        al igual que en el anterior botón, de manera aleatoria poemas en este caso en Italiano.</li>
        <li><strong>Poema Francés.-</strong> Y este pues más de lo mismo, al presionarlo te apareceran
        de manera aleatoria poemas en Francés.</li>
      </ul>
    </div>
  )
}

export default Funcionamiento