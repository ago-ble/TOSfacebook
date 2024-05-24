import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Content5() {
    return (
      <View style={styles.container}>
        <Text style={styles.textNormal}>Bendruomenės standartai</Text>
        <Text style={styles.textNormal}>Kaip taikome savo turinio politiką</Text>
        <Text style={styles.textNormal}>Piktnaudžiavimo politika</Text>
        <Text style={styles.textNormal}>Skundų nagrinėjimo procesas</Text>
        <Text style={styles.textNormal}>Komercinės sąlygos</Text>
        <Text style={styles.textNormal}>Bendruomenės mokėjimo sąlygos</Text>
        <Text style={styles.textNormal}>Prekybos politika</Text>
        <Text style={styles.textNormal}>Muzikos gairės</Text>
        <Text style={styles.textNormal}>Reklamos politika</Text>
        <Text style={styles.textNormal}>Reklamų išjungimo sąlygos</Text>
        <Text style={styles.textNormal}>Savitarnos reklamų sąlygos</Text>
        <Text style={styles.textNormal}>„Facebook“ puslapių, grupių ir renginių politika</Text>
        <Text style={styles.textNormal}>„Meta“ platformos politika</Text>
        <Text style={styles.textNormal}>Kūrėjo mokėjimo sąlygos</Text>
        <Text style={styles.textNormal}>„Meta“ prekių ženklų ištekliai</Text>
        <Text style={styles.textNormal}>Rekomenduojamų sistemų sistemos kortelės</Text>
        <Text style={styles.textNormal}>Tiesioginių transliacijų politika</Text>
        <Text style={styles.textNormal}>Žinučių siuntimo paslaugų sąlygos, aktualios ES ir EEE naudotojams: 
        sąlygos, taikomos žinučių siuntimo, balso ir vaizdo skambučių paslaugoms, 
        įtrauktoms į „Facebook“ produktus, išvardytos čia ir čia atsižvelgiant į ES taisykles.</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 25,
    paddingBottom: 20 ,
    paddingTop: 8,
  },
  textBold: {
    fontSize: 18, 
    fontWeight: 'bold',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  textNormal: {
    fontSize: 16,
    flexShrink: 1, 
    flexWrap: 'wrap',
    paddingBottom: 10,
  }
});