import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';
import AsyncStorage from '@react-native-community/async-storage';
const {RNTwitterSignIn} = NativeModules;

const SocialAuth = ({navigation}) => {
  const Constants = {
    TWITTER_COMSUMER_KEY: '',
    TWITTER_CONSUMER_SECRET:
      '',
  };

  const twitterAuth = () => {
    RNTwitterSignIn.init(
      Constants.TWITTER_COMSUMER_KEY,
      Constants.TWITTER_CONSUMER_SECRET,
    );
    RNTwitterSignIn.logIn()
      .then(loginData => {
        AsyncStorage.setItem('TwitterData', JSON.stringify(loginData));
        navigation.replace('BottomTab', {
          twitterData: loginData,
        });
      })
      .catch(error => {
        console.log('error in twitter login', error);
      });
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.textContainer}>
        <Text style={{textAlign: 'center', fontSize: 17}}>
          Hootsuite lets you add multiple social networks to view, post, and
          schedule message on the go.
        </Text>
        <Text style={styles.textSocialContainer}> Add social networks</Text>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: '#1da1f2'}]}
          onPress={() => twitterAuth()}>
          <Text style={{color: 'white', fontSize: 18}}>
            Connect with Twitter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: '#d93175'}]}>
          <Text style={{color: 'white', fontSize: 18}}>
            Connect with Instrgram
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: '#1877f2'}]}>
          <Text style={{color: 'white', fontSize: 18}}>
            Connect with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: '#e52d27'}]}>
          <Text style={{color: 'white', fontSize: 18}}>
            Connect with Youtube
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: '#4875b4'}]}>
          <Text style={{color: 'white', fontSize: 18}}>
            Connect with Linkdin
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    paddingVertical: hp(3),
    textAlign: 'center',
    alignItems: 'center',
  },
  textSocialContainer: {
    fontSize: 23,
    paddingVertical: hp(3),
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: hp(1),
    marginHorizontal: wp(18),
    marginBottom: hp(3),
  },
});

export default SocialAuth;
