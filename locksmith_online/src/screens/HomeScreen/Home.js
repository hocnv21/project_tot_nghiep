import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AppContext from '../../AppContext';

export default function Home({navigation}) {
  const {user} = React.useContext(AppContext);
  const googleSignOut = async () => {
    auth()
      .signOut()
      .then(async () => {
        await GoogleSignin.signOut();

        console.log('User sign-out successfully!');
      })
      .catch(e => alert('Error', e.message));
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.top}>
        <Text style={styles.text}>Brain Game</Text>
      </View> */}

      <View style={styles.bannerContainer}>
        <Image
          source={require('../../assets/image/lock-smith-banner1.jpg')}
          style={styles.banner}
        />
      </View>
      <View
        style={{
          width: '90%',
          marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 50,
        }}>
        <Text style={styles.text}>Find fun and interesting</Text>
        <Text style={styles.text}>quizzes to boost up your</Text>
        <Text style={styles.text}>knowledge</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Map')}
          style={styles.button}>
          <Text style={styles.text_while}>GET STARTED</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={googleSignOut} style={styles.button}>
          <Text style={styles.text_while}>I ALREADY HAVE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
