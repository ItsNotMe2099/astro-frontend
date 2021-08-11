import styles from './index.module.scss'

interface Props{
  children?: any
}

export default function Layout({children}: Props){

   return (
    <div className={styles.root}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}
