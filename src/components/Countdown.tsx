import styles from "../styles/components/Countdown.module.css";
import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import {CheckCircle, Play} from 'phosphor-react'


export function Countdown() {
  const {hasFinished, isActive, minutes, resetCountdown, seconds, startCountdown} = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
          <CheckCircle size={16} color='#4CD62B' weight="fill"/>
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountdown}
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button onClick={startCountdown} className={styles.countdownButton}>
              Iniciar um ciclo
              <Play  size={16} weight='fill'/>
            </button>
          )}
        </>
      )}
    </div>
  );
}
