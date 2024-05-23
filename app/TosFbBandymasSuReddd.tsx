import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Image } from 'expo-image';


const TosFbBandymasSuReddd = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.tosFbBandymasSuReddd}>
      <View style={styles.sysBarParent}>
        <View style={[styles.sysBar, styles.barLayout]} />
        <Text style={styles.sutikiteSuFacebook}>
          Sutikite su „Facebook“ sąlygomis ir politika
        </Text>
        <View style={styles.frameChild} />








        <View style={[styles.tosTab, styles.tabPosition]}>
          <Image
            style={styles.unionIcon}
            source={require('@/assets/images/Union.svg')}
          />
          <Text style={[styles.paslaugTeikimoSlygos, styles.sutinkuTypo]}>
            Paslaugų teikimo sąlygos
          </Text>
        </View>









        <View style={[styles.ppTab, styles.ppTabLayout]}>
          <Image
            style={styles.ppTabLayout}
            source={require('@/assets/images/Union.svg')}
          />
          <Text style={styles.privatumoPolitika}>Privatumo politika</Text>
        </View>
      </View>
      <View style={styles.musuPaslaugosParent}>
        <View style={styles.finansaiLayout}>
          <View style={[styles.image8Parent, styles.bottomNavLayout]}>
            <Image
              style={[styles.image8Icon, styles.iconLayout1]}
              resizeMode="cover"
              source="image 8.png"
            />
            <Text
              style={[
                styles.msTeikiamosPaslaugos,
                styles.kaipFinansuojamosMsTypo,
              ]}
            >
              Mūsų teikiamos paslaugos
            </Text>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source="Vector.png"
            />
          </View>
        </View>
        <View style={[styles.finansai, styles.finansaiLayout]}>
          <View style={[styles.image9Parent, styles.barLayout]}>
            <Image
              style={[styles.image9Icon, styles.iconLayout1]}
              resizeMode="cover"
              source="image 9.png"
            />
            <Text
              style={[
                styles.kaipFinansuojamosMs,
                styles.kaipFinansuojamosMsTypo,
              ]}
            >
              Kaip finansuojamos mūsų paslaugos
            </Text>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source="Vector.png"
            />
          </View>
        </View>
        <View style={styles.jusuIsipareigojimaiGeras} />
        <View style={styles.try2}>
          <View style={styles.jusuIsipareigojimasLinija}>
            <Image
              style={styles.image10Icon}
              resizeMode="cover"
              source="image 10.png"
            />
            <Text
              style={[
                styles.jsSipareigojimaiFacebook,
                styles.kitosSlygosIrTypo,
              ]}
            >
              Jūsų įsipareigojimai „Facebook“ ir mūsų bendruomenei
            </Text>
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout]}
              resizeMode="cover"
              source="Vector.png"
            />
          </View>
        </View>
        <View style={styles.papildomosNuostatosSuDropdo}>
          <View style={[styles.papildomosNuostatosBar, styles.barLayout]}>
            <Image
              style={[styles.image9Icon, styles.iconLayout1]}
              resizeMode="cover"
              source="image 13.png"
            />
            <Text
              style={[
                styles.papildomosNuostatos,
                styles.kaipFinansuojamosMsTypo,
              ]}
            >
              Papildomos nuostatos
            </Text>
            <Image
              style={[styles.vectorIcon3, styles.vectorIconLayout]}
              resizeMode="cover"
              source="Vector.png"
            />
          </View>
          <View style={[styles.image11Parent, styles.image15IconLayout]}>
            <Image
              style={[styles.image11Icon, styles.iconLayout]}
              resizeMode="cover"
              source="image 11.png"
            />
            <Image
              style={[styles.image14Icon, styles.iconLayout]}
              resizeMode="cover"
              source="image 14.png"
            />
            <Image
              style={[styles.image15Icon, styles.image15IconLayout]}
              resizeMode="cover"
              source="image 15.png"
            />
          </View>
        </View>
        <View style={styles.kitosSalygosWrapper}>
          <View style={styles.kitosSalygos}>
            <Image
              style={styles.image12Icon}
              resizeMode="cover"
              source="image 12.png"
            />
            <Text style={[styles.kitosSlygosIr, styles.kitosSlygosIrTypo]}>
              Kitos sąlygos ir politikos nuostatos, kurios gali būti jums
              taikomos
            </Text>
            <Image
              style={[styles.vectorIcon4, styles.vectorIconLayout]}
              resizeMode="cover"
              source="Vector.png"
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomNavParent}>
        <View style={[styles.bottomNav, styles.bottomNavFlexBox]} />
        <View style={[styles.simpleNextButton, styles.bottomNavFlexBox]}>
          <Text style={styles.sutinkuTypo}>Sutinku</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barLayout: {
    height: 50,
    top: 0,
    position: "absolute",
    width: 430,
  },
  tabPosition: {
    top: 180,
    position: "absolute",
  },
  sutinkuTypo: {
    color: "#fff",
    letterSpacing: 0.2,
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
  },
  ppTabLayout: {
    width: 100,
    height: 32,
  },
  bottomNavLayout: {
    marginLeft: -215,
    height: 50,
    width: 430,
  },
  iconLayout1: {
    width: 50,
    height: 50,
    top: 0,
    position: "absolute",
  },
  kaipFinansuojamosMsTypo: {
    lineHeight: 20,
    letterSpacing: 0.3,
    color: "#000",
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 16,
    width: 27,
    position: "absolute",
  },
  finansaiLayout: {
    height: 62,
    width: 430,
  },
  kitosSlygosIrTypo: {
    left: 91,
    lineHeight: 20,
    letterSpacing: 0.3,
    color: "#000",
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    position: "absolute",
  },
  image15IconLayout: {
    height: 35,
    position: "absolute",
  },
  iconLayout: {
    width: 35,
    height: 35,
    top: 0,
    position: "absolute",
  },
  bottomNavFlexBox: {
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    alignItems: "center",
  },
  sysBar: {
    justifyContent: "space-between",
    display: "none",
    left: 0,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    top: 51,
    width: 24,
    height: 24,
    left: 26,
    position: "absolute",
  },
  sutikiteSuFacebook: {
    marginTop: -15.5,
    marginLeft: -189,
    top: "50%",
    fontSize: 26,
    letterSpacing: -0.5,
    color: "#202d36",
    width: 366,
    height: 70,
    textAlign: "left",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    marginLeft: -206,
    top: 212,
    borderStyle: "solid",
    borderColor: "#0062dd",
    borderTopWidth: 2,
    width: 412,
    height: 2,
    left: "50%",
    position: "absolute",
  },
  unionIcon: {
    width: 212,
    height: 32,
  },
  paslaugTeikimoSlygos: {
    left: 8,
    top: 11,
    letterSpacing: 0.2,
    fontSize: 16,
    position: "absolute",
  },
  tosTab: {
    width: 189,
    height: 32,
    left: 26,
  },
  privatumoPolitika: {
    left: 31,
    fontSize: 14,
    letterSpacing: 0.1,
    color: "#000",
    top: 1000001,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    position: "absolute",
  },
  ppTab: {
    left: 223,
    top: 180,
    position: "absolute",
    display: "none",
  },
  sysBarParent: {
    height: 213,
    zIndex: 0,
    width: 430,
  },
  image8Icon: {
    left: 27,
  },
  msTeikiamosPaslaugos: {
    left: 90,
    width: 275,
    top: 15,
    letterSpacing: 0.3,
  },
  vectorIcon: {
    left: 376,
    height: 16,
    width: 27,
    top: 17,
  },
  image8Parent: {
    left: "50%",
    top: 0,
    position: "absolute",
  },
  image9Icon: {
    left: 26,
  },
  kaipFinansuojamosMs: {
    left: 89,
    top: 15,
    letterSpacing: 0.3,
  },
  image9Parent: {
    left: 0,
  },
  finansai: {
    marginTop: 10,
  },
  jusuIsipareigojimaiGeras: {
    height: 52,
    marginTop: 10,
    display: "none",
    width: 430,
  },
  image10Icon: {
    left: 28,
    width: 48,
    height: 52,
    top: 0,
    position: "absolute",
  },
  jsSipareigojimaiFacebook: {
    top: 6,
    width: 264,
  },
  vectorIcon2: {
    top: 18,
    left: 376,
    height: 16,
    width: 27,
  },
  jusuIsipareigojimasLinija: {
    height: 52,
    width: 430,
  },
  try2: {
    marginTop: 10,
  },
  papildomosNuostatos: {
    top: 13,
    left: 92,
  },
  vectorIcon3: {
    left: 377,
    top: 17,
  },
  papildomosNuostatosBar: {
    left: -1,
  },
  image11Icon: {
    left: 101,
  },
  image14Icon: {
    left: 0,
  },
  image15Icon: {
    left: 51,
    width: 34,
    top: 0,
  },
  image11Parent: {
    marginLeft: -68,
    top: 41,
    width: 136,
    left: "50%",
  },
  papildomosNuostatosSuDropdo: {
    height: 81,
    marginTop: 10,
    width: 430,
  },
  image12Icon: {
    left: 33,
    width: 45,
    height: 45,
    top: 0,
    position: "absolute",
  },
  kitosSlygosIr: {
    top: 3,
    width: 273,
  },
  vectorIcon4: {
    top: 14,
    left: 376,
    height: 16,
    width: 27,
  },
  kitosSalygos: {
    height: 45,
    width: 430,
  },
  kitosSalygosWrapper: {
    paddingBottom: 36,
    marginTop: 10,
    alignItems: "center",
  },
  musuPaslaugosParent: {
    width: 428,
    height: 588,
    paddingHorizontal: 0,
    paddingVertical: 6,
    zIndex: 1,
    marginTop: 12,
    alignItems: "center",
  },
  bottomNav: {
    top: 59,
    marginLeft: -215,
    height: 50,
    width: 430,
    display: "none",
    backgroundColor: "#fff",
  },
  simpleNextButton: {
    marginLeft: -186,
    borderRadius: 27,
    backgroundColor: "#0062dd",
    width: 376,
    height: 46,
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 10,
    top: 0,
    overflow: "hidden",
  },
  bottomNavParent: {
    top: 823,
    height: 109,
    zIndex: 2,
    left: 0,
    position: "absolute",
    width: 430,
  },
  tosFbBandymasSuReddd: {
    flex: 1,
    height: 932,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default TosFbBandymasSuReddd;
