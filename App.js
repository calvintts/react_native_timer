import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Clock from './Clock';

let inp = 5;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Clock style = {styles.txt}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    size: 50,
  }
});
