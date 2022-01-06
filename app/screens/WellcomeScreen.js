import react from "react";
import { Button, ImageBackground, StyleSheet, View, Image } from "react-native";

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.image}
      >
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <View style={styles.bottomButton}>
          <Button title="Sign In" color={"#fc5c65"} />
          <Button title="Sign Up" color={"#4ECDC4"} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    flexDirection: "row",
    width: 70,
    height: 70,
    alignSelf: "center",
    top: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  bottomButton: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default WelcomeScreen;
