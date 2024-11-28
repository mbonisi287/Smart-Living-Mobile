// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
//import { ListItem } from '@rneui/themed';

const NewsScreen = () => {

  const [loading, setLoading ] = useState([]);
  const [ data, setData ] = useState(true);
  const url = "https:jsonplaceholder.typicode.com/comments";

  useEffect(() => {
      fetch(url)
        .then((resp) => resp.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={{ flex: 1, padding: 16 }}>
        {loading ? (
          <Text> Loading.....</Text>
        ) : (
          data.map((post) => {
            return (
              <View>
                <Text style={styles.title}> { post.name }</Text>
                <Text> { post.body } </Text>
              </View>
            )
          })
        )}
      </View>

      </ScrollView>

    </SafeAreaView>
  );
};
export default NewsScreen;

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    fontWeight: "bold", 
  }
});
