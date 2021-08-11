import styles from './index.module.scss'
import Link from 'next/link'
import cx from 'classnames'
interface Props {
  children?: React.ReactNode
  variant: 'contained' | 'outlined' 
  color?: 'fill'
  size?: 'small' | 'normal' | 'large' | 'noPadding'
  fluid?: boolean
  disabled?: boolean
  href?: string
  target?: string
  className?: string
  type?: 'submit' | 'reset' | 'button'
  blank?: boolean
  image?: string
  fontColor?: 'pink'
  wrapper?: boolean
  onClick?: (e: any) => void

}

export default function Button(props: Props) {

  const getClassName = () => {
    return {
      [styles.sizeSmall]: props.size === 'small',
      [styles.noPadding]: props.size === 'noPadding',
      [styles.sizeNormal]: props.size === 'normal',
      [styles.sizeLarge]: props.size === 'large',
      [styles.variantContained]: props.variant === 'contained',
      [styles.variantOutlined]: props.variant === 'outlined',
      [styles.fill]: props.color === 'fill',
      [styles.fontPink]: props.fontColor === 'pink',
      [styles.fluid]: props.fluid,
      [styles.disabled]: props.disabled
    }
  }
  return (
  <div className={cx({[styles.wrapper]: props.wrapper})}>
  {props.href ? (
    <Link href={props.href}>
      <a
        onClick={props.onClick}
        href={props.href}
        target={props.target}
        className={cx(styles.link, getClassName(), props.className)}
      >
        {props.image ? <img src={props.image} alt=""/> : props.children}
      </a>
    </Link>
  ) : (
    <button
      type={props.type}
      onClick={props.onClick}
      className={cx(styles.btn, getClassName(), props.className)}
      disabled={props.disabled}
    >
      {props.image ? <img src={props.image} alt=""/> : props.children}
    </button>
)}</div>)
}

Button.defaultProps = {
  type: 'button',
  target: '',
  variant: 'contained',
  size: 'normal'
}
