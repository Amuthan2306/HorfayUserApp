import React, { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native'
import styles from './styles.js'

interface Props {
  name: string;
  activeState: boolean;
  languageChange: () => void;
  activeStateTwo: Boolean
}
const Card = ({
  name,
  activeState,
  languageChange,
  activeStateTwo
}: Props) => {
  return (
    <Pressable
      onPress={() => languageChange()}
      style={activeState || activeStateTwo ? styles.activeCardView : styles.cardView}>
      <Text style={activeState || activeStateTwo ? styles.activeText : styles.inactiveText}>{name}</Text>
    </Pressable>)
};


export default Card;