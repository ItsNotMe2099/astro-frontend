import React from 'react'

interface Props {
  color?: string
  className?: string
}

function Facebook(props: Props) {
  return (
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46902 0H28.2832C30.4721 0 32.2522 1.78011 32.2522 3.96902V27.7832C32.2522 29.9721 30.4721 31.7522 28.2832 31.7522H22.3296V20.8374H25.3064L27.2909 15.8761H22.3296V11.9071C22.3296 10.9002 23.0808 10.906 24.0529 10.9135C24.1384 10.9141 24.2256 10.9148 24.3141 10.9148H26.2987V5.95354H22.3296C19.0413 5.95354 16.3761 8.61874 16.3761 11.9071V15.8761H12.4071V20.8374H16.3761V31.7522H4.46902C2.28011 31.7522 0.5 29.9721 0.5 27.7832V3.96902C0.5 1.78011 2.28011 0 4.46902 0Z"/>
    </svg>
  )
}

export default Facebook
