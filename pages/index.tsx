import Content from 'components/Content'
import Footer from 'components/layout/Footer'
import Header from 'components/layout/Header'
import Layout from 'components/layout/Layout'
import MagicBall from 'components/lottie/components/MagicBall'
import Main from 'components/Main'
import SimpleSlider from 'components/Slider'
import styles from './index.module.scss'


export default function Home(props) {
  return (
    <Layout>
      <Header/>
      <div className={styles.root}>
        <Main/>
      </div>
      <div className={styles.slider}>
      <SimpleSlider/>
      </div>
        <div className={styles.content}>
        <Content image='/img/Content/horoscope.svg' title='ГОРОСКОП НА КАЖДЫЙ ДЕНЬ' 
        desc='упорядоченное отображение взаимного расположения планет на звёздном небе в определенный промежуток времени по знакам зодиака. Используется в астрологии с целью предсказания судьбы.' 
        color='blue'/>
        <div className={styles.waves2} id='affirmatio'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content image='/img/Content/affirmatio.svg' title='АФФИРМАЦИИ' 
        desc='упорядоченное отображение взаимного расположения планет на звёздном небе в определенный промежуток времени по знакам зодиака. Используется в астрологии с целью предсказания судьбы.' 
        color='black' right/>
        <div className={styles.waves} id='wisdom'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content image='/img/Content/wisdom.svg' title='MУДРОСТЬ' 
        desc='упорядоченное отображение взаимного расположения планет на звёздном небе в определенный промежуток времени по знакам зодиака. Используется в астрологии с целью предсказания судьбы.' 
        color='blue'/>
        <div className={styles.waves2} id='healing'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content image='/img/Content/healing.svg' title='ИСЦЕЛЕНИЕ' 
        desc='упорядоченное отображение взаимного расположения планет на звёздном небе в определенный промежуток времени по знакам зодиака. Используется в астрологии с целью предсказания судьбы.' 
        color='black' right/>
        <div className={styles.waves3} id='numerology'>
          <img src='/img/backgrounds/waves.svg' alt=''/>
        </div>
        <Content image='/img/Content/numerology.svg' title='НУМЕРОЛОГИЯ' 
        desc='упорядоченное отображение взаимного расположения планет на звёздном небе в определенный промежуток времени по знакам зодиака. Используется в астрологии с целью предсказания судьбы.' 
        color='blue'/>
        <div className={styles.waves2} id='calendar'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content image='/img/Content/calendar.svg' title='КАЛЕНДАРЬ КРАСОТЫ' 
        desc='упорядоченное отображение взаимного расположения планет на звёздном небе в определенный промежуток времени по знакам зодиака. Используется в астрологии с целью предсказания судьбы.' 
        color='black' right/>
        <div className={styles.waves3} id='ball'>
          <img src='/img/backgrounds/waves.svg' alt=''/>
        </div>
        <Content lottie={<MagicBall/>} image='/img/Content/magicBall.svg' title='ШАР ПРЕДСКАЗАНИЙ' 
        desc='упорядоченное отображение взаимного расположения планет на звёздном небе в определенный промежуток времени по знакам зодиака. Используется в астрологии с целью предсказания судьбы.' 
        color='blue'/>
        <div className={styles.waves2} id='tree'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content image='/img/Content/tree.svg' title='ДЕРЕВО ЖИЗНИ' 
        desc='упорядоченное отображение взаимного расположения планет на звёздном небе в определенный промежуток времени по знакам зодиака. Используется в астрологии с целью предсказания судьбы.' 
        color='black' right/>
        </div>
      <Footer/>
    </Layout>
  )
}

