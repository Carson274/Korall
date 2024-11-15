import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Word } from '../types.js'

export default function WordCard({ word } : { word: Word | null }) {
  return (
    <View style={styles.container}>
      <Text style={styles.wordName} >
        {word?.name.kor}
      </Text>
      <Text style={styles.wordNameEnglish} >
        {word?.name.eng}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '90%',
    height: '60%',
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  wordName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  wordNameEnglish: {
    fontSize: 20,
    color: 'gray',
  },
})