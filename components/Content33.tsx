import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Image } from 'expo-image';

export function Content33 () {
    return (
      <View style={styles.container}>


        <View style={styles.container2}>
          <Text style={styles.textNormal}>Jūs suteikiate mums šiuos leidimus:</Text>
          <Text style={styles.textNormal}>{'\u2022'} <Text style={{fontWeight: 'bold'}}>Naudoti jūsų</Text> sukurtą ir bendrinamą <Text style={{fontWeight: 'bold'}}>turinį</Text>. 
          Visas turinys yra <Text style={{fontWeight: 'bold'}}>jūsų nuosavybė</Text>, bet jūs suteikiate mums neišimtinę, perleidžiamą, sublicencijuojamą, <Text style={{fontWeight: 'bold'}}>neatlygintiną</Text>, 
          pasauliniu mastu suteikiamą <Text style={{fontWeight: 'bold'}}>licenciją naudoti</Text>, platinti, keisti, paleisti, kopijuoti, 
          viešai rodyti, išversti ir kurti išvestinius <Text style={{fontWeight: 'bold'}}>jūsų turinio</Text> kūrinius 
          (laikantis jūsų privatumo ir programos nustatymų).</Text>
          <Text style={styles.textNormal}>{'\u2022'} <Text style={{fontWeight: 'bold'}}>Naudoti jūsų vardą, pavardę</Text>, profilio <Text style={{fontWeight: 'bold'}}>nuotrauką</Text> ir <Text style={{fontWeight: 'bold'}}>informaciją</Text> apie jūsų veiksmus su reklamomis ir remiamu ar komerciniu turiniu.</Text>
          <Text style={styles.textNormal}>{'\u2022'} <Text style={{fontWeight: 'bold'}}>Atnaujinti programinę įrangą</Text>, kurią naudojate ar atsisiunčiate.</Text>
        </View>
        <View center>
           <Image
              source={require('@/assets/images/C33/security.svg')}
              style={styles.card1}
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
    width: 275,
    height: 195,
    
  },
});