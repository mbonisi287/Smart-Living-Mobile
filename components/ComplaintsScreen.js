// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';

const ComplaintsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Button 
            title="Invite Visitor"
            onPress={() => Alert.alert('Select from the contact List')}/>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default ComplaintsScreen;
