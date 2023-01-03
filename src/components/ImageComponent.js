import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';

function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/hootsuite-ar21.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(25),
    width: wp(100),
    paddingHorizontal: wp(20),
    justifyContent: 'center',
  },
  image: {
    width: wp(60),
    height: hp(50),
  },
});

export default Index;
