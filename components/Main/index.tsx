import Logo from 'components/svg/Logo'
import styles from './index.module.scss'
import Link from 'next/link'
import Button from 'components/ui/Button'

interface Props {}

export default function Main(props: Props) {
  
  return (
    <body className={styles.body}>
      <div className={styles.root}>
        <div className={styles.cloudsRight}>
          <img src='/img/Main/cloudsRight.svg' alt=''/>
        </div>
        <div className={styles.cloudsLeft}>
          <img src='/img/Main/cloudsLeft.svg' alt=''/>
        </div>
        <div className={styles.hills}>
          <img src='/img/Main/hills.svg' alt=''/>
        </div>
        <div className={styles.grass}>
          <img src='/img/Main/grass.svg' alt=''/>
        </div>
          <div className={styles.celestials}>
            <div className={styles.comet}>
              <img src='/img/Main/comet.svg' alt=''/>
            </div>
            <div className={styles.moon}>
              <img src='/img/Main/moon.svg' alt=''/>
            </div>
          </div>
        <div className={styles.container}>
          <div className={styles.bottom}>
            <div className={styles.textBlock}>
              <span>Приложение которое<br/> улучшит вашу жизнь</span>
              <div className={styles.btns}>
                <div className={styles.firstBtn}><Button image='/img/Main/google.svg' size='noPadding'/></div>
                <Button image='/img/Main/apple.svg' size='noPadding'/>
              </div>
            </div>
            <div className={styles.cloud}>
              <img src='/img/Main/cloud.svg' alt=''/>
            </div>
            <div className={styles.stargazer}>
              <img src='/img/Main/stargazer.svg' alt=''/>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
