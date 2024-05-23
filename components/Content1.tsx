import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { Image } from "expo-image";

export function Content1() {
  return (
    <View style={styles.container}>
      <Text style={styles.textNormal}>
        {"\u2022"} Teikiame, <Text style={{fontWeight: 'bold'}}>suasmeniname</Text> ir tobuliname savo <Text style={{fontWeight: 'bold'}}>produktus</Text>.
      </Text>
      <Text style={styles.textNormal}>
        {"\u2022"} Stipriname savo produktų <Text style={{fontWeight: 'bold'}}>saugumą</Text> ir <Text style={{fontWeight: 'bold'}}>vientisumą</Text>, <Text style={{fontWeight: 'bold'}}>kovojame</Text> su
        <Text style={{fontWeight: 'bold'}}>nederamu elgesiu</Text> ir <Text style={{fontWeight: 'bold'}}>saugome</Text> savo naudotojų bendruomenę.
      </Text>
      <Text style={styles.textNormal}>
        {"\u2022"} <Text style={{fontWeight: 'bold'}}>Teikiame nuoseklią</Text> ir vieningą <Text style={{fontWeight: 'bold'}}>patirtį</Text> naudojantis kitais
        „Meta“ įmonių produktais, net kai tai nesusiję su tarp mūsų sudaryta
        sutartimi.
      </Text>
 

      <View style={styles.container2}> 
        <View style={styles.textContainer}>
          <Text style={styles.textNormal}>
            {"\u2022"} <Text style={{fontWeight: 'bold'}}>Prieigos</Text> prie mūsų produktų <Text style={{fontWeight: 'bold'}}>užtikrinimas</Text>.
          </Text>
          <Text style={styles.textNormal}>
            {"\u2022"} <Text style={{fontWeight: 'bold'}}>Bendravimas</Text> su jumis.
          </Text>
        </View>
        <Image
          source={require("@/assets/images/paslaugosIl.svg")}
          style={styles.card}
          contentFit="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 25,
    paddingBottom: 20,
    paddingTop: 8,
  },
  textBold: {
    fontSize: 18,
    fontWeight: "bold",
    flexShrink: 1,
    flexWrap: "wrap",
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute space between items
    alignItems: 'flex-start',            // Align items vertically centered
  },
  textContainer: {
    flexShrink: 1,                   // Allow text container to shrink if needed
  },
  textNormal: {
    fontSize: 16,
    flexShrink: 1,
    flexWrap: "wrap",
    paddingBottom: 10,
  },
  card: {
    width: 177,
    height: 159,
  },
});
