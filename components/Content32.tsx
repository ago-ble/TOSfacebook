import React from 'react';
import { StyleSheet } from 'react-native';
import { View, TextField, Text, Button, Typography, Colors } from 'react-native-ui-lib';
import { Image } from 'expo-image';

export function Content32() {
    return (
      <View style={styles.container}>


        <View style={styles.container2}>
          <Text style={styles.textNormal}><Text style={{fontWeight: 'bold'}}>Negalite</Text> naudoti mūsų Produktų ar <Text style={{fontWeight: 'bold'}}>bendrinti turinio</Text> jei tai:</Text>
          <Text style={styles.textNormal}>{'\u2022'} <Text style={{fontWeight: 'bold'}}>Pažeidžia</Text> šias <Text style={{fontWeight: 'bold'}}>Sąlygas</Text>, mūsų Bendruomenės standartus ir kitas sąlygas bei politikos nuostatas.</Text>
          <Text style={styles.textNormal}>{'\u2022'} <Text style={{fontWeight: 'bold'}}>Neteisėta, klaidinanti, diskriminuojanti</Text> arba apgaulinga veikla.</Text>
          <Text style={styles.textNormal}>{'\u2022'} <Text style={{fontWeight: 'bold'}}>Turinys</Text>, kuris <Text style={{fontWeight: 'bold'}}>jums nepriklauso</Text> ar neturite teisės jo bendrinti.</Text>
          <Text style={styles.textNormal}>{'\u2022'} <Text style={{fontWeight: 'bold'}}>Pažeidžia</Text> kito <Text style={{fontWeight: 'bold'}}>asmens teises</Text>, įskaitant intelektinės nuosavybės teises.</Text>
        </View>
        <View center>
           <Image
              source={require('@/assets/images/C32/not-allowed-in-meta.svg')}
              style={styles.card1}
              contentFit="contain"
              transition={1000}
            />
        </View>
        <View center>
           <Image
              source={require('@/assets/images/C32/fb-delete-acc.svg')}
              style={styles.card2}
              contentFit="contain"
              transition={1000}
            />
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 20,
    paddingTop: 5,
  },
  container2: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 25,
    paddingBottom: 0,
    paddingTop: 5,
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
    paddingLeft: 40,
  },
  card1: {
    width: 370,
    height: 288,
    padding: 0,
  },
  card2: {
    width: 344,
    height: 130 ,
    padding: 0,
  }
});