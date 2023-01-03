import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';

const SocialAuth = () => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={{textAlign: 'center', fontSize: 17}}>
          Hootsuite lets you add multiple social networks to view, post, and
          schedule message on the go.
        </Text>
        <Text style={styles.textSocialContainer}> Add social networks</Text>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.buttonContainer, {backgroundColor: '#1da1f2'}]}>
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
  instagram: {
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 20,
    backgroundColor: '#d93175',
  },
  youtube: {
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 20,
    backgroundColor: '#e52d27',
  },
  twitter: {
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 20,
    backgroundColor: '#1da1f2',
  },
  facebook: {
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 20,
    backgroundColor: '#1877f2',
  },
  linkdin: {
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 20,
    backgroundColor: '#4875b4',
  },
});

export default SocialAuth;
