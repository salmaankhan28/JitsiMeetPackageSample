/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  NativeModules,
  Button,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WebView } from 'react-native-webview';

function HomeScreen({ navigation }) {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            <Button
              title="Join Video Call"
              onPress={() => {
                // this.setState({joined : true});
                NativeModules.ActivityStarter.navigateToExample(
                  "https://meet.jit.si"
                );
              }}
            ></Button>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate("Details")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return <WebView source={{ uri: "https://reactnative.dev/" }} />;
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    height: 600,
  },
  sectionDescription: {
    marginTop: 30,
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.dark,
  },
});

export default App;
