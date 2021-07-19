/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import JitsiView from './JitsiView';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state={
    joined : false
  }
}
  render(){
    const {joined} = this.state;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {
              joined ?
                <JitsiView />
                :
                <TouchableOpacity
                  onPress={() => {
                    this.setState({joined : true});
                  }}
                >
                  <Text style={styles.sectionDescription}>
                    Join Meeting
             </Text>
                </TouchableOpacity>
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    height: 600
  },
  sectionDescription: {
    marginTop: 30,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
