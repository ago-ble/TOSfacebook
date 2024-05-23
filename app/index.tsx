//import { Text, View, Button,  StyleSheet  } from "react-native";
import { StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  TextField,
  Text,
  Button,
  Typography,
  Colors,
} from "react-native-ui-lib";
import React, { Component } from "react";
import { Image } from "expo-image";

Colors.loadColors({
  fbBlue: "#0062DD",
  gold: "#FFD700",
});

Typography.loadTypographies({
  h1: { fontSize: 26, fontWeight: "300", lineHeight: 80 },
  h2: { fontSize: 46, fontWeight: "300", lineHeight: 64 },

  h5: { fontSize: 16, fontWeight: "100", lineHeight: 30 },
  h51: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 30,
    color: "#55656E",
    bold: true,
  },
});

export default function Index() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View flex paddingH-25 paddingT-120 backgroundColor="white">
      <View center>
        <Image
          source={require("@/assets/images/index/fb-logo.svg")}
          style={styles.fbLogo}
          contentFit="contain"
        />
      </View>

      <View marginT-150 bottom>
        <TextField
          h51
          style={styles.roundInput}
          placeholder="Mobiliojo telefono numeris arba el. pašto..."
        />
        <TextField
          h51
          style={styles.roundInput}
          placeholder="Slaptažodis"
          secureTextEntry
        />

        <Button
          h5
          white
          background-fbBlue
          label="Prisijungti"
          onPress={() => {
            router.navigate({ pathname: "TosFbBandymasSuReddd" });
          }}
        />
      </View>

      <View center paddingT-8>
        <Text h51>Pamiršote slaptažodį?</Text>
      </View>

      <View flex bottom paddingB-10>
        <Button
          h5
          outlline
          outlineColor="#0062DD"
          backgroundColor="white"
          label="Sukurti naują paskyrą"
          labelStyle={{ fontWeight: "bold", color: "#0062DD" }}
          onPress={() => {
            router.navigate({ pathname: "introPage" });
          }}
        />
      </View>
      <View center paddingB-10>
        <Image
          source={require("@/assets/images/index/meta.svg")}
          style={styles.metaLogo}
          contentFit="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "white",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    width: 320,
    height: 50,
    padding: 10,
    fontSize: 24,
    backgroundColor: "blue",
    borderRadius: 25,
  },
  roundInput: {
    borderWidth: 1,
    borderColor: "#BDC9CE",
    marginBottom: 18,
    padding: 18,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 14,
  },
  metaLogo: {
    width: 60,
    height: 21,
    marginBottom: 20,
  },
  fbLogo: {
    width: 70,
    height: 70,
  },
});
