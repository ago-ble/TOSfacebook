import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const DATA = [
  'Viršutiniame dešiniajame „Facebook“ kampe spustelėkite savo profilio nuotrauką.',
  'Pasirinkite Nustatymai ir privatumas, tada spustelėkite Nustatymai.',
  'Ekrano viršutiniame kairiajame kampe spustelėkite Paskyrų centras.',
  'Skiltyje Paskyros nustatymai spustelėkite Asmens informacija.',
  'Spustelėkite Paskyros nuosavybė ir valdymas.',
  'Spustelėkite Išaktyvinimas ar ištrynimas.',
  'Pasirinkite paskyrą arba profilį, kurį norite ištrinti.',
  'Pasirinkite Ištrinti paskyrą.',
  'Spustelėkite Tęsti ir vykdykite nurodymus, kad patvirtintumėte.',
];

const Item = ({ index, title }) => (
  <View style={styles.item}>
    <Text style={styles.itemNumber}>{index + 1}. </Text>
    <Text style={styles.itemText}>{title}</Text>
  </View>
);

const AccDeletionList = () => {
  return (
    <ScrollView>
      {DATA.map((item, index) => (
        <Item key={index} index={index} title={item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginVertical: 8,
    paddingHorizontal: 0,
    alignItems: 'flex-start',
  },
  itemNumber: {
    width: 25, // Adjust width for number
    textAlign: 'center',
    fontSize: 16,
  },
  itemText: {
    flex: 1,
    flexWrap: 'wrap',   
    marginLeft: 5, // Space between number and text
    textAlign: 'left',
    fontSize: 16,
  },
});

export default AccDeletionList;
