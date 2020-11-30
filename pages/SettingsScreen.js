import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-elements'

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <Button 
      icon={{
        name:'person',
        size:20,
        color:'white',
        type:'material'
      }}
      title='Profile Screen' onPress={()=>navigation.navigate('Profile')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
});

export default SettingsScreen;
