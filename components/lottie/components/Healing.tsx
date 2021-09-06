import Lottie from 'react-lottie';
import animationData from 'components/lottie/json/healing.json'

interface Props {
 
}


export default function Healing(props: Props) {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
          <Lottie 
	          options={defaultOptions}
          />
  )
}
