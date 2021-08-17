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
{title: 'Гороскоп', image: '/img/Slider/horoscope.svg', desc: 'упорядоченное отображение взаимного расположения планет на звёздном небе в определенный'},
{title: 'Аффирмации', image: '/img/Slider/affirmatio.svg', desc: 'утвердительное суждение. В популярной психологии аффирмация — это позитивное'},
{title: 'Мудрость', image: '/img/Slider/wisdom.svg', desc: 'Свойство человеческого разума, характеризующееся степенью освоения знаний и подсознательного опыта'},
{title: 'Исцеление', image: '/img/Slider/healing.svg', desc: 'Доктрина, утверждающая возможность сверхъестественного физического исцеления'},
{title: 'Нумерология', image: '/img/Slider/numerology.svg', desc: 'вера в религиозные, эзотерические или мистические связи между числами и будущим или характером человека.'},
{title: 'Календарь красоты', image: '/img/Slider/calendar.svg', desc: 'Женский лунный календарь, советы красоты на каждый день, рекомендации по посещению косметолога'},
{title: 'Шар предсказаний', image: '/img/Slider/magicBall.svg', desc: 'Особенности конструкции: Фигура с ответами имеет не монолитную конструкцию, а состоит из двух частей'},
{title: 'Древо жизни', image: '/img/Slider/tree.svg', desc: 'Мифологический образ во многих культурах. В славянской народной традиции вариант мирового древа.'}]

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
