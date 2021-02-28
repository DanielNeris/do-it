import styles from '../styles/components/CompleatedChallenges.module.css'

export function CompleatedChallenges(){
  return(
    <div className={styles.compleatedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  )
}