//import { Text, View, Button,  StyleSheet  } from "react-native";
import {StyleSheet  } from "react-native";
import {Link, Stack,  useLocalSearchParams, useRouter } from "expo-router"; // Import useNavigation
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import React, {Component} from 'react';
import {Typography, Colors, Spacings} from 'react-native-ui-lib';
import { Image } from 'expo-image';


Colors.loadColors({
  fbBlue: '#0062DD',
  gold: '#FFD700',
});

Typography.loadTypographies({
  h1: {fontSize: 26, fontWeight: '2500', lineHeight: 50, bold: true},
  h2: {fontSize: 46, fontWeight: '300', lineHeight: 64},

  h3: {fontSize: 22, fontWeight: '500', lineHeight: 30},

  h5: {fontSize: 16, fontWeight: '200', lineHeight: 30},
  h51: {fontSize: 16, fontWeight: '500', lineHeight: 22, color: 'black', bold: true},
});

export default function DocPage() {
  const router = useRouter();
  const params = useLocalSearchParams();
  return (
  <View flex paddingH-25 paddingT-16 backgroundColor="white">
    <Text h1 text50BO marginB-30 >Prieš paskyros sukūrimą kviečiame susipažinti su „Facebook“ sąlygomis ir politika</Text>
    <View style={{ borderTopWidth: 2, borderTopColor: '#0062DD', marginBottom: 30 }} />

    <Text h3 marginB-15>Sąlygas ir politiką sudaro:</Text>
    <View flex center>
      <View marginB-10>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
          <Image
            source={require('@/assets/images/doc/tos.svg')}
            style={styles.TosImage}
            contentFit="contain"
            transition={1000}
          />
          <Text h51 style={{ marginLeft: 8 }}>Paslaugų teikimo sąlygos</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 34 }}>
          <Image
            source={require('@/assets/images/doc/privacy-policy.svg')}
            style={styles.privacyPolicyImage}
            contentFit="contain"
            transition={1000}
          />
          <Text h51 style={{ marginLeft: 8 }}>Privatumo politika</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 34 }}>
          <Image
            source={require('@/assets/images/doc/cookie.svg')}
            style={styles.cookieImage}
            contentFit="contain"
            transition={1000}
          />
          <Text h51 style={{ marginLeft: 8 }}>Slapukų politika</Text>
        </View>
      </View>
    </View>

    
    <View flex bottom paddingB-10>
      <Button style={styles.buttonText} label="Tęsti"
          onPress={() => {
          router.navigate({pathname: 'tosPage'});
        }}/>
    </View>


  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 320,
    height: 50,
    padding: 10,
    fontSize: 24,
    backgroundColor: 'blue',
    borderRadius: 25,
  },
  TosImage: {
    width: 40.7,
    height: 45,
  },
  privacyPolicyImage: {
    width: 38.54,
    height: 38.54,
  },
  cookieImage: {
    width: 45,
    height: 45,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "200",
    lineHeight: 30,
    marginBottom: 18,
    color: "white",
    backgroundColor: "#0062DD",
  },
});