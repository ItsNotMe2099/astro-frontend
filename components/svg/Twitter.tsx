import React from 'react'

interface Props {
  color?: string
  className?: string
}

function Twitter(props: Props) {
  return (
    <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.0041 4.03097C30.8234 4.54893 29.5652 4.89225 28.2534 5.05895C29.6029 4.25324 30.6328 2.98712 31.1171 1.46103C29.8589 2.21117 28.4697 2.74104 26.9893 3.03673C25.7946 1.76466 24.0919 0.976807 22.2344 0.976807C18.6305 0.976807 15.7292 3.90198 15.7292 7.48799C15.7292 8.00396 15.7728 8.50009 15.88 8.9724C10.4682 8.70846 5.67959 6.11471 2.4627 2.16354C1.90108 3.13794 1.57165 4.25324 1.57165 5.45387C1.57165 7.70827 2.73259 9.70667 4.46309 10.8636C3.41725 10.8438 2.39126 10.5402 1.52204 10.0619C1.52204 10.0817 1.52204 10.1075 1.52204 10.1333C1.52204 13.2967 3.77843 15.9241 6.73734 16.5294C6.20747 16.6743 5.62998 16.7438 5.03066 16.7438C4.61391 16.7438 4.19319 16.7199 3.79828 16.6326C4.64169 19.2105 7.03502 21.1057 9.88081 21.1672C7.66609 22.8997 4.85404 23.9436 1.8098 23.9436C1.27596 23.9436 0.763957 23.9197 0.251953 23.8543C3.13545 25.7137 6.55278 26.7755 10.238 26.7755C22.2165 26.7755 28.7654 16.8529 28.7654 8.25203C28.7654 7.96427 28.7555 7.68644 28.7416 7.41059C30.0335 6.49375 31.1191 5.34869 32.0041 4.03097Z"/>
    </svg>
  )
}

export default Twitter
