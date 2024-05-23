import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { Image } from "expo-image";
import Icon from "react-native-vector-icons/FontAwesome";

export function Content2() {
  return (
    <View style={styles.container}>
      <View style={[styles.row, { gap: 30 }]}>
        <Image
          source={require("@/assets/images/C2/free.svg")}
          style={styles.card1}
          contentFit="contain"
        />
        <Image
          source={require("@/assets/images/C2/paid.svg")}
          style={styles.card1}
          contentFit="contain"
        />
      </View>

      <View row paddingR-20>
        <Icon
          name="exclamation"
          size={50}
          color="red"
          style={{ paddingRight: 0, paddingLeft: 22 }}
        />
        <Text style={{ fontSize: 16, flexWrap: "wrap", paddingLeft: 20 }}>
          Mes <Text style={{fontWeight: 'bold'}}>neparduodame</Text> jūsų <Text style={{fontWeight: 'bold'}}>asmens duomenų reklamuotojams</Text> ir nesidalijame su
          jais informacija, kuri jus tiesiogiai identifikuoja.
        </Text>
      </View>

      <View row paddingR-20 paddingL-20>
        <Text style={styles.textNormal}>
          Pavyzdžiui, jūsų vardas, pavardė, el. pašto adresas ar kita kontaktinė
          informacija.
        </Text>
        <Image
          source={require("@/assets/images/C2/marketing.svg")}
          style={styles.card2}
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
    paddingBottom: 10,
    paddingTop: 8,
  },
  container2: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 25,
    paddingBottom: 10,
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
    paddingRight: 5,
  },
  card1: {
    width: 124,
    height: 155,
  },
  card2: {
    width: 189,
    height: 157,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
