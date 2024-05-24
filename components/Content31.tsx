import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Image } from 'expo-image';

export function Content31() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textBold}>Jūs privalote: </Text>
          <View center paddingB-10 >
            <Image
              source={require('@/assets/images/C31/privalote.svg')}
              style={styles.card}
              contentFit="contain"
            />
          </View>
        </View>      
        
        <View style={styles.container}>
          <Text style={styles.textBold}>Negalite naudotis „Facebook“, jei:</Text>
          <View center paddingB-10 >
            <Image
              source={require('@/assets/images/C31/draudziama.svg')}
              style={styles.card}
              contentFit="contain"
            />
          </View>
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
  textBold: {
    fontSize: 16, 
    fontWeight: 'bold',
    flexShrink: 1,
    flexWrap: 'wrap',
    paddingBottom: 10,
    paddingLeft: 40,
  },
  textNormal: {
    fontSize: 16,
    flexShrink: 1, 
    flexWrap: 'wrap',
    paddingBottom: 10,
    paddingLeft: 40,
  },
  card: {
    width: 290,
    height: 270 ,
    paddingBottom: 0,
  }
});