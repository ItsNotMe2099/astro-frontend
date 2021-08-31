import Lottie from 'react-lottie';
import animationData from 'components/lottie/json/stargazer.json'

interface Props {
 
}


export default function Stargazer(props: Props) {

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
            width={371}
            height={609}
          />
  )
}
