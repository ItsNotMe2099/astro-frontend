import SliderControl from "components/ui/SliderControl";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from './index.module.scss'

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

    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <Slider {...settings}>
            <div className={styles.slide}>
              <div className={styles.slideIcon}>
              <img src='/img/Slider/horoscope.svg'/>
              </div>
              <div className={styles.slideTitle}>Гороскоп</div>
              <div className={styles.slideDesc}>упорядоченное отображение<br/> взаимного расположения<br/> планет на звёздном небе в<br/> определенный </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slideIcon}>
                <img src='/img/Slider/affirmatio.svg' />
              </div>
              <div className={styles.slideTitle}>Аффирмации</div>
              <div className={styles.slideDesc}>утвердительное суждение. В<br/> популярной психологии<br/> аффирмация — это<br/> позитивное</div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slideIcon}>
                <img src='/img/Slider/wisdom.svg'/>
              </div>
              <div className={styles.slideTitle}>Мудрость</div>
              <div className={styles.slideDesc}>Свойство человеческого<br/> разума, характеризующееся<br/> степенью освоения знаний и<br/> подсознательного опыта </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slideIcon}>
              <img src='/img/Slider/healing.svg' />
              </div>
              <div className={styles.slideTitle}>Исцеление</div>
              <div className={styles.slideDesc}>Доктрина, утверждающая<br/> возможность<br/> сверхъестественного<br/> физического исцеления </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slideIcon}>
              <img src='/img/Slider/numerology.svg'/>
              </div>
              <div className={styles.slideTitle}>Нумерология</div>
              <div className={styles.slideDesc}>вера в религиозные,<br/> эзотерические или<br/> мистические связи между<br/> числами и будущим или<br/> характером человека.</div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slideIcon}>
              <img src='/img/Slider/calendar.svg'/>
              </div>
              <div className={styles.slideTitle}>Календарь красоты</div>
              <div className={styles.slideDesc}>Женский лунный календарь,<br/> советы красоты на каждый<br/> день, рекомендации по<br/> посещению косметолога</div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slideIcon}>
              <img src='/img/Slider/magicBall.svg'/>
              </div>
              <div className={styles.slideTitle}>Шар предсказаний</div>
              <div className={styles.slideDesc}>Особенности конструкции:<br/> Фигура с ответами имеет не<br/> монолитную конструкцию, а<br/> состоит из двух частей</div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slideIcon}>
              <img src='/img/Slider/tree.svg'/>
              </div>
              <div className={styles.slideTitle}>Древо жизни</div>
              <div className={styles.slideDesc}>Мифологический образ во<br/> многих культурах. В<br/> славянской народной<br/> традиции вариант мирового<br/> древа.</div>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
