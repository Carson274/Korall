import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import MainPage from "./MainPage/MainPage";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <MainPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});