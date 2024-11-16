import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Word } from '../types.js'

export default function WordCard({ word } : { word: Word | null }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer} >
        <View style={styles.wordNameContainer} >
          <Text style={styles.wordName} >
            {word?.name.kor}
          </Text>
          <Text style={styles.wordNameEnglish} >
            {word?.name.eng}
          </Text>
        </View>
      </View>
      <Text style={styles.wordDefinition} >
        | {word?.definition}
      </Text>
      <Text style={styles.wordExamplesTitle} >
        Examples (예시):
      </Text>
      <View style={styles.examplesContainer} >
        {word?.examples.map((example, index) => (
          <Text key={index} style={styles.wordExample} >
            {example.kor}
            {'\n'}
            {example.eng}
          </Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '90%',
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wordNameContainer: {
    flexDirection: 'column',
  },
  wordName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  wordNameEnglish: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 8,
  },
  wordDefinition: {
    fontSize: 16,
    marginBottom: 20,
  },
  wordExamplesTitle: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  examplesContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  wordExample: {
    fontSize: 16,
  },
})