/* eslint-disable react-hooks/rules-of-hooks */
import {
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  Text,
  Pressable,
  Alert,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {TextInput} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import styles from './style';
import TextLine from '../../components/TextLine';
import TextUnderline from '../../components/TextUnderline';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('hoc@gmail.com');
  const [password, setPassword] = useState('112233');
  const [googleLogin, setGoogleLogin] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '883139811738-hk2iac6lbkehkduf4pnmafvc0vlmpumu.apps.googleusercontent.com',
    });
  }, []);

  const loginWithGoogle = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    try {
      let loginUser = await auth().signInWithCredential(googleCredential);
      console.log(JSON.stringify(loginUser));
      setGoogleLogin(true);
    } catch (error) {
      setGoogleLogin(false);
    }
  };
  const onHandleLogin = async () => {
    if (!email || !password) {
      alert('please add all the field');
      return;
    }
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      console.log(result);
    } catch (err) {
      alert('something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={logoLink} /> */}

      <CustomButton
        onPress={loginWithGoogle}
        title="Login with Google"
        disabled={!email || !password}
        type="GOOGLE"
      />
      <CustomButton
        title="Login with Facebook"
        disabled={!email || !password}
        type="PRIMARY"
      />
      <TextLine text={'OR'} colorLine={'black'} />
      <View style={{width: '100%'}}>
        <TextInput
          placeholder="email"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
          label="Email"
        />
        <TextInput
          placeholder="password"
          label="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>

      <CustomButton
        onPress={onHandleLogin}
        title="login"
        disabled={!email || !password}
        type="PRIMARY"
      />
      <TextUnderline text={'Forgot Password?'} />

      <CustomButton
        title={'CREATE AN ACCOUNT'}
        type="GRAY"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}
