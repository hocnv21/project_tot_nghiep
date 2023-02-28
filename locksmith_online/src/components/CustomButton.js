import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({onPress, title, type, disabled}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.5,
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#0068FF',
  },
  container_GOOGLE: {
    backgroundColor: '#ffffff',
  },
  container_GRAY: {
    backgroundColor: 'lightgray',
  },
  text: {
    fontWeight: 'bold',
  },
  text_PRIMARY: {
    color: '#ffff',
  },

  text_GOOGLE: {
    color: '#000000',
  },
  text_GRAY: {
    color: '#000000',
  },
});
