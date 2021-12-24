import Coluna from '../components/Coluna'
import ColunaPar from '../components/ColunaPar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Coluna/>
      <ColunaPar/>
      <Coluna/>
      <ColunaPar/>
      <Coluna/>
      <ColunaPar/>
      <Coluna/>
      <ColunaPar/>
    </div>
  )
}
