// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

//import * as React from 'react';
import React, { useState } from 'react';
import { View, Text, SafeAreaView,
   ScrollView, StyleSheet, 
   TouchableOpacity, Image, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {   responsiveHeight,   
  responsiveWidth,  
  responsiveFontSize, 
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';

import { Table, Row, Rows } from 'react-native-table-component';
//import { useState } from 'react';

const tableData = {
  tableHead: [ 'Profile Details' ],
  tableData: [
    ['Name', 'Mbonisi'],
    ['Email', 'mbonisitshuma287@gmail.com'],
    ['Phone', '0814088843']
  ], 
}; 


const HomeImage = {
    uri: 'https://flymango.mdotcreatives.co.za/wp-content/uploads/2023/06/black-businessman-happy-expression-scaled.jpg',
    width: 400, 
    height: 150,
    resizeMode: 'cover',
  };

const ProfileScreen = () => {

  const[data, setData] = useState( tableData );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

     
      <ScrollView>
        <View>
            <MaterialCommunityIcons name="human-queue" size={100}/> 
        </View>

       {/*<View style={styles.tableContainer}>
          <Table>
            <Row data={data.tableHead}/>
            <Rows data={data.tableData} textStyle={styles.text}/>
          </Table>
        </View>*/} 


        <View style={styles.tableContainer}>
            <DataTable>
                <DataTable.Header style={styles.head}>
                    <DataTable.Title style={styles.headText}> Personal Details </DataTable.Title>
                    <DataTable.Title> </DataTable.Title>
                </DataTable.Header>


                <DataTable.Row style={styles.row}>
                    <DataTable.Cell>Name</DataTable.Cell>
                    <DataTable.Cell>Mbonisi</DataTable.Cell>
                   
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell>Email</DataTable.Cell>
                    <DataTable.Cell>mbonisitshuma287@gmail.com</DataTable.Cell>
                    
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell> Phone </DataTable.Cell>
                    <DataTable.Cell> 081 408 8843 </DataTable.Cell>
                   
                </DataTable.Row>

                <DataTable.Row style={styles.row}>
                    <DataTable.Cell> Next of Kin </DataTable.Cell>
                    <DataTable.Cell> 081 408 8843 </DataTable.Cell>
                   
                </DataTable.Row>

                <DataTable.Row style={styles.row}>
                    <DataTable.Cell> Work Phone Number </DataTable.Cell>
                    <DataTable.Cell> 081 408 8843 </DataTable.Cell>
                   
                </DataTable.Row>

                <DataTable.Row>
                    <Button title="Edit Personal Details" type="solid" />
                </DataTable.Row>
            </DataTable>
        </View>

      </ScrollView> 
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5},
  tableContainer: { borderRadius : 20, padding: 5, backgroundColor : '#00802b', color: '#fff'},
  head: { margin: 2, fontSize: 20, textDecorationColor: '#fff', color:'#fff' ,  fontWeight: 'bold', textAlign: 'left'}, 
  headText: { margin: 2, fontSize: 20, textDecorationColor: '#fff', color:'#fff'  }, 
  text: { margin: 6, fontSize: 16, fontWeight: 'bold', textAlign: 'left',
    color: 'white'
  },

  row: { color: '#fff'}
})