import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { Image } from "expo-image";
import AccDeletionList from "./AccDeletionList";

export function Content42() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.textNormal}>
          Galime <Text style={{fontWeight: 'bold'}}>sustabdyti</Text> ar visam laikui <Text style={{fontWeight: 'bold'}}>išjungti</Text> jūsų prieigą prie „Meta“
          įmonių produktų bei visam laikui <Text style={{fontWeight: 'bold'}}>išjungti</Text> ar <Text style={{fontWeight: 'bold'}}>panaikinti</Text> jūsų paskyrą,
          jei:
        </Text>
        <Text style={styles.textNormal}>
          {"\u2022"} Nustatę, kad aiškiai, <Text style={{fontWeight: 'bold'}}>šiurkščiai</Text> ar <Text style={{fontWeight: 'bold'}}>pakartotinai pažeidėte</Text> mūsų <Text style={{fontWeight: 'bold'}}>Sąlygas</Text> ar Politiką, ypač Bendruomenės standartus.
        </Text>
        <Text style={styles.textNormal}>
          {"\u2022"} <Text style={{fontWeight: 'bold'}}>Pakartotinai pažeisite</Text> kitų asmenų <Text style={{fontWeight: 'bold'}}>intelektinės</Text> nuosavybės teises.
        </Text>
        <Text style={styles.textNormal}>
          {"\u2022"} Privalome tai padaryti dėl <Text style={{fontWeight: 'bold'}}>teisinių priežasčių.</Text>
        </Text>
        <Text style={styles.textNormal}>
          {"\u2022"} Po registracijos jūsų <Text style={{fontWeight: 'bold'}}>paskyra nėra patvirtinta.</Text>
        </Text>
        <Text style={styles.textNormal}>
          {"\u2022"} <Text style={{fontWeight: 'bold'}}>Paskyra</Text> yra <Text style={{fontWeight: 'bold'}}>nenaudojama</Text> ir išlieka <Text style={{fontWeight: 'bold'}}>neaktyvi</Text> ilgą laiką.
        </Text>
      </View>

      <View
        style={{ flexDirection: "row", paddingRight: 10, alignItems: "center" }}
      >
        <Text style={styles.textNormal}>
          {"\u2022"} Nustatome, kad <Text style={{fontWeight: 'bold'}}>kažkas</Text> kitas <Text style={{fontWeight: 'bold'}}>naudoja paskyrą be jūsų leidimo</Text> ir negalime patvirtinti, kad esate paskyros savininkas.
        </Text>
        <Image
          source={require("@/assets/images/C4/delete-acc.svg")}
          style={styles.card1}
          contentFit="contain"
        />
      </View>

      <View style={styles.container2}>
        <Text style={styles.textNormal}>
          Norėdami <Text style={{fontWeight: 'bold'}}>paskyrą</Text> visam laikui <Text style={{fontWeight: 'bold'}}>ištrinti</Text> Paskyrų centre, atlikite toliau
          nurodytus veiksmus.
        </Text>
        <View style={{ paddingLeft: 40}}>
          <AccDeletionList/>
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
  },
  card1: {
    width: 208,
    height: 156,
  },
});
