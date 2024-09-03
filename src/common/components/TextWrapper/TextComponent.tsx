import React, { ReactNode} from 'react';

import {TextWrapper} from './styledComponents';
interface TextProps {
  color: string;
  fontSize: number;
  bold: boolean;
  numberOfLines?: number;
  align: string;
  lineHeight: number;
  marginLeft: number;
  marginRight: number;
  marginTop: number;
  marginBottom: number;
  fontWeight: string;
  width: string;
  style?: {};
  onPress?: () => void;
  padding:any
  children: ReactNode;
}
const Text = ({
  color,
  fontSize,
  children,
  align,
  lineHeight,
  bold,
  numberOfLines,
  marginLeft,
  marginBottom,
  marginTop,
  marginRight,
  fontWeight,
  width,
  style,
  onPress,
  padding,
  ...restProps
}: TextProps) => (
  <TextWrapper
    color={color}
    fontSize={fontSize}
    align={align}
    lineHeight={lineHeight}
    bold={bold}
    numberOfLines={numberOfLines}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginBottom={marginBottom}
    marginTop={marginTop}
    fontWeight={fontWeight}
    width={width}
    style={style}
    onPress={onPress}
    padding={padding}
    {...restProps}>
    {children}
  </TextWrapper>
);

Text.defaultProps = {
  children: null,
  color: 'grey',
  fontSize: 14,
  align: 'left',
  marginLeft: 0,
  marginBottom: 0,
  marginRight: 0,
  marginTop: 0,
  bold: false,
  lineHeight: 0,
  width: null,
  fontWeight: null,
};

export default Text;

//eg.<Text fontSize={15} bold align={'center'} marginLeft={10}>Hello</Text>
