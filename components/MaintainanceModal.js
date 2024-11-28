 import React, { useState } from 'react';
 import {Button, View, Stylesheet } from 'react-native';
 
 import Modal from 'react-native-modal';
 import MaintainanceScreen from './MaintainanceScreen';
 
 const MaintainanceModal = () => {
    const [isModalVisible, setIsModalVisible ] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(isModalVisible);
    }; 

    return(
        <View>
            <Text> uhyfghjufvkljjghb;kjh </Text>
        </View>
    );
 };
 const styles = StyleSheet.create({

 });
export default MaintainanceModal;