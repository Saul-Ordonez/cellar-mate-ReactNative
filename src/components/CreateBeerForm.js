import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const CreateBeerForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues.name);
  const [brewery, setBrewery] = useState(initialValues.brewery);
  const [beerStyle, setBeerStyle] = useState(initialValues.description);
  const [bottleDate, setBottleDate] = useState(initialValues.bottleDate);
  const [abv, setAbv] = useState(initialValues.abv);
  const [ibu, setIbu] = useState(initialValues.ibu);
  const [description, setDescription] = useState(initialValues.description);

  return (
  <ScrollView>
    <View style={styles.mainView}>
      <Text style={styles.label}>BEER NAME</Text>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={(text) => setName(text)} 
      />
      <Text style={styles.label}>BREWERY</Text>
      <TextInput 
        style={styles.input} 
        value={brewery}
        onChangeText={(text) => setBrewery(text)} 
      />
      <Text style={styles.label}>STYLE</Text>
      <TextInput 
        style={styles.input} 
        value={beerStyle} 
        onChangeText={(text) => setBeerStyle(text)} 
      />
      <Text style={styles.label}>DATE BOTTLED</Text>
      <TextInput 
        style={styles.input} 
        value={bottleDate} 
        onChangeText={(text) => setBottleDate(text)} 
      />
      <Text style={styles.label}>ABV</Text>
      <TextInput 
        style={styles.input} 
        value={abv} 
        onChangeText={(text) => setAbv(text)} 
      />
      <Text style={styles.label}>IBU</Text>
      <TextInput 
        style={styles.input} 
        value={ibu} 
        onChangeText={(text) => setIbu(text)} 
      />
      <Text style={styles.label}>DESCRIPTION / NOTES</Text>
      <TextInput 
        style={styles.input}
        multiline={true}
        value={description} 
        onChangeText={(text) => setDescription(text)} 
      />
      <TouchableOpacity onPress={() => onSubmit(name, brewery, beerStyle, bottleDate, abv, ibu, description)} style={styles.btnStyle} >
        <Text style={styles.btnTextStyle}>SAVE BEER</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
  );
};

CreateBeerForm.defaultProps = {
  initialValues: {
    name: '',
    brewery: '',
    beerStyle: '',
    bottleDate: '',
    abv: '',
    ibu: '',
    description: ''
  }
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    padding: 5,
    margin: 5,
    marginRight: 25,
    marginLeft: 25,
    fontFamily: 'AvenirNextCondensed-Regular',
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
    textAlign: 'center',
    fontFamily: 'AvenirNextCondensed-DemiBold',
    fontSize: 22,
  },
  mainView: {
    paddingTop: 15,
    backgroundColor: '#ded7cd'
  },
  btnStyle: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    marginHorizontal: 85,
    paddingVertical: 15,
    marginVertical: 20,
    marginBottom: 40,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  btnTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'AvenirNextCondensed-DemiBold',
  }
});

export default CreateBeerForm;