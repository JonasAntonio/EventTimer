import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Display from './src/components/Display'

export default class App extends React.Component {

  endTime = new Date('2021', '02', '05', '20', '00', '00', '00')
  

  render() {
    return (
      <View style={styles.container}>
        <Display value={'a'}></Display>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
