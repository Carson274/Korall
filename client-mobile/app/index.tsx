import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Link
        style={styles.buttonContainer}
        href="/WordListPage/WordListPage"
      >
        <Text>View your Words</Text>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 40,
  },
  buttonContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
});