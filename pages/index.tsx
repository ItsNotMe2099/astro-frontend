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
        desc='Задавался ли ты вопросом, что такое гороскоп? Если буквально, то это наблюдение взаимного расположения планет и звезд на определенный момент времени. На момент твоего рождения. А знак зодиака, по сути, индивидуальный астрологический портрет. Зная прогноз погоды, ты захватишь с собой зонтик и не промокнешь. Зная гороскоп, ты сможешь настроиться на свою волну событий и не терять равновесие.' 
        color='blue'/>
        <div className={styles.waves2} id='affirmatio'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content lottie={<Affirmatio/>} image='/img/Content/affirmatio.svg' title='АФФИРМАЦИИ' 
        desc='Практика, с помощью которой можно улучшить настроение и начать верить в собственные силы. Одна лишь правильно составленная фраза самовнушения, самогипноза, создаст правильный психологический настрой. Аффирмация отлично работает трансформируя твоё подсознание и помогая тебе уверенно идти к цели. ' 
        color='black' right/>
        <div className={styles.waves} id='wisdom'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content lottie={<Wisdom/>} image='/img/Content/wisdom.svg' title='MУДРОСТЬ' 
        desc='Глубокий ум всегда опирается на опыт. Степень познания окружающего мира увеличивается лишь в процессе пути. Обычные люди, умеющие использовать свои знания и опыт так, чтобы принимать разумные решения и совершать разумные поступки становятся мудрецами. Наполни свой день светлой мудростью.' 
        color='blue'/>
        <div className={styles.waves2} id='healing'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content lottie={<Healing/>} image='/img/Content/healing.svg' title='ИСЦЕЛЕНИЕ' 
        desc='Умеешь ли ты жить «здесь» и «сейчас»? Ведь качество жизни измеряется именно текущим моментом. Зацикленные на желаниях, мы совсем не придаём значения пути. Нет спокойствия в погоне. Научись наслаждаться дорогой к своей цели.' 
        color='black' right/>
        <div className={styles.waves3} id='numerology'>
          <img src='/img/backgrounds/waves.svg' alt=''/>
        </div>
        <Content lottie={<Numerology/>} image='/img/Content/numerology.svg' title='НУМЕРОЛОГИЯ' 
        desc='Числа определяют нашу жизнь и существование всего, что нас окружает. Какие тайны стоят за цифрами? Как влияют числа на судьбу человека? Нумерология - инструмент сбора знаний о себе и других, о том как взаимодействовать с миром. Узнай, чего на самом деле хочется твоей душе и как этого достичь.' 
        color='blue'/>
        <div className={styles.waves2} id='calendar'>
          <img src='/img/backgrounds/waves2.svg' alt=''/>
        </div>
        <Content lottie={<Calendar/>} image='/img/Content/calendar.svg' title='КАЛЕНДАРЬ КРАСОТЫ' 
        desc='Бьюти-гороскопы уже не новость. Наше тело живет в гармонии с природой и подчиняется тем же законам, что и она. Перед звездами все равны. Следуя таким рекомендациям можно добиться максимального эффекта от процедуры. А значит более разумно потратить свои время и средства.' 
        color='black' right/>
        <div className={styles.waves3} id='ball'>
          <img src='/img/backgrounds/waves.svg' alt=''/>
        </div>
        <Content lottie={<MagicBall/>} image='/img/Content/magicBall.svg' title='ШАР ПРЕДСКАЗАНИЙ' 
        desc='Иногда стоит отпустить контроль и довериться случаю. Пожалуй самое оригинальное средство для принятия решений.' 
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

