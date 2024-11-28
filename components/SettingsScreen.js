// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { View, 
  Text, 
  SafeAreaView,   
  TouchableOpacity,
  StyleSheet
  } from 'react-native';
//import { ListItem } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
          <TouchableOpacity
                  style={styles.square}
                  onPress={() => 
                    navigation.navigate('Rentals')
              }>
              <MaterialCommunityIcons
                name="home-group-minus"
                color="#000"
                size={60}
              />
              <Text
                style={styles.squareText}> Edit Profile  </Text>
          </TouchableOpacity>         
  

          <TouchableOpacity
              style={styles.square}
              onPress={() => 
              navigation.navigate('Visitors')
            }>
              <MaterialCommunityIcons
                name="newspaper-variant-multiple-outline"
                color="#000"
                size={60}
              />
              <Text
                style={styles.squareText}> Sign Out  </Text>
          </TouchableOpacity>
      </View>
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
    backgroundColor: '#90ee90',
    flexDirection: "row",
    flexWrap: "wrap",
    //padding: 16,      
    //alignItems: "center", 
    //justifyContent: "center", 

  }, 
  square: {
    //backgroundColor: '#fff',
    width: 110, 
    height: 100, 
    margin: 5,
    borderRadius: 20,
    borderWidth: 2,
  },
  squareText: {
    textAlign: 'center',
    fontSize: 18,
  },
});
export default SettingsScreen;
