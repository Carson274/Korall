import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import wordsLearned from "./data/wordsLearned.json";

export default function Index() {
  const [date, setDate] = useState(new Date());
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const graphData = wordsLearned.map((word, index) => {
    return {
      value: word.count,
      label: word.weekday,
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer} >
        <Text style={styles.titleDate} >{date.getDate()}, {months[date.getMonth()].slice(0, 3)}.</Text>
        <Text style={styles.titleWeekday} >{weekdays[date.getDay()]}</Text>
      </View>
      <View style={styles.lineBreakContainer} >
        <View style={styles.lineBreak} />
      </View>
      <View style={styles.graphContainer} >
        <View style={styles.graphTitleContainer} >
          <Text style={styles.graphTitle} >
            Words Learned
          </Text>
          <View style={styles.graphTitleContainerRight} >
            <Text style={styles.graphWordCountText} >
              {graphData[graphData.length - 1].value}
            </Text>
            <Text style={styles.graphSubtitleText} >
              Total
            </Text>
          </View>
        </View>
        <LineChart 
          areaChart 
          data={graphData}
          width={240}
          height={180}
          isAnimated
          color="#175A26"
          noOfSections={5}
        />
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
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 40,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer: {
    top: 0,
    left: 0,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleDate: {
    fontSize: 20,
    color: 'gray',
  },
  titleWeekday: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  lineBreakContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  lineBreak: {
    width: '90%',
    height: 1,
    backgroundColor: 'lightgray',
    opacity: 0.5,
  },
  graphContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 30,
  },
  graphTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  graphTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  graphTitleContainerRight: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  graphWordCountText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  graphSubtitleText: {
    fontSize: 16,
    color: 'gray',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});