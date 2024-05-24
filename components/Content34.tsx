import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Image } from 'expo-image';

export function Content34 () {
    return (
      <View style={styles.container}>


        <View style={styles.container2}>
          <Text style={styles.textNormal}>Jei <Text style={{fontWeight: 'bold'}}>naudojate turinį</Text>, kuriam taikomos <Text style={{fontWeight: 'bold'}}>intelektinės nuosavybės</Text> teisės, 
            kuris priklauso mums ir kuriuo dalijatės mūsų produktuose 
            (pavyzdžiai: mūsų siūlomos nuotraukos), <Text style={{fontWeight: 'bold'}}>pasiliekame</Text> visas <Text style={{fontWeight: 'bold'}}>teises</Text> į šį <Text style={{fontWeight: 'bold'}}>turinį</Text> (bet <Text style={{fontWeight: 'bold'}}>ne jūsų</Text> sukurtą turinį). 
          </Text>
        </View>

        <View row paddingR-10>          
          <Text style={styles.textNormal}>Galite <Text style={{fontWeight: 'bold'}}>naudoti</Text> mūsų <Text style={{fontWeight: 'bold'}}>autorių teises</Text> ir <Text style={{fontWeight: 'bold'}}>prekių ženklus</Text> tik tada, kai <Text style={{fontWeight: 'bold'}}>tai aiškiai leidžiama</Text> pagal mūsų Prekės ženklo naudojimo gaires, 
            arba gavę <Text style={{fontWeight: 'bold'}}>išankstinį raštišką leidimą</Text>.
          </Text>
           <Image
              source={require('@/assets/images/C34/statistics.svg')}
              style={styles.card1}
              contentFit="contain"
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
    paddingBottom: 15,
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
    width: 216,
    height: 200,
  },
});