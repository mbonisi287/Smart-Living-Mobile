import React, { useState } from 'react';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AsyncStorage} from '@react-native-async-storage/async-storage'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {   responsiveHeight,   
  responsiveWidth,  
  responsiveFontSize 
} from "react-native-responsive-dimensions";

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import RentalsScreen from './components/RentalsScreen';
import SettingsScreen from './components/SettingsScreen';
import NewsScreen from './components/NewsScreen';
import MeterScreen from './components/MeterScreen';
import VisitorsScreen from './components/VisitorsScreen';
import MaintainanceScreen from './components/MaintainanceScreen';
import ComplaintsScreen from './components/ComplaintsScreen';
import RulesScreen from './components/RulesScreen';
import DocumentsScreen from './components/DocumentsScreen';

import AllocatedUnitsScreen from './components/AllocatedUnitsScreen';
import ApplicationsScreen from './components/ApplicationsScreen';
import ClubHouseScreen from './components/ClubHouseScreen';

import LoginScreen from './components/LoginScreen';

//import Cookies from 'js-cookie';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack(){
  return(
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: { backgroundColor: '#42f44b' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' }, 
      
    }}>
      <Stack.Screen 
        name="Smart Living"
        component={HomeScreen}
        options={{ title: 'Home Page' }}
      />
      <Stack.Screen 
        name="Rentals"
        component={RentalsScreen}
        //options={{ title: 'Rentals Page' }}
      />
      <Stack.Screen 
        name="Visitors"
        component={VisitorsScreen}
        //options={{ title: 'Visitors Page' }}
      />
      <Stack.Screen 
        name="Maintainance"
        component={MaintainanceScreen}
        //options={{ title: 'Maintainance Page' }}
      />
      <Stack.Screen 
        name="Meter"
        component={MeterScreen}
        //options={{ title: 'Maintainance Page' }}
      />
      <Stack.Screen 
        name="Complaints"
        component={ComplaintsScreen}
        //options={{ title: 'Maintainance Page' }}
      />
      <Stack.Screen 
        name="Rules"
        component={RulesScreen}
        //options={{ title: 'Maintainance Page' }}
      />

      <Stack.Screen 
        name="Documents"
        component={DocumentsScreen}
        //options={{ title: 'Maintainance Page' }}
      />

      <Stack.Screen
        name="AllocatedUnits"
        component={AllocatedUnitsScreen}
      />

      <Stack.Screen 
        name="Applications" 
        component={ApplicationsScreen}/>

        <Stack.Screen 
        name="ClubHouse"
        component={ClubHouseScreen}/>

        <Stack.Screen 
          name="Login"
          component={LoginScreen}      
        />

    </Stack.Navigator>
  );
}

function NewsStack(){
  return(
    <Stack.Navigator
    initialRouteName="News"
    screenOptions={{
      headerStyle: {}, 
      headerTintColor: '#fff', 
      headerTitleStyle: {}, 
    }}>
      <Stack.Screen 
      name="News"
      component={NewsScreen}
      options={{ title: 'News' }}/>

    </Stack.Navigator>
  );
}

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

function SettingsStack(){
  return(
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ title: 'Setting Pages' }}
    />

    <Stack.Screen
      name="Profilee"
      component={ProfileScreen}
      //options={{ title: 'Profile Page' }}
    />

  </Stack.Navigator>

  );
}

function ProfileStack(){
  return(
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' }, 
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold'},
      }}>

        <Stack.Screen 
          name="Profile"
          component={ProfileScreen}/>
    </Stack.Navigator>
  );
}

function LoginStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
      name="Login"
      component={LoginScreen} />
    </Stack.Navigator>

  );
}

function App(){
  
  //const [isLoggedIn, setIsLoggedIn] = useState([]);

  //const handleLogin = () => { setIsLoggedIn(true);  };

  //const handleLogout = () => {     setIsLoggedIn(false);   };

  const getItem = async (key) => {
    try{
      const userCookie = await AsyncStorage.getItem(key);
      return userCookie != null ? JSON.parse(value) : null;
    }
    catch(error){
    }
  };

  //const navigation = useNavigation();

  return(      
    //getItem() != null ? this.props.navigation.navigate(LoginStack) :
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarStyle: { height: 65 },
          activeTintColor: '#42f44b',
          tabBarLabelStyle: { fontSize: 20 },
          tabBarIcon: ({color, size }) => (
            <MaterialCommunityIcons name='rowing' color={color} size={size} />
          ), 
        }}>
        <Tab.Screen
          name="Smart Living"
          //name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: { color: '#000', fontSize: 15, paddingBottom: 10}, 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="News Feed"
          component={NewsStack}
          options={{
            tabBarLabel: 'Notifications',
            tabBarLabelStyle: { color: '#000', fontSize: 15, paddingBottom: 10 },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="newspaper-check"
                color={color}
                size={30}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Rentals "
          component={RentalsStack}
          options={{
            tabBarLabel: 'Rentals',
            tabBarLabelStyle: { color: '#000', fontSize: 15, paddingBottom: 10 },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-cash"
                color={color}
                size={30}
              />
            ),
          }}
        />

        <Tab.Screen
            name="Profilee"
            component={ProfileStack}
            options={{
              //tabBarLabel: 'Settingss',
              tabBarLabelStyle: { color: '#000', fontSize: 15 , paddingBottom: 10},
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="cog-outline"
                  color={color}
                  size={30}
                />
              ),
            }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
