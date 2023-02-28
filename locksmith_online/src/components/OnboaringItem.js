import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

export default function OnboaringItem({item}) {
  const WIDTH = Dimensions.get('window').width;
  return (
    <View style={[styles.container]}>
      <View style={styles.image}>
        <Image
          source={item.image}
          style={{resizeMode: 'contain', width: '100%', height: 150}}
        />
      </View>

      <View style={{width: Dimensions.get('window').width * 0.8}}>
        <Text style={styles.title}> {item.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.4,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
