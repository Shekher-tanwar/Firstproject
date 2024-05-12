/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React , {useState} from 'react';
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

  const [count, setCount] = useState(0)

 const onClickHandler = () => {
  setCount(count + 1)
 }
  
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{count}</Text>
      <Button title='Add' onPress={onClickHandler}></Button>
      <Text style={styles.text}>Yuo Clicked {count} times.</Text>
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
