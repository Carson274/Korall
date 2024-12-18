import React from 'react'
import { Word } from '../types'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function WordListItem({ word, language, toggleModal, setSelectedWord } : { word: Word, language: string, toggleModal: () => void, setSelectedWord: (word: Word) => void }) {
  const handlePress = () => {
    setSelectedWord(word)
    toggleModal()
  }

  return (
    <Pressable onPress={handlePress} >
      <View style={styles.container}>
        <Text style={styles.word}>{word.name[language]}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  word: {
    fontSize: 16,
  },
})