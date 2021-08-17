import Facebook from 'components/svg/Facebook'
import Instagram from 'components/svg/Instagram'
import LinkedIn from 'components/svg/LinkedIn'
import Twitter from 'components/svg/Twitter'
import Link from 'next/link'
import styles from './index.module.scss'
import Logo from 'components/svg/Logo'
import { CONTACTS, LINKS } from 'types'


interface Props {
}

export default function Footer(props: Props) {

  const options = [{label: 'Гороскоп', link: '/#horoscope'},
  {label: 'Аффирмации', link: '/#affirmatio'},
  {label: 'Мудрость', link: '/#wisdom'},
  {label: 'Исцеление', link: '/#healing'},
  {label: 'Нумерология', link: '/#numerology'},
  {label: 'Календарь красоты', link: '/#calendar'},
  {label: 'Шар предсказаний', link: '/#ball'},
  {label: 'Древо жизни', link: '/#tree'},
]

const about = [{label: 'Веб версия', link: '#'},
  {label: 'Версия для айфон', link: '#'},
  {label: 'Версия для андроид', link: '#'},
  {label: 'О нас', link: '#'},
  {label: 'Оплата', link: '#'},
  {label: 'Договор', link: '#'}
]

const news = [{label: 'Последние новости', link: '#'},
  {label: 'Отзывы', link: '#'},
  {label: 'Блог', link: '#'}
]

  return (
    <body className={styles.default}>
    <div className={styles.container}>
      <div className={styles.root}>
        <div className={styles.left}>
        <Link href="/">
        <a>
        <div className={styles.logo}>
          <Logo/>
          <div className={styles.titleLogo}>Starmoon</div>
        </div>
        </a>
        </Link>
          <div className={styles.desc}>
            Гороскоп — упорядоченное<br/> отображение взаимного<br/> расположения планет на звёздном<br/> небе в определенный промежуток<br/>
            времени по знакам зодиака.
          </div>
          <div className={styles.email}>
            <img src="/img/icons/email.svg" alt=""/>
            <Link href={`mailto:${CONTACTS.email}`}><a
              className={styles.text}>{CONTACTS.email}</a></Link>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.shop}>
            <div className={styles.head}>Приложения</div>
            {options.map(item => 
              <Link href={item.link}>
              <a className={styles.text}>
                {item.label}
              </a>
              </Link>
            )}
          </div>
          <div className={styles.shop}>
            <div className={styles.head}>О компании</div>
            {about.map(item => 
              <Link href={item.link}>
              <a className={styles.text}>
                {item.label}
              </a>
              </Link>
            )}
          </div>
          <div className={styles.shop}>
            <div className={styles.head}>Новости</div>
            {news.map(item => 
              <Link href={item.link}>
              <a className={styles.text}>
                {item.label}
              </a>
              </Link>
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.head}>Соц сети</div>
            <div className={styles.social}>
              <Link href={`${CONTACTS.facebook}`}>
                <a className={styles.icon} target="blank"><Facebook/></a>
              </Link>
              <Link href={`${CONTACTS.instagram}`}>
                <a className={styles.icon} target="blank"><Instagram/></a>
              </Link>
              <Link href={`${CONTACTS.facebook}`}>
                <a className={styles.icon} target="blank"><LinkedIn/></a>
              </Link>
              <Link href={`${CONTACTS.instagram}`}>
                <a className={styles.icon} target="blank"><Twitter/></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © StarMoon 2021 
      </div>
    </div>
    </body>
  )
}
