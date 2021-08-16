import styles from './index.module.scss'

interface Props{
  title: string
  image: string
  desc: string
}

export default function Slide(props: Props) {

    return (
      <div className={styles.root}>
        <div className={styles.slideIcon}>
          <img src={props.image} alt=''/>
        </div>
        <div className={styles.slideTitle}>{props.title}</div>
        <div className={styles.slideDesc}>{props.desc}</div>
      </div>
    )
  }
