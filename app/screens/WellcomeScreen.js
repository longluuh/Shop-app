import react from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContent}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text>Easy shopping</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.innerText}>Sign in</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.innerText}>Sign up</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContent: {
    position: "absolute",
    top: 70,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ECDC4",
  },
  innerText: {
    color: "black",
    alignSelf: "center",
    top: 20,
  },
});

export default WelcomeScreen;
