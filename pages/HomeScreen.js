import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-elements'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button 
        icon={{
          name:'reorder',
          size:20,
          color:'white',
          type:'material'
        }}
        title='Details Screen' 
        onPress={()=>navigation.navigate('Details')}
      ></Button>
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

export default HomeScreen;
