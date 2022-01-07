import React from "react";
import { View, StyleSheet, Image } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.png")}
      />
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 20,
    left: 50,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ECDC4",
    position: "absolute",
    top: 20,
    right: 50,
  },
});

export default ViewImageScreen;
