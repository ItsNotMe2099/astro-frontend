import SliderControl from "components/ui/SliderControl";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from './index.module.scss'
import Slide from "./Slide";

export default function SimpleSlider() {

    const settings = {
      dots: true,
      arrows:true,
      nextArrow: <SliderControl direction="next"/>,
      prevArrow: <SliderControl direction="prev"/>,
      rows: 2,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: false,
      adaptiveHeight: false,
      dotsClass: `${styles.dots}`,
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 475,
          settings: {
            slidesToShow: 1,
            rows: 1
          }
        }
      ]
    };

const slides = [
{title: 'Гороскоп', image: '/img/Slider/horoscope.svg', desc: 'узнай, что ждет тебя завтра и спланируй день максимально интересно'},
{title: 'Аффирмации', image: '/img/Slider/affirmatio.svg', desc: 'создай правильный психологический настрой для успешной жизни'},
{title: 'Мудрость', image: '/img/Slider/wisdom.svg', desc: 'воспользуйся простыми подсказками от опытных гуру, чтобы уже сегодня твоя жизнь стала лучше и продуктивнее'},
{title: 'Исцеление', image: '/img/Slider/healing.svg', desc: 'набор практик, который научит быть в моменте, не оставаться в прошлом и не бежать в будущее'},
{title: 'Нумерология', image: '/img/Slider/numerology.svg', desc: 'концепция изучающая числа, сопровождающие нашу жизнь. Узнай, что говорят о тебе цифры'},
{title: 'Календарь красоты', image: '/img/Slider/calendar.svg', desc: 'эффективно планируй процедуры в салоне красоты с помощью этой рубрики. Подсказки на каждый день в зависимости от астрологических событий.'},
{title: 'Шар предсказаний', image: '/img/Slider/magicBall.svg', desc: 'твой помощник в сомнительных ситуациях — узнай ответ на самый волнующий вопрос'},
{title: 'Древо жизни', image: '/img/Slider/tree.svg', desc: 'у каждого человека свое древо жизни. Оно помогает раскрыть некоторые моменты в судьбе человека. Получи важный совет в жизни'}]

    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <Slider {...settings}>
            {slides.map(item => <Slide title={item.title} image={item.image} desc={item.desc}/>)}
          </Slider>
        </div>
        <div className={styles.waves} id='horoscope'>
          <img src='/img/backgrounds/waves.svg' alt=''/>
        </div>
      </div>
    )
  }
