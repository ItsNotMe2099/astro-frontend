import Lottie from 'react-lottie';
import animationData from 'components/lottie/json/affirmatio.json'

interface Props {
 
}


export default function Affirmatio(props: Props) {

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
