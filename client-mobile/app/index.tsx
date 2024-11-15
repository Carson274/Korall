import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";

export default function Index() {
  const [date, setDate] = useState(new Date());
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer} >
        <Text style={styles.titleDate} >{date.getDate()}, {months[date.getMonth()].slice(0, 3)}.</Text>
        <Text style={styles.titleWeekday} >{weekdays[date.getDay()]}</Text>
      </View>
      <View style={styles.buttonListContainer} >
      <Link
        style={styles.buttonContainer}
        href="/WordsPage"
      >
        <Text>View your Words</Text>
      </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    padding: 40,
  },
  titleContainer: {
    top: 0,
    left: 0,
    padding: 20,
    width: '100%',
  },
  titleDate: {
    fontSize: 20,
    color: 'gray',
  },
  titleWeekday: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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