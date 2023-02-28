/* eslint-disable react-hooks/rules-of-hooks */
import {StyleSheet, View, FlatList, Animated} from 'react-native';
import React, {useState, useRef} from 'react';

import {Dimensions} from 'react-native';
import {COLORS} from '../../contains/index';
import NextButton from './NextButton';
import OnboaringItem from './OnboaringItem';
import Paginator from './Paginator';

export default function Onboaring({onPress}) {
  const [currenIndex, setCurrenIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrenIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const viewabilityConfigCallbackPairs = useRef([
    {viewConfig, viewableItemsChanged},
  ]).current;
  const scrollTo = () => {
    console.log(currenIndex);
    if (currenIndex < slides.length - 1) {
      setCurrenIndex(currenIndex + 1);
      // slidesRef.current.scrollToIndex({index: currenIndex + 1});
      slidesRef.current.scrollToIndex({index: currenIndex + 1});
    } else {
      onPress();
    }
  };
  const slides = [
    {
      id: 0,
      title: 'Find fun and interesting quizzes to boost up your knowledge',
      image: require('../assets/image/lock-smith-banner1.jpg'),
    },
    {
      id: 1,
      title: 'Find fun and interesting quizzes to boost up your knowledge',
      image: require('../assets/image/lock-smith-banner2.jpg'),
    },
    {
      id: 2,
      title: 'Find fun and interesting quizzes to boost up your knowledge',
      image: require('../assets/image/lock-smith-banner3.jpg'),
    },
    {
      id: 3,
      title: 'Find fun and interesting quizzes to boost up your knowledge',
      image: require('../assets/image/lock-smith-banner4.jpg'),
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          height: Dimensions.get('window').height * 0.6,
        }}>
        <FlatList
          data={slides}
          renderItem={({item}) => <OnboaringItem item={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],

            {useNativeDriver: false},
          )}
          onMomentumScrollEnd={event => {
            const index = Math.floor(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width,
            );
            setCurrenIndex(index);
          }}
          scrollEventThrottle={32}
          viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs}
          //   onViewableItemsChanged={viewableItemsChanged}
          //   viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currenIndex + 1) * (100 / slides.length)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.violet,
    borderRadius: 20,
    marginVertical: 10,
  },
  text_while: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
