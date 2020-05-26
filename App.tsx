/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};


interface BtnProps {
  text: string,
  onPress: (n: any) => any
}

const Btn = (props: BtnProps) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      <Text style={styles.btn_text}>{props.text}</Text>
    </TouchableOpacity>
  );
}


const App = () => {
  const showLoading = () => {
    console.warn("show loading");
  }

  return (
    <SafeAreaView>
      <Btn
        text="showLoading"
        onPress={showLoading}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#00a6e2",
    width: '80%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btn_text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
