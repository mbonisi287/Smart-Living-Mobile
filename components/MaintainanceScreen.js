// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { useState } from 'react';
import { View, Text, 
  SafeAreaView, Button, 
  ScrollView, StyleSheet, 
  TextInput, Alert } from 'react-native';
//import { Button } from 'react-native-elements';

//import { ListItem, Card } from '@rneui/themed';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Modal from 'react-native-modal';
import { useForm, SubmitHandler } from "react-hook-form";

import HomeScreen from './HomeScreen';

const MaintainanceScreen = () => {
  const{ formState: {errors}}  = useForm();

  const [isModalVisible, setIsModalVisible ] = React.useState(false);
  const handleModal = () =>  setIsModalVisible(() => !isModalVisible) ; 

  const[title, setTitle] = useState("");
  const[userId, setUserId] = useState("");
  const[message, setMessage ] = useState("");

  //userId = 5;

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          userId: userId,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setTitle("");
        setUserId("");
        setMessage("Maintainance created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  openAlert=()=>{
    alert('Pop smoke');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>    
      <ScrollView> 
   
          

    

                  
          <Text> Log a Maintainance Call </Text>
          <View>
       

          <Button title="Report a fault"  
            onPress={handleModal} type="solid"
            />

            <Modal 
            isVisible={isModalVisible}
            animationOutTiming={1000}
            animationOut={'slideOutUp'} >
              <View style={styles.modalWindow}>
             
              <Text> Log a Maintainance Call </Text>
         
                <Button title="Back" onPress={handleModal}/>
              </View>

            </Modal>
           </View>

           <Text> Previous Maintainance Jobs </Text>
 


        

      </ScrollView>
    </SafeAreaView>
  
  );
};
export default MaintainanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalWindow: {
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft:5, 
    paddingRight: 5,
  },
  modalHeading: {
    fontSize: 20,
  },
textInput: {
  borderWidth: 2,
  borderRadius: 5,
  padding: 5,
}, 
});
