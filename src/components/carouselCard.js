import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';

export const SLIDER_WIDTH = Dimensions.get('window').width + 70;

// export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <Text style={styles.body}>{item.body}</Text>
      <Image source={{uri: item.imgUrl}} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(80),
  },
  image: {
    height: hp(38),
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingHorizontal: wp(5),
    marginBottom: wp(4),
    textAlign: 'center',
  },
});

export default CarouselCardItem;
