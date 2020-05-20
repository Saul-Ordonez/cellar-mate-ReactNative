import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../img/logo1.png')} 
      />
      <View style={styles.buttonGroup} >
      <TouchableOpacity onPress={() => navigation.navigate('Index')}>
          <Image style={styles.cellarIcon} source={require('../img/add_icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Image style={styles.addIcon} source={require('../img/add_icon.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cellarIcon: {
    width: 100,
    height: 100,
  },
  addIcon: {
    marginTop: 50,
    width: 100,
    height: 100,
    paddingLeft: 15,
  },
  image: {
    marginTop: 50,
    paddingTop: 125,
    paddingBottom: 125,
    height: 300,
    width: 300,
    alignSelf: 'center',
  }

});

export default HomeScreen;
