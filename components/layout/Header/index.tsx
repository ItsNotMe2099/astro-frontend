import Logo from 'components/svg/Logo'
import styles from './index.module.scss'
import Link from 'next/link'
import Button from 'components/ui/Button'
import DynamicOverflow from 'utils/DynamicOverflow'
import ButtonDotsWithOverflow from 'components/ui/Button/ButtonDotsWithOverflow';
import cx from 'classnames'
import { useEffect, useState } from 'react'
import MenuMobile from 'components/svg/MenuMobile'
import MenuMobileClose from 'components/svg/MenuMobileClose'
import { useRouter } from 'next/router'

interface Props {}

export default function Header(props: Props) {

  const options = [{label: 'Гороскоп', link: '/#horoscope'},
  {label: 'Аффирмации', link: '/#affirmatio'},
  {label: 'Мудрость', link: '/#wisdom'},
  {label: 'Исцеление', link: '/#healing'},
  {label: 'Нумерология', link: '/#numerology'},
  {label: 'Календарь красоты', link: '/#calendar'},
  {label: 'Шар предсказаний', link: '/#ball'},
  {label: 'Древо жизни', link: '/#tree'},
  {label: 'Политика конфиденциальности', link: '/privacy-policy'},
  {label: 'Пользовательское соглашение', link: '/user-agreement'},
]

const [isScrolled, setIsScrolled] = useState(false)
const [isMenuMobileOpen, setMenuMobileOpen] = useState(false)

const router = useRouter()

const handleScroll = () => {
  if (window.pageYOffset > 0) {
    setIsScrolled(true)
  }
  else{
    setIsScrolled(false)
  }
}

const handleOpenMobileMenu = () => {
  if (process.browser) {
    document.body.classList.add('modal-open')
  }

  setMenuMobileOpen(true)
}

const handleCloseMobileMenu = () => {
  if (process.browser) {
    document.body.classList.remove('modal-open')
  }
  setMenuMobileOpen(false)
}

const handleClearBodyClass = () => {
  if (process.browser) {
    document.body.classList.remove('modal-open')
  }
}

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
})


  return (
    <>
    <div className={cx(styles.desktop, {[styles.scrolled]: isScrolled})}>
      <div className={styles.container}>
      <Link href="/#main">
        <a>
        <div className={styles.logo}>
          <Logo/>
          <div className={styles.title}>Starmoon</div>
        </div>
        </a>
        </Link>
        <DynamicOverflow
          list={({ nodeRef }) => [
            ...options.map((item, index) => (
              <Link href={item.link}>
                <a
                  className={cx(styles.item, {[styles.active]: router.asPath === item.link})}
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
    <div className={styles.headerMobile}>
        <div className={styles.container}>
          <Link href="/#main">
            <a onClick={isMenuMobileOpen && handleCloseMobileMenu}>
            <div className={styles.logo}>
              <Logo/>
            <div className={styles.title}>Starmoon</div>
            </div>
            </a>
          </Link>
        {!isMenuMobileOpen && (
          <div
            className={styles.menuOpen}
            onClick={handleOpenMobileMenu}
          >
            <MenuMobile/>
          </div>
        )}
        {isMenuMobileOpen && (
          <div className={styles.menuOpen} onClick={handleCloseMobileMenu}>
            <MenuMobileClose />
          </div>
        )}
         {isMenuMobileOpen && (
        <div className={styles.dropdownMobile}>
          <div className={styles.btns}>
            <div className={styles.firstBtn}>
              <Button className={styles.black} variant='outlined' wrapper size='small' fontColor='pink'>вход</Button>
            </div>
            <Button size='small' color='fill'>регистрация</Button>
          </div>
            <div className={styles.list}>
              {options.map((item) => (
                <Link href={item.link}>
                  <a onClick={handleCloseMobileMenu} className={cx(styles.item, {[styles.active]: router.asPath === item.link})} href={item.link}>
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
        </div>
      )}
        </div>
        </div>
    </>
  )
}
