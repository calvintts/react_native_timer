import React from 'react';
import { StyleSheet, Text, View,Button, Alert } from 'react-native';

const reset = 0;



export default class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      min : 0,
      sec : 0,
      running : false,
      rest: 5,
      work: 25,
    }
  }


  
  startTimer = () => 
  {
    if(this.state.running == false)
    this.timer = setInterval(this.updateTimer,1000);
  }

  stopTimer = () =>
  {
    this.setState((prevState, props)=>
    { return ({running:false})})
    clearInterval(this.timer);
  }

  resetTimer = () =>
  {
    clearInterval(this.timer);
    this.setState((prevState, props)=>
      {
        return ({sec: reset, min: reset, running: false,})
      })
  }
  

  updateTimer = () =>
  {
    if(this.state.min<this.state.work)
    {
    this.setState((prevState, props)=>
    {
      if(prevState.sec == 59)
      return ({sec: 0, min: prevState.min+1, running: true,})
      return ({sec: prevState.sec +1})
    })
    }
    else{
    Alert.alert('Times Up');
    clearInterval(this.timer);
    }
  }


  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent:'center'}}>
        <Text style = {{fontSize:30}}> {this.state.min} minutes : {this.state.sec} seconds</Text>
        <Button onPress={this.startTimer} title="Start Timer"/>
        <Button onPress={this.stopTimer} title="Stop Timer"/>
        <Button onPress={this.resetTimer} title="Reset Timer"/>
      </View>
    );
  }
}
