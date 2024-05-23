import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Content31 } from './Content31';
import { Content32 } from './Content32';
import { Content33 } from './Content33';
import { Content34 } from './Content34';


const CONTENT = [
  {
    title: 'Kas gali naudotis ,,Facebook”',
    content: <Content31/>,
  },
  {
    title: 'Ko negalima daryti „Meta“ produktuose',
    content: <Content32/>,
  },
  {
    title: 'Leidimai, kuriuos mums suteikiate',
    content: <Content33/>,
  },
  {
    title: 'Apribojimai mūsų intelektinei nuosavybei',
    content: <Content34/>,
  },
];

export class Content3 extends Component {
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
          <>
          <Animatable.View
            duration={200 }
            style={[styles.header, isActive ? styles.active : styles.inactive, { flexDirection: 'row', justifyContent: 'space-between' }]}
            transition="backgroundColor"
          >
    
            <Text style={[styles.headerText, { flex: 1, textAlign: 'left', paddingLeft: 30 }]}>{section.title}</Text>
            <Icon name={ isActive ? 'chevron-up' : 'chevron-down' }
                  size={25} color="#bbb" style={{paddingRight: 15, paddingLeft: 10  }} />
            
          </Animatable.View>
          <View style={{ borderTopWidth: 1, borderTopColor: '#7D7D7D'}}></View>
          </>
        );
      };
    
      renderContent(section, _, isActive: boolean) {
        return (
          <View style={[styles.content, isActive ? styles.active : styles.inactive]}>
            {typeof section.content === 'string' 
              ? <Text>{section.content}</Text> 
              : section.content
            }
          </View>
        );
      }
    
      render() {
        const { multipleSelect, activeSections } = this.state;
    
        return (
          <View style={styles.container}>

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

          </View>
        );
      }
}

const styles = StyleSheet.create({
  textBold: {
    fontSize: 18, 
    fontWeight: 'bold',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  textNormal: {
    fontSize: 16,
    flexShrink: 1, 
    flexWrap: 'wrap',
    paddingBottom: 8,
  },
  container: {
    backgroundColor: '#F5FCFF',
    paddingLeft: 0, // Ensure there's no padding on the left
    paddingRight: 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'white',
  },
  inactive: {
    backgroundColor: 'white',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});
