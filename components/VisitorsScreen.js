// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { View, Text, SafeAreaView, Button,   TouchableOpacity,
  StyleSheet,
  ScrollView, Image
 } from 'react-native';

 //import { Button } from 'react-native-elements';

const VisitorsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.visitorAccess}>

          <Text style={{fontSize: 20, color: '#fff'}}> Visitor Access </Text>  
            <View style={{width: '40%'}}>
              <Button title="Generate Access Code" type="solid" />
            </View>
        </View> 

        <View style={styles.previousAccess}>
            <Text style={{fontSize: 20, color: '#fff'}}> Previous Access Granted </Text> 

            <View style={{width: '100%'}}> 
              <Text>
                Josh Mathews
              </Text>

            </View>
            <View style={{width: '100%'}}>  
              <Text> Code : 97095 </Text>
              <Text> Expires: 23:59 on 00-00-2024 </Text>
            </View>
            <View style={{width: '100%'}}> 
              <Button title="Send Code Via WhatsApp" type="solid" /> 
            </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};
export default VisitorsScreen;

const styles = StyleSheet.create({
  visitorAccess:{
    padding: 10,
    borderRadius : 20,
    backgroundColor: '#00802b',
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
  }, 
  previousAccess:{
    padding: 10,
    borderRadius : 20,
    backgroundColor: '#00802b',
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
  }
});