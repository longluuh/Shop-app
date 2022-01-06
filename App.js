import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="click me"
        onPress={() =>
          Alert.alert("my text", "my message", [
            { text: "Yes" },
            { text: "No" },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
