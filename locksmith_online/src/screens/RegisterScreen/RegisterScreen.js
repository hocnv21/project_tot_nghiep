import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import TextLine from '../../components/TextLine';
import TextUnderline from '../../components/TextUnderline';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {launchImageLibrary} from 'react-native-image-picker';
// import storage from '@react-native-firebase/storage';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

import styles from './style';

export default function RegisterScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  const handleHaveAcc = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name Profile"
        label="Full Name"
        onChangeText={setName}
        style={styles.input}
        outline
      />
      <TextInput
        label="Email"
        dense={true}
        placeholder="email"
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        label="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        label="Confirm Password"
        onChangeText={setPasswordConfirm}
        secureTextEntry={true}
        style={styles.input}
      />

      <CustomButton
        title="Register"
        type="PRIMARY"
        disabled={!email || !password || !name || !image || !passwordConfirm}
        // onPress={() => onUserRegister()}
      />
      <TextLine text={'OR'} colorLine={'black'} />

      <CustomButton title="Login with Google" type="GOOGLE" />
      <CustomButton title="Login with Facebook" type="PRIMARY" />

      <TextUnderline text={'You have an account?'} onPress={handleHaveAcc} />
    </View>
  );
}
