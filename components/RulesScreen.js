// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet, ScrollView } from 'react-native';

const RulesScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
    
        <View style={styles.ruleContainer} >
          <Text style={{fontSize: 20, color: '#fff'}} > Conduct Rulessss </Text>
          <Text style={styles.rulesText}> The rules contained in this schedule shall not be added to, amended or replaced except by special
                  resolution of the members of the Body Corporate in accordance with the STSMA and as approved by the Ombudsman.
          </Text>  
          <Button title="Read More" type="solid" />

        </View>

        <View style={styles.ruleContainer} >
          <Text style={{fontSize: 20, color: '#fff'}} > Conduct Rules </Text>  

        </View>

        <View style={styles.ruleContainer} >
          <Text style={{fontSize: 20, color: '#fff'}} > Conduct Rules </Text>  

        </View>

        <View style={styles.ruleContainer} >
          <Text style={{fontSize: 20, color: '#fff'}} > Conduct Rules </Text>  

        </View>

        <View style={styles.ruleContainer} >
          <Text style={{fontSize: 20, color: '#fff'}} > Conduct Rules </Text>  

        </View>
        </ScrollView>
      
    </SafeAreaView>
  );
};
export default RulesScreen;

const styles = StyleSheet.create({
  ruleContainer: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    backgroundColor: '#00802b', 
    margin: 5,
    borderRadius: 10,
    color: '#fff', 
    padding: 10,
  }, 
  rulesText: {
    color: '#fff',
    paddingBottom: 20, 
    paddingTop: 20,
  }
});
