import Logo from 'components/svg/Logo'
import styles from './index.module.scss'
import Link from 'next/link'
import Button from 'components/ui/Button'

interface Props {}

export default function Header(props: Props) {

  const menu = [{label: 'Гороскоп', link: '#'},
  {label: 'Аффирмации', link: '#'},
  {label: 'Мудрость', link: '#'},
  {label: 'Исцеление', link: '#'},
  {label: 'Нумерология', link: '#'},
  {label: 'Календарь красоты', link: '#'},
  {label: 'Шар предсказаний', link: '#'},
  {label: 'Древо жизни', link: '#'},
]
  
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo/>
          <div className={styles.title}>Starmoon</div>
        </div>
        <div className={styles.menu}>
          {menu.map(item => 
            <Link href={item.link}>
              <a className={styles.item}>{item.label}</a>
            </Link>
          )}
        </div>
        <div className={styles.btns}>
          <div className={styles.firstBtn}>
            <Button variant='outlined' wrapper size='small' fontColor='pink'>вход</Button>
          </div>
          <Button size='small' color='fill'>регистрация</Button>
        </div>
      </div>
    </div>
  )
}
