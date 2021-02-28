import { CompleatedChallenges } from '../components/CompleatedChallenges'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/components/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleatedChallenges />
        </div>
        <div></div>
      </section>
    </div>
  )
}
