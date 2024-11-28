
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button,   TouchableOpacity,
  StyleSheet,
  ScrollView, Image
 } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {   responsiveHeight,   
  responsiveWidth,  
  responsiveFontSize, 
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';

import { Table, Row, Rows } from 'react-native-table-component';



const tableData = {
  tableHead: [  'Block No' , 'Unit No:', 'Rent Price (R)' ],
  tableData: [
    [ 'Block 15' , '4012' , '8500'],
    [ 'Block 23' , '2012' , '8500'],
    [ 'Block 4', '0013' , '8500']
  ], 
}; 


const AllocatedUnitsScreen = () => {
  const[data, setData] = useState( tableData );
  return (
    <SafeAreaView>
      <ScrollView>

        <View style={styles.container}>

          <View><Text style={styles.unitHeading}> Allocated Units </Text></View>

          <View style={styles.tableContainer}>
              <Table>
                <Row data={data.tableHead} textStyle={styles.headText}/>
                <Rows data={data.tableData} textStyle={styles.text}/>
              </Table>
          </View>  

          <View><Text style={styles.unitHeading}> Un-Occupied Units </Text></View>

          <View style={styles.tableContainer}>
              <Table>
                <Row data={data.tableHead} textStyle={styles.headText}/>
                <Rows data={data.tableData} textStyle={styles.text}/>
              </Table>
          </View>




        </View>


      </ScrollView>
      
    </SafeAreaView>
  );
};

 export default AllocatedUnitsScreen; 

 const styles = StyleSheet.create({
  container: { flex: 1, padding: 5},
  tableContainer: { borderRadius : 20, padding: 20, backgroundColor : '#00802b', color: '#fff'},
  head: { margin: 2, fontSize: 20, textDecorationColor: '#fff', color: '#fff' ,  fontWeight: 'bold', textAlign: 'left'}, 
  headText: { margin: 2, fontSize: 20, textDecorationColor: 'white', color: 'white'  }, 
  text: { margin: 6, fontSize: 16, fontWeight: 'bold', textAlign: 'left',
    color: 'white'
  },

  row: { color: '#fff'}, 
  unitHeading: { marginTop: 10, marginBottom: 10, fontSize: 20, }

})