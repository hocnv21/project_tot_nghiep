/* eslint-disable react/react-in-jsx-scope */
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  enableLatestRenderer,
  PROVIDER_DEFAULT,
  Callout,
  Circle,
} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {StyleSheet, Platform, Text, Dimensions, Image} from 'react-native';
import {View} from 'react-native';
import {useState} from 'react';
import data from './src/assets/data/data';

export default function App() {
  const [pin, setPin] = useState({latitude: 28.57966, longitude: 77.32111});
  return (
    <View style={styles.container}>
      <MapView
        // provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 28.57966,
          longitude: 77.32111,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {data.map(locksmith => (
          <Marker
            key={locksmith.id}
            title={locksmith.name}
            coordinate={{
              latitude: locksmith.latitude,
              longitude: locksmith.longitude,
            }}>
            <Image
              style={{resizeMode: 'contain', width: 30, height: 30}}
              source={require('./src/assets/image/locksmith.png')}
            />
          </Marker>
        ))}
        <Marker
          coordinate={pin}
          draggable={true}
          onDragStart={e => {
            console.log('Drag start', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}>
          <Callout>
            <Text>Bạn đang ở đây</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />
      </MapView>
      <View
        style={{
          position: 'absolute',
          width: '90%',
          marginTop: Platform.OS === 'ios' ? 40 : 20,
        }}>
        <GooglePlacesAutocomplete
          styles={{}}
          placeholder="Search location"
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          onFail={error => console.log(error)}
          onNotFound={() => console.log('no results')}
          query={{
            key: 'AIzaSyAL_PGpVo_c25DbiuTILcHVNSqp94swDlM',
            language: 'en',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  search_place: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    borderWidth: 2,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
