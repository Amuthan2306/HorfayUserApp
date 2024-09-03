import React from 'react';
import LottieView from 'lottie-react-native';

interface LottieAnimationsProps {
  lottieStyle?: {};
  animationJson?: any;
  autoPlayProp?: boolean;
  loopProp?: boolean;
}

export const LottieAnimations: React.FunctionComponent<
  LottieAnimationsProps
> = ({lottieStyle, animationJson, autoPlayProp, loopProp}) => {
  return (
    <LottieView
      style={lottieStyle}
      source={animationJson}
      autoPlay={autoPlayProp}
      loop={loopProp}
    />
  );
};
