//rnfes اختصار
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarItem from './src/components/CarItem'
import { Car } from './src/res/data'

const App = () => {
  const renderCars = () => {
    const carsComponents = Car.map(Car => {
      return (
        <CarItem
          name={Car.name}
          brand={Car.brand}
          year={Car.year}
          price={Car.price}
          km={Car.km}
          color={Car.color}
        />
      );

    });
    return carsComponents;
  };
  return (

    <View style={styles.container}>
      <ScrollView>
        <CarItem
          brand="awdi"
          name="mohamed"
          year="2000"
          price="50k"
          km="100k"
          color='red'
        />
        <CarItem
          brand="supra"
          name="nope"
          year="1975"
          price="100k"
          km="50k"
          color="pink"
        />
        <CarItem
          brand="dodge"
          name="yes"
          year="1950"
          price="20k"
          km="230k"
          color='black'
        />
        <CarItem
          brand="bugati"
          name="okay"
          year="2000"
          price="60k"
          km="10k"
          color="blue"
        />


      </ScrollView>

    </View>
  );
};

export default App

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingRight: 1,
    paddingLeft: 1,
    paddingTop: 1,
    paddingBottom: 1,
  },

})