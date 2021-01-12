import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const currentUserData = await fetch('http://192.168.1.7:4000/api', {
        method: 'GET',
        mode: 'cors',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InAuc3RhbmVja2k5M0BnbWFpbC5jb20iLCJuYW1lIjoiUGF3ZWwifQ.AWmFVS-4OLc8GdlX0p1g0CRnA4iqYl_cg7vDXABWqgI',
        },
      });

      const currentUser = await currentUserData.json();

      console.log({currentUser});

      return;
    };

    try {
      fetchCurrentUser();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <View style={styles.root}>
      <Text>Hello from HOME 👋</Text>

      <Button
        title="Go to the login page"
        color="#710ce3"
        onPress={() => navigation.navigate('Login')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default HomeScreen;
