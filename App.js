import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OneSignal from "react-native-onesignal";
import Constants from "expo-constants";
OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);
OneSignal.setAppId("43ad2f5a-8798-4773-bc8b-6ed3de961eca");

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
