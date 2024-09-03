import React from "react";
import { StyleSheet, View } from "react-native";

const Triangle = (props) => {
  const { containerStyle } = props;
  return <View style={styles.triangle}></View>;
};

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 18,
    borderBottomWidth: 18,
    borderLeftWidth: 18,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#EBEBEB",
    borderLeftColor: "transparent",
    marginLeft: 20,
    marginTop: -12,
    bottom:12,
  },
});

export default Triangle;
