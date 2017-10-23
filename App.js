import React, { Component } from 'react';
import { Platform ,StyleSheet ,Text ,View } from 'react-native';

import Main from "./src/main";

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android:  ,
// });

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
