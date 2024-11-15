import React, { useState } from 'react'
import { View, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native'
import wordData from '../data/wordData.json'
import { Word } from '../types.js'
import WordList from './WordList'
import LanguageToggle from './LanguageToggle'
import WordCard from './WordCard'

export default function MainPage() {
  const [words, setWords] = useState<Word[]>(wordData)
  const [language, setLanguage] = useState('eng')
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedWord, setSelectedWord] = useState<Word | null>(null)

  const toggleModal = () => { setModalVisible(!modalVisible) }

  return (
    <View style={styles.container}>
      <WordList words={words} language={language} toggleModal={toggleModal} setSelectedWord={setSelectedWord} />
      <LanguageToggle language={language} setLanguage={setLanguage} />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)} >
          <View style={styles.modalContainer} >
            <TouchableWithoutFeedback>
              <WordCard word={selectedWord} />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: '#00000080',
  },
})