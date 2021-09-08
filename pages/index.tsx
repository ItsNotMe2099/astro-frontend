import Content from 'components/Content'
import Footer from 'components/layout/Footer'
import Header from 'components/layout/Header'
import Layout from 'components/layout/Layout'
import Affirmatio from 'components/lottie/components/Affirmatio'
import Calendar from 'components/lottie/components/Calendar'
import Healing from 'components/lottie/components/Healing'
import Horoscope from 'components/lottie/components/Horoscope'
import MagicBall from 'components/lottie/components/MagicBall'
import Numerology from 'components/lottie/components/Numerology'
import Tree from 'components/lottie/components/Tree'
import Wisdom from 'components/lottie/components/Wisdom'
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
        <Content lottie={<Horoscope/>} image='/img/Content/horoscope.svg' title='ГОРОСКОП НА КАЖДЫЙ ДЕНЬ' 
        desc='узнай что ждет тебя завтра и спланируй день максимально интересно' 
        color='blue'/>
        <div className={styles.waves2} id='affirmatio'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content lottie={<Affirmatio/>} image='/img/Content/affirmatio.svg' title='АФФИРМАЦИИ' 
        desc='создай правильный психологический настрой для успешной жизни' 
        color='black' right/>
        <div className={styles.waves} id='wisdom'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content lottie={<Wisdom/>} image='/img/Content/wisdom.svg' title='MУДРОСТЬ' 
        desc='воспользуйся простыми подсказками от опытных гуру, чтобы уже сегодня твоя жизнь стала лучше и продуктивнее' 
        color='blue'/>
        <div className={styles.waves2} id='healing'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content lottie={<Healing/>} image='/img/Content/healing.svg' title='ИСЦЕЛЕНИЕ' 
        desc='набор практик, который научит быть в настоящем моменте и не оставаться в прошлом, не бежать в будущее' 
        color='black' right/>
        <div className={styles.waves3} id='numerology'>
          <img src='/img/backgrounds/waves.svg' alt=''/>
        </div>
        <Content lottie={<Numerology/>} image='/img/Content/numerology.svg' title='НУМЕРОЛОГИЯ' 
        desc='цифровой расчет чисел, сопровождающих и влияющих на вашу жизнь. Узнайте что говорят о вас цифры' 
        color='blue'/>
        <div className={styles.waves2} id='calendar'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content lottie={<Calendar/>} image='/img/Content/calendar.svg' title='КАЛЕНДАРЬ КРАСОТЫ' 
        desc='эффективно планируй процедуры в салоне красоты с помощью этой рубрики. Подсказки на каждый день в зависимости от астрологических трендов' 
        color='black' right/>
        <div className={styles.waves3} id='ball'>
          <img src='/img/backgrounds/waves.svg' alt=''/>
        </div>
        <Content lottie={<MagicBall/>} image='/img/Content/magicBall.svg' title='ШАР ПРЕДСКАЗАНИЙ' 
        desc='узнай ответ на самый волнующий вопрос. Ваш помощник в сомнительных ситуациях' 
        color='blue'/>
        <div className={styles.waves2} id='tree'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content lottie={<Tree/>} image='/img/Content/tree.svg' title='ДЕРЕВО ЖИЗНИ' 
        desc='у каждого человека свое дерево жизни. Оно помогает раскрыть некоторые моменты в судьбе человека. Получите важный совет в жизни' 
        color='black' right/>
        </div>
      <Footer/>
    </Layout>
  )
}

