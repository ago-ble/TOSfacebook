//import { Text, View, Button,  StyleSheet  } from "react-native";
import {StyleSheet  } from "react-native";
import {Link, Stack,  useLocalSearchParams, useRouter } from "expo-router";
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import React, {Component} from 'react';
import {Typography, Colors, Spacings} from 'react-native-ui-lib';
import { Image } from 'expo-image';


Colors.loadColors({
  fbBlue: '#0062DD',
  gold: '#FFD700',
  grey: '#BDC9CE',
});

Typography.loadTypographies({
  h1: {fontSize: 26, fontWeight: '2500', lineHeight: 50, bold: true},
  h2: {fontSize: 46, fontWeight: '300', lineHeight: 64},

  h5: {fontSize: 16, fontWeight: '200', lineHeight: 30},
  h51: {fontSize: 16, fontWeight: '500', lineHeight: 22, color: 'black', bold: true},
});


export default function IntroPage() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
  <View flex paddingH-25 paddingT-16 backgroundColor="white">
    <Text style={styles.textBold}>Prisijunkite prie „Facebook“</Text>

    <Image
      source={require('@/assets/images/intro/family.svg')}
      style={styles.familyImage}
      contentFit="contain"
    />

    <Text style={styles.textNormal}>Sukurkite paskyrą, kad galėtumėte bendrauti su draugais, šeimos nariais ir žmonių, kurie turi bendrų pomėgių, bendruomenėmis.</Text>
    <Button h5 marginB-18 white background-fbBlue label="Pradėti"
        onPress={() => {
        router.navigate({pathname: 'docPage'});
      }}/>
      
      <Button h5 outline  outlineWidth-20 outlineColor="grey" label="Jau turiu paskyrą" labelStyle={{ fontWeight: 'bold' }}/>

  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  textBold: {
    fontSize: 26, 
    fontWeight: 'bold',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  textNormal: {
    fontSize: 16,
    flexShrink: 1, 
    lineHeight: 21,
    fontWeight: "600",
    flexWrap: 'wrap',
    paddingBottom: 30,
  },
  button: {
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 320,
    height: 50,
    padding: 8,
    fontSize: 16,
    backgroundColor: 'blue',
    borderRadius: 25,
  },
  familyImage: {
    width: 339.3,
    height: 172,
    borderRadius: 26,
    marginVertical: 22,
    alignItems: 'center',
  },
});