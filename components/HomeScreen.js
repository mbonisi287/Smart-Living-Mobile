// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { Card, Button, Icon } from '@rneui/themed';
//import { Icon } from '@rneui/base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {   responsiveHeight,   
  responsiveWidth,  
  responsiveFontSize, 
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

//const navigation = useNavigation();

function RentalsStack(){
  return(
    <Stack.Navigator
      initialRouteName="Rentals"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
    <Stack.Screen
      name="Rentals"
      component={RentalsScreen}
      options={{ title: 'Setting Page' }}
    />

  </Stack.Navigator>

  );
}

const HomeImage = {
  uri: 'https://flymango.mdotcreatives.co.za/wp-content/uploads/2023/06/black-businessman-happy-expression-scaled.jpg',
  width: 400, 
  height: 150,
  resizeMode: 'cover',
};


const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
              <View style={ styles.container }>
        
          <Image 
          //style={styles.imageCard}   
          source={HomeImage}     />
        
        <TouchableOpacity onPress={() => navigation.navigate('Rentals')  }>
          <View  style={styles.squareCard}>
            <MaterialCommunityIcons name="home-group-minus"  style={styles.iconStyles} size={40}/>            
          </View>
          <Text style={styles.squareText}> Rentals </Text>
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => navigation.navigate('AllocatedUnits') }>
          <View style={styles.squareCard}>
            <MaterialCommunityIcons name="human-queue" style={styles.iconStyles} size={40}/>            
          </View>
          <Text  style={styles.squareText}> Allocated Units </Text>
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => navigation.navigate('Visitors') }>
          <View style={styles.squareCard}>
            <MaterialCommunityIcons name="human-queue" style={styles.iconStyles} size={40}/>            
          </View>
          <Text  style={styles.squareText}> Visitors </Text>
        </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('Meter') }>
            <View style={styles.squareCard}>
              <MaterialCommunityIcons  name="speedometer" style={styles.iconStyles} size={40}/>              
            </View> 
            <Text style={styles.squareText}> Meter Usage </Text>   
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('Maintainance')   }>
            <View style={styles.squareCard} >
              <MaterialCommunityIcons  name="tools" style={styles.iconStyles} size={40}/>              
            </View>
            <Text style={styles.squareText}> Maintainance </Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('Documents') }>
            <View style={styles.squareCard}>
              <MaterialCommunityIcons name="paperclip" style={styles.iconStyles} size={40} />              
            </View> 
            <Text style={styles.squareText}> Documents </Text>       
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('ClubHouse') }>
            <View style={styles.squareCard}>
              <MaterialCommunityIcons name="cards-playing-club-multiple-outline" style={styles.iconStyles} size={40}/> 
            </View>
            <Text style={styles.squareText}> Club House </Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('Complaints')}>
            <View style={styles.squareCard}>
              <MaterialCommunityIcons name="tray-alert" style={styles.iconStyles} size={40} />              
            </View>
            <Text style={styles.squareText}> Complaints  </Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => navigation.navigate('Applications')}>
            <View style={styles.squareCard}>
              <MaterialCommunityIcons name="newspaper-variant-multiple-outline" style={styles.iconStyles} size={40}/>              
            </View>
            <Text style={styles.squareText}> Applications </Text>
          </TouchableOpacity> 
          
          <TouchableOpacity onPress={() => navigation.navigate('Rules')    }>
            <View style={styles.squareCard}>
              <MaterialCommunityIcons name="newspaper" style={styles.iconStyles} size={40} />             
            </View> 
            <Text style={styles.squareText}> Rules & Regs </Text>
          </TouchableOpacity>                       
 
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  container: {
    flex: 1, 
    backgroundColor: '#ffffff',
    flexDirection: "row",
    flexWrap: "wrap",
    //paddingTop: 1,
    paddingBottom: 20,
    //padding: 16,      
    alignContent: "flex-start", 
    //justifyContent: "center", 

  }, 
  squareCard: {
    //flexDirection: 'row',
    //flexWrap: 'wrap',
    //flex: 4,
    backgroundColor: '#00802b',
    width: 100, 
    height: 100, 
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    //margin: 10,
    borderRadius : 10 ,
    borderWidth: 1,
  },

  squareText: {
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(2.5),
  },
  imageCard:{
    //aspectRatio: 1,
    //resizeMode: 'stretch', 
    width: 500, 
    height: 150,
    resizeMode: 'cover',
    //borderBottomLeftRadius: 20,
   // borderBottomRightRadius: 20,
    //width: 500, 
    //height: 200, 
    flex: 1,
  }, 
  iconStyles:{
    color: '#000',
    padding: 30,
    size: 40,
    iconSize: {
      width: responsiveWidth(2),
      height: responsiveHeight(2),
    },
    size: 200,

  },
  
  iconSize:{
    width: responsiveWidth(2),
    height: responsiveHeight(2),
  }
});
export default HomeScreen;
