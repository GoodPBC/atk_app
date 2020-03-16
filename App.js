
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Routes from './src/config/routes'

const App = () => {
  console.log(`THIS IS APP`)
  console.log(Routes);
  return (
    <View style={styles.wrapper}>
      <Routes />
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  titletext: {
    fontSize: 30,
    marginTop: '10',
    alignSelf: 'center',
    color: 'black'
  },
});

export default App;
