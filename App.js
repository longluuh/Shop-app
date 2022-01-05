import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="click me"
        onPress={() =>
          Alert.alert("my text", "my message", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("no") },
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
    alignItems: "center",
    justifyContent: "center",
  },
});
