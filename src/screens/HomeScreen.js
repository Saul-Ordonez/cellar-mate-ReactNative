import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button 
        title='View your cellar'
        onPress={() => navigation.navigate('Index')}
      />
      <Button 
        title='Add a beer'
        onPress={() => navigation.navigate('Create')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default HomeScreen;
