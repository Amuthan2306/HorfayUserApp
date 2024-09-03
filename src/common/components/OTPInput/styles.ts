import styled from "styled-components/native";

export const OTPInputContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #ffff;
`;

export const TextInputHidden = styled.TextInput`
  /* width: 300px;
  border-color: #9A9FA5;
  border-width: 1px;
  border-radius: 5px;
  padding: 15px;
  margin-top: 50px;
  color: white; */
  position: absolute;
  opacity: 0;
`;

export const SplitOTPBoxesContainer = styled.Pressable`
  width: 96%;
  flex-direction: row;
  justify-content: space-evenly;
  
`;
export const SplitBoxes = styled.View`
  border-color: #f3f3f3;
  border-width: 2px;
  border-radius: 12px;
  padding: 10px;
  alignItems:center;
  justify-content: center;
  min-height: 64px;
  min-width: 56px;
  background-color: #f3f3f3;
`;

export const SplitBoxText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #000;
`;

export const SplitBoxesFocused = styled(SplitBoxes)`
  border-color: grey;
  background-color: #ffffff;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #000000;
  padding: 15px;
  justify-content: center;
  align-items: center;
  width: 335px;
  margin-top: 30px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;