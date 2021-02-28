import  Head  from 'next/head'
import { CompleatedChallenges } from '../components/CompleatedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/components/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start | do.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleatedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  )
}
