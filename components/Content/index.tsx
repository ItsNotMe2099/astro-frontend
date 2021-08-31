import styles from './index.module.scss'
import cx from 'classnames'
import Button from 'components/ui/Button'
import Lottie from 'react-lottie';

interface Props {
  color: 'blue' | 'black'
  right?: boolean
  image?: any
  title: string
  desc: string
  lottie?: any
}


export default function Content(props: Props) {

  const getColorClassName = () => {
    return {
      [styles.blue]: props.color === 'blue',
      [styles.black]: props.color === 'black',

    }
  }

  const getOrientationClassName = () => {
    return {
      [styles.right]: props.right
    }
  }

  return (
      <div className={cx(styles.root, getColorClassName(), getOrientationClassName())}>
        <div className={styles.image}>
          {props.lottie ?
            <>{props.lottie}</>
          :
          <img src={props.image}/>}
        </div>
        <div className={styles.text}>
          <div className={styles.title}>
            {props.title}
          </div>
          <div className={styles.desc}>
            {props.desc}
          </div>
          <div className={styles.btn}>
            <Button className={cx(getColorClassName())} variant='outlined' wrapper size='normal'>ПОПРОБОВАТЬ БЕСПЛАТНО</Button>
          </div>
        </div>
      </div>
  )
}
