import React from 'react';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';
import BackgroundTimer from 'react-native-background-timer';


export default class JitsiView extends React.Component {

  constructor(props) {
    super(props);
    this.onConferenceTerminated = this.onConferenceTerminated.bind(this);
    this.onConferenceJoined = this.onConferenceJoined.bind(this);
    this.jitsiTimeout = null;
  }

  componentDidMount() {
    setTimeout(() => {
      const url = 'http://meet.jit.si/RidssTesting';  // here you need to give join url 
      const userInfo = { displayName: 'User', email: 'user@example.com', avatar: 'https:/gravatar.com/avatar/abc123', };
      JitsiMeet.call(url, userInfo);
      /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
      /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
    }, 1000);
  }

  componentWillUnmount() {
    if (this.jitsiTimeout) {
      BackgroundTimer.clearInterval(this.jitsiTimeout);
    }
    JitsiMeet.endCall();
  }

  // Jitsi Update Timeout needs to be called every 10 seconds to make sure
  // call is not ended and is available to web users.
  onConferenceJoined = () => {
    if (this.jitsiTimeout) {
      BackgroundTimer.clearInterval(this.jitsiTimeout);
    }
  }

  onConferenceTerminated = () => {
    const { navigation } = this.props;
    if (this.jitsiTimeout) {
      BackgroundTimer.clearInterval(this.jitsiTimeout);
    }
  }

  render() {
    return (<JitsiMeetView
      onConferenceTerminated={this.onConferenceTerminated}
      onConferenceJoined={this.onConferenceJoined}
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}
    />
    )
  }
}