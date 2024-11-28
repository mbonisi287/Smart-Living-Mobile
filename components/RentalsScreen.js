// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView,  StyleSheet } from 'react-native';
//import { ListItem, Card } from '@rneui/themed';

import axios from 'axios';
import { Button } from 'react-native-elements';

const RentalsScreen = () => {

  /*const url = "https://dummyjson.com/products/2";
  const [loading, setLoading ] = useState([]);
  const [ data, setData ] = useState(true);
  const url = "https:jsonplaceholder.typicode.com/comments";
  

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
}, []); */

  //const productsArray = JSON.parse(setData);
  const[date, setDate ] = useState(null);

    useEffect(() => {
      let today = new Date();
      let date = 28+'-'+(today.getMonth()+1)+'-'+today.getFullYear()+'';
      let previousDate = 1 +'-'+(today.getMonth()-1)+'-'+today.getFullYear()+''
      setDate(date);

    }, []);
    const [ price, setPrice ] = useState("");

      const baseUrl = "https://dummyjson.com/products/2";

      axios({
        method: 'get',
        url: `${baseUrl}`, 
      }).then((response) =>{
        console.log(response.data);
      });

      axios.get(`${baseUrl}`).then((response) => {
        setPrice(response.data.price);
        console.log(response.data.products.price);

      });
  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>

      <View style={styles.previousRent}>

        <Text style={{fontSize: 25, color: '#fff'}}> Rent Collected for this month </Text>


              
          <View style={{width: '60%'}}>
            <Text style={{fontSize: 20, color: '#fff'}} > Recieved Amount </Text>
          </View>
          <View style={{width: '40%'}}>
            <Text style={{fontSize: 20, color: '#fff'}} > R 92 000 </Text>            
          </View>

          <View style={{width: '60%'}}>
            <Text style={{fontSize: 20, color: '#fff'}} > Outstanding Amount  </Text>
          </View>
          <View style={{width: '40%'}}>
            <Text style={{fontSize: 20, color: '#fff'}} > R 18 000 </Text>            
          </View>


          <Button title="See More " type="solid" />


        </View> 

        <View style={styles.previousRent}>

          <Text style={{fontSize: 25, color: '#fff'}}> Total Rentals Recieved In 12 months </Text>


                
            <View style={{width: '60%'}}>
              <Text style={{fontSize: 20, color: '#fff'}} > April 2024 </Text>
            </View>
            <View style={{width: '40%'}}>
              <Text style={{fontSize: 20, color: '#fff'}} > R 92 000 </Text>            
            </View>

            <View style={{width: '60%'}}>
              <Text style={{fontSize: 20, color: '#fff'}} > March 2024 </Text>
            </View>
            <View style={{width: '40%'}}>
              <Text style={{fontSize: 20, color: '#fff'}} > R 18 000 </Text>            
            </View>

            <View style={{width: '60%'}}>
              <Text style={{fontSize: 20, color: '#fff'}} > February 2024 </Text>
            </View>
            <View style={{width: '40%'}}>
              <Text style={{fontSize: 20, color: '#fff'}} > R 18 000 </Text>            
            </View>


            <Button title="See More " type="solid" />


        </View> 


        <View style={styles.rentView}> 
            <Text style={{fontSize: 20}}> The Rent due on {date} is: </Text>
            <Text style={styles.rentPrice}> R {price}</Text>  
                  
            <Button title="Pay Now" type="solid" /> 
        </View>

        

        <View style={styles.previousRent}>

        <Text style={{fontSize: 20, color: '#fff'}}> Previous Rentals Paid</Text>


              
          <View style={{width: '60%'}}>
            <Text style={{fontSize: 20, color: '#fff'}} > April 2024 </Text>
            <Text style={{fontSize: 20, color: '#fff'}} > Paid on: {date}</Text>
          </View>
          <View style={{width: '40%'}}>
            <Button style={{marginBottom: 10}} title="View" type="solid" />
            <Button title="Download" type="solid" />
          </View>


        </View> 

      </ScrollView>
    </SafeAreaView>
  );
};
export default RentalsScreen;

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    fontWeight: "bold", 
  }, 
  rentPrice:{
    fontSize: 25, 
    fontWeight: "bold",
  },
  rentView:{
    padding: 10,
    borderRadius : 20,
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
  },
  previousRent: {
    padding: 10,
    borderRadius : 20,
    backgroundColor: '#00802b',
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,

    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 20,
    //padding: 16,      
    alignContent: "flex-start",

  }

});



