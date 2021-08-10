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
  TouchableOpacity,
  NativeModules
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


class App extends React.Component {
constructor(props) {
  super(props);
}
  render(){
    // const {joined} = this.state;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
                <TouchableOpacity
                  onPress={() => {
                    // this.setState({joined : true});
                    NativeModules.ActivityStarter.navigateToExample('https://meet.jit.si')
                  }}
                  
                >
                  <Text style={styles.sectionDescription}>
                    "Simple React Native App (v-0.62)"
             </Text>
                </TouchableOpacity>
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
  body: {
    backgroundColor: Colors.white,
    height: 600
  },
  sectionDescription: {
    marginTop: 30,
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.dark,
  }
});

export default App;
