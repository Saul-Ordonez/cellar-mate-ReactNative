import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/CellarContext';
import CreateBeerForm from '../components/CreateBeerForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBeer } = useContext(Context);

  const beer = state.find(
    (beer) => beer.id === id
  );

  return (
    <CreateBeerForm
      initialValues={{ 
        name: beer.name, 
        brewery: beer.brewery, 
        bottleDate: beer.bottleDate,
        abv: beer.abv,
        ibu: beer.ibu,
        description: beer.description
      }}
      onSubmit={(name, brewery, bottleDate, abv, ibu, description) => {
        editBeer(id, name, brewery, bottleDate, abv, ibu, description, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({

});

export default EditScreen;