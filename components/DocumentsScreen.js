// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { View, Text, SafeAreaView, Button, ScrollView, StyleSheet } from 'react-native';
//import { ListItem, Card } from '@rneui/themed';

import axios from 'axios';
//import { Button } from 'react-native-elements';

const DocumentsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex:1, padding: 16 }}>
            <Text> Documents you constantly need </Text>
          
            <Text style={styles.title}> Proof Of Residence </Text>
            <Button 
                  title="Download"
                  type="solid" /> 
         
            <Text style={styles.title}> Lease Agreement </Text>
            <Button 
                  title="Download"
                  type="solid" /> 
         
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};
export default DocumentsScreen;

const styles = StyleSheet.create({
    title:{
      fontSize: 20,
      fontWeight: "bold", 
    }, 
    rentPrice:{
      fontSize: 25, 
      fontWeight: "bold",
    }
  
  });
  
