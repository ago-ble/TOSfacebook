import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Image } from 'expo-image';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from'react-native-vector-icons/MaterialIcons';

export function Content43 () {
    return (
      <View style={styles.container}>
        <View>
          <View  style={styles.row}> 
            <MaterialComIcons name='account' size={40} color='#bbb' style={{paddingRight: 15, paddingLeft: 10, color: '#040607'}}/>
            <Text style={styles.textBold}>
              Asmeniniai
            </Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.textNormal}>Jei ginčas kyla dėl ar yra susijęs su jūsų, kaip vartotojo, naudojimusi 
            „Meta“ produktais, tiek jūs, tiek mes sutinkame, kad <Text style={{fontWeight: 'bold'}}>jūs galite spręsti savo individualų ginčą su mumis</Text>, 
            ir mes galime spręsti savo ginčą su jumis <Text style={{fontWeight: 'bold'}}>jūsų</Text> gyvenamosios vietos <Text style={{fontWeight: 'bold'}}>šalies teisme</Text>, ir bus taikomi tos 
            šalies teisės aktai, išskyrus kolizines teisės normas.
            </Text>
          </View>  
        </View>

        


        <View>
          <View  style={styles.row}> 
            <MaterialIcons name='business-center' size={40} color='#bbb' style={{paddingRight: 15, paddingLeft: 10, color: '#040607'}}/>
            <Text style={styles.textBold}>
              Verslo
            </Text>
          </View>
          <View style={{flex:1, paddingRight:25, paddingTop:5}}>
            <Text style={{fontSize:16, flexWrap: 'wrap', paddingLeft:40}}>Jei kylantis ginčas yra susijęs su naudojimusi „Meta“ produktais bet 
              kokiu kitu būdu, įskaitant (bet neapsiribojant) 
            </Text>
          </View>

          <View row paddingR-10>          
            <Text style={{fontSize:16, flexWrap: 'wrap', paddingLeft:40, flexShrink:1}}>naudojimąsi „Meta“ Produktais <Text style={{fontWeight: 'bold'}}>verslo</Text> arba komerciniais <Text style={{fontWeight: 'bold'}}>tikslais</Text>, jūs sutinkate, kad tokį <Text style={{fontWeight: 'bold'}}>ginčą</Text> turi <Text style={{fontWeight: 'bold'}}>nagrinėti Airijos teismas</Text> ir tokiam ginčui bus taikomi 
            Airijos teisės aktai, išskyrus kolizines teisės normas. 
            </Text>
            <Image
                source={require('@/assets/images/C4/lawer.svg')}
                style={styles.card1}
                contentFit="contain"
              />
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
    paddingBottom: 5,
    paddingTop: 5,
  },
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
    paddingBottom: 10,
    paddingLeft: 40,
  },
  card1: {
    width: 141.3,
    height: 152.22,
    alignSelf: 'flex-end',
    paddingLeft: 5,
  },  
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 10,
    paddingLeft: 30,
  },
});