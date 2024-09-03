import styled from 'styled-components/native';
import stylesFrom from '../../../assets/styles/styles'

interface TextProps {
  color: string;
  fontSize: number;
  bold: boolean,
  align: string,
  lineHeight: number,
  marginLeft: number,
  marginRight: number,
  marginTop: number,
  marginBottom: number,
  fontWeight: string,
  width: string
}
export const TextWrapper=styled.Text`
  color: ${( props: TextProps ) => props.color || stylesFrom.grey};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  ${({ bold }) => bold && 'font-weight: bold'};
  ${({ align }) => align && `text-align: ${align}`};
  ${({ lineHeight }) => lineHeight && `line-height:${20}px`};
  ${({ marginLeft }) => marginLeft && `margin-left:${marginLeft}px`};
  ${({ marginRight }) => marginRight && `margin-left:${marginRight}px`};
  ${({ marginBottom }) => marginBottom && `margin-bottom:${marginBottom}px`};
  ${({ marginTop }) => marginTop && `margin-top:${marginTop}px`};
  ${({ fontWeight }) => fontWeight && `font-weight:${fontWeight}`};
  ${({ width }) => width && `width:${width}`};
`;

