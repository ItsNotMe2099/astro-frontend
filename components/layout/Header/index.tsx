import Logo from 'components/svg/Logo'
import styles from './index.module.scss'
import Link from 'next/link'
import Button from 'components/ui/Button'
import DynamicOverflow from 'utils/DynamicOverflow'
import ButtonDotsWithOverflow from 'components/ui/Button/ButtonDotsWithOverflow';
import cx from 'classnames'
import { useEffect, useState } from 'react'

interface Props {}

export default function Header(props: Props) {

  const options = [{label: 'Гороскоп', link: '#'},
  {label: 'Аффирмации', link: '#'},
  {label: 'Мудрость', link: '#'},
  {label: 'Исцеление', link: '#'},
  {label: 'Нумерология', link: '#'},
  {label: 'Календарь красоты', link: '#'},
  {label: 'Шар предсказаний', link: '#'},
  {label: 'Древо жизни', link: '#'},
]

const [isScrolled, setIsScrolled] = useState(false)

const handleScroll = () => {
  if (window.pageYOffset > 0) {
    setIsScrolled(true)
  }
  else{
    setIsScrolled(false)
  }
}

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
})


  return (
    <div className={cx(styles.root, {[styles.scrolled]: isScrolled})}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo/>
          <div className={styles.title}>Starmoon</div>
        </div>
        <DynamicOverflow
          list={({ nodeRef }) => [
            ...options.map((item, index) => (
              <Link href={item.link}>
                <a
                  className={styles.item}
                  href={item.link}
                  ref={nodeRef}
                  key={index + 1}
                >
                  {item.label}
                </a>
              </Link>
            )),
          ]}
        >
          {({ visibleElements, overflowElements, containerRef, moreNodeRef }) => {
            return (
              <div ref={containerRef} className={styles.list}>
                {visibleElements}
                {overflowElements.length > 0 && (
                  <div className={styles.dots} ref={moreNodeRef}>    
                    <ButtonDotsWithOverflow>
                        {overflowElements}
                    </ButtonDotsWithOverflow>
                  </div>
                )}
              </div>
            )
          }}
        </DynamicOverflow>
        <div className={styles.btns}>
          <div className={styles.firstBtn}>
            <Button className={isScrolled && styles.black} variant='outlined' wrapper size='small' fontColor='pink'>вход</Button>
          </div>
          <Button size='small' color='fill'>регистрация</Button>
        </div>
      </div>
    </div>
  )
}
