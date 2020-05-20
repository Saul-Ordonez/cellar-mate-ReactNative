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
          <Image style={styles.cellarIcon} source={require('../img/view_icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Image style={styles.addIcon} source={require('../img/add_icon-1.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    header: (
      null
    )
  };
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cellarIcon: {
    height: 170,
    width: 140,
    marginLeft: 50,
    marginTop: 10,
  },
  addIcon: {
    height: 180,
    width: 80,
    marginRight: 60,
  },
  image: {
    marginTop: 40,
    paddingTop: 125,
    paddingBottom: 125,
    height: 340,
    width: 340,
    alignSelf: 'center',
  }

});

export default HomeScreen;
