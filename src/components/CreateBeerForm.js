import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
    <View>
      <Text style={styles.label}>Beer Name</Text>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={(text) => setName(text)} 
      />
      <Text style={styles.label}>Brewery</Text>
      <TextInput 
        style={styles.input} 
        value={brewery}
        onChangeText={(text) => setBrewery(text)} 
      />
      <Text style={styles.label}>Style</Text>
      <TextInput 
        style={styles.input} 
        value={beerStyle} 
        onChangeText={(text) => setBeerStyle(text)} 
      />
      <Text style={styles.label}>Date Bottled</Text>
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
      <Text style={styles.label}>Description / Notes</Text>
      <TextInput 
        style={styles.input}
        multiline={true}
        value={description} 
        onChangeText={(text) => setDescription(text)} 
      />
      <Button 
        title='Save Beer'
        onPress={() => onSubmit(name, brewery, beerStyle, bottleDate, abv, ibu, description)}
      />
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
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
    textAlign: 'center',
  }
});

export default CreateBeerForm;