/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




function App(): React.JSX.Element {
  
  return (
    <View style={styles.body}>
      <Text style={styles.text}>This is First Project.</Text> 
      <Button title='Instagram Profile' onPress={()=>(Linking.openURL('https://www.instagram.com/shekhar_tanwar_01'))}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  body : {
    backgroundColor: '#0000ff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text : {
   color: '#ffffff',
   fontSize : 20,
   margin: 20,
  }
});

export default App;
