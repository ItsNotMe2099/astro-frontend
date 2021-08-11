import Logo from 'components/svg/Logo'
import styles from './index.module.scss'
import Link from 'next/link'
import Button from 'components/ui/Button'

interface Props {}

export default function Main(props: Props) {
  
  return (
    <body className={styles.body}>
      <div className={styles.root}>
        <div className={styles.grass}>
          <img src='/img/Main/grass.svg' alt=''/>
        </div>
        <div className={styles.container}>
          <div className={styles.textBlock}>
            Приложение которое<br/> улучшит вашу жизнь
          </div>
          <div className={styles.stargazer}>
            <img src='/img/Main/stargazer.svg' alt=''/>
          </div>
          </div>
        </div>
    </body>
  )
}
