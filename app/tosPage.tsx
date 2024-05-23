import React, { Component } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Button, Colors } from "react-native-ui-lib";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { Image } from "expo-image";
import { Content1 } from "@/components/Content1";
import { Content5 } from "@/components/Content5";
import { Content3 } from "@/components/Content3";
import { Content4 } from "@/components/Content4";
import { Content2 } from "@/components/Content2";


Colors.loadColors({
  iconColor: "#202D36",
});


export default class tryPage extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: true,
  };

  setSections = (sections: any[]) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section: any[], _, isActive: boolean) => {
    return (
      <Animatable.View
        duration={200}
        style={[
          styles.header,
          isActive ? styles.active : styles.inactive,
          {
            flexDirection: "row",
            paddingRight: 10,
            justifyContent: "space-between",
            alignItems: "center", 
            shadowColor: isActive ? "black" : "transparent",
            shadowOffset: { width: 0, height: isActive ? 2 : 0 },
            shadowOpacity: isActive ? 0.25 : 0,
            shadowRadius: isActive ? 3.84 : 0,
            elevation: isActive ? 10 : 0,
            marginBottom: isActive ? 10 : 0,
          },
        ]}
        transition="backgroundColor"
      >

        {section.icon}
        <Text
          style={[
            styles.headerText,
            { flex: 1, textAlign: "left", paddingLeft: 10 },
          ]}
        >
          {section.title}
        </Text>
        <Icon
          name={isActive ? "chevron-up" : "chevron-down"}
          size={25}
          color="#7D7D7D"
          style={{ paddingRight: 15, paddingLeft: 10 }}
        />
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive: boolean) {
    return (
      <View
        style={[styles.content, isActive ? styles.active : styles.inactive]}
      >
        {typeof section.content === "string" ? (
          <Text>{section.content}</Text>
        ) : (
          section.content
        )}
      </View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <View paddingH-16>
          <Text style={styles.textBold}>
            Sutikite su ,,Facebook” sąlygomis ir politika
          </Text>

          <View>
            <Image
              style={styles.unionIcon}
              source={require("@/assets/images/Union.svg")}
            />
            <Text style={styles.whiteText}>Paslaugų teikimo sąlygos</Text>
            <View
              style={{
                borderTopWidth: 2,
                borderTopColor: "#0062DD",
                marginBottom: 12,
              }}
            ></View>
          </View>
        </View>

        <ScrollView contentContainerStyle={{ paddingTop: 6 }}>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>
        <View  bottom padding-10 paddingH-20>
          <Button style={styles.buttonText} label="Sutinku" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "white",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 0,
    backgroundColor: "#fff",
  },
  active: {
    backgroundColor: "white",
  },
  inactive: {
    backgroundColor: "white",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "200",
    lineHeight: 30,
    marginBottom: 18,
    color: "white",
    backgroundColor: "#0062DD",
    
  },
  textBold: {
    fontSize: 26,
    fontWeight: "bold",
    flexShrink: 1,
    flexWrap: "wrap",
    marginBottom: 18,
  },
  unionIcon: {
    width: 212,
    height: 32,
  },
  whiteText: {
    left: 8,
    top: 11,
    letterSpacing: 0.2,
    fontSize: 16,
    position: "absolute",
    color: "#fff",
    textAlign: "left",
    fontWeight: "700",
  },
  icon: {
    paddingLeft: 10,
  },
});


const CONTENT = [
  {
    title: "Mūsų teikiamos paslaugos",
    icon: <MaterialComIcons name="hand-heart" size={35} color="iconColor" style={styles.icon}/>,
    content: <Content1 />,
  },
  {
    title: "Kaip finansuojamos mūsų paslaugos",
    icon: <Fontisto name="euro" size={30} color="iconColor" style={{paddingLeft: 13, paddingRight: 10}}/>,
    content: <Content2 />,
  },
  {
    title: "Jūsų įsipareigojimai „Facebook“ ir mūsų bendruomenei",
    icon: <MaterialComIcons name="account-alert" size={35} color="iconColor" style={styles.icon}/>,
    content: <Content3 />,
  },
  {
    title: "Papildomos nuostatos",
    icon: <MaterialComIcons name="file-plus-outline" size={35} color="iconColor" style={styles.icon}/>,
    content: <Content4 />,
  },
  {
    title: "Kitos sąlygos ir politikos nuostatos, kurios gali būti jums taikomos",
    icon: <MaterialComIcons name="file-document-outline" size={35} color="iconColor" style={styles.icon}/>,
    content: <Content5 />,
  },
];