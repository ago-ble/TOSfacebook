import React from "react";
import { StyleSheet } from "react-native";
import {
  View,
  TextField,
  Text,
  Button,
  Typography,
  Colors,
} from "react-native-ui-lib";
import { Image } from "expo-image";

export function Content41() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.textNormal}>
          Nuolat siekiame tobulinti savo teikiamas paslaugas ir sukurti naujų
          funkcijų, todėl mums gali reikėti kartais <Text style={{fontWeight: 'bold'}}>atnaujinti</Text> šias <Text style={{fontWeight: 'bold'}}>Sąlygas</Text>.
        </Text>
        <Text style={styles.textNormal}>
          Apie tai pranešine bent <Text style={{fontWeight: 'bold'}}>prieš 30 dienų</Text> (pavyzdžiui, el. paštu).
        </Text>
        <Text style={styles.textNormal}>
          <Text style={{fontWeight: 'bold'}}>Įsigaliojus</Text> atnaujintoms <Text style={{fontWeight: 'bold'}}>Sąlygoms</Text>, <Text style={{fontWeight: 'bold'}}>privalėsite</Text> jų <Text style={{fontWeight: 'bold'}}>laikytis</Text>, jei ir
          toliau naudositės mūsų Produktais.
        </Text>
      </View>

      <View row paddingR-20>
        <Text style={styles.textNormal}>
          Jei <Text style={{fontWeight: 'bold'}}>nesutinkate</Text> su atnaujintomis Sąlygomis ir nebenorite būti „Meta“
          bendruomenės dalimi, galite bet kuriuo metu <Text style={{fontWeight: 'bold'}}>ištrinti savo paskyrą</Text>.
        </Text>
        <Image
          source={require("@/assets/images/C4/data.svg")}
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
    paddingBottom: 15,
    paddingTop: 5,
  },
  textBold: {
    fontSize: 18,
    fontWeight: "bold",
    flexShrink: 1,
    flexWrap: "wrap",
  },
  textNormal: {
    fontSize: 16,
    flexShrink: 1,
    flexWrap: "wrap",
    paddingBottom: 10,
    paddingLeft: 40,
  },
  card1: {
    width: 110,
    height: 105,
    paddingLeft: 10,
  },
});
