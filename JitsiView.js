import React from 'react';
import BackgroundTimer from 'react-native-background-timer';


export default class JitsiView extends React.Component {

  constructor(props) {
    super(props);
    this.jitsiTimeout = null;
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    if (this.jitsiTimeout) {
      BackgroundTimer.clearInterval(this.jitsiTimeout);
    }
  }

 
  render() {
    return null
  }
}