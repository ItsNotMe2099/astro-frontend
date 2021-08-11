import React from 'react'

interface Props {
  color?: string
  className?: string
}

function Logo(props: Props) {
  return (
  <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.4734 19.3815C22.0587 16.6687 18.7827 17.0055 12.6411 19.8872L14.6637 23.9323L23.9338 22.5839L27.4734 19.3815Z" fill="url(#paint0_linear)"/>
    <path d="M15.1694 27.1347C24.271 27.3032 27.4734 19.3815 27.4734 19.3815C27.4734 19.3815 21.4057 24.6065 13.6525 20.3928C5.89926 16.179 3.70813 18.5387 3.70813 18.5387C3.70813 18.5387 6.06781 26.9661 15.1694 27.1347Z" fill="url(#paint1_linear)"/>
    <path d="M30.5409 14.325C30.5409 22.5353 23.8852 29.191 15.675 29.191C7.46475 29.191 0.809032 22.5353 0.809032 14.325C0.809032 8.79302 3.83076 3.96532 8.3163 1.40497C8.30056 1.66455 8.29257 1.92615 8.29257 2.18953C8.29257 9.2455 14.0126 14.9655 21.0685 14.9655C24.645 14.9655 27.8783 13.4953 30.1966 11.1284C30.422 12.1575 30.5409 13.227 30.5409 14.325Z" stroke="white" stroke-width="1.61806"/>
    <defs>
      <linearGradient id="paint0_linear" x1="12.6411" y1="20.7284" x2="27.4734" y2="20.7284" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9795F0"/>
        <stop offset="1" stop-color="#FBC8D4"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="3.70813" y1="22.5087" x2="27.4734" y2="22.5087" gradientUnits="userSpaceOnUse">
        <stop stop-color="#3F51B1"/>
        <stop offset="0.13" stop-color="#5A55AE"/>
        <stop offset="0.25" stop-color="#7B5FAC"/>
        <stop offset="0.38" stop-color="#8F6AAE"/>
        <stop offset="0.5" stop-color="#A86AA4"/>
        <stop offset="0.62" stop-color="#CC6B8E"/>
        <stop offset="0.75" stop-color="#F18271"/>
        <stop offset="0.87" stop-color="#F3A469"/>
        <stop offset="1" stop-color="#F7C978"/>
      </linearGradient>
    </defs>
  </svg>

  )
}

export default Logo
