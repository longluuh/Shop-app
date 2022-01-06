import React from "react";
import { Button, View, StyleSheet, Image } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="on" color={"#fc5c65"} />
        <Button title="off" color={"#4ECDC4"} />
      </View>
      <Image style={styles.image} source={require("../assets/chair.png")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: 30,
  },
  image: {
    top: "10%",
    width: "100%",
    height: "70%",
  },
});

export default ViewImageScreen;
