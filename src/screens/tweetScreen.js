import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, Alert} from 'react-native';
import {getAllTweets} from '../redux/Action/twitter';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';
import {useIsFocused} from '@react-navigation/native';

const tweetScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const getTweets = useSelector(state => state.getTweets.getTweets.data);
  const [userID, setUserID] = useState('');
  const [username, setUsername] = useState('');
  const [tweet, setTweet] = useState(getTweets);

  useEffect(() => {
    AsyncStorage.getItem('TwitterData').then(res => {
      const userId = JSON.parse(res).userID;
      const userName = JSON.parse(res).userName;
      setUserID(userId);
      setUsername(userName);
    });
    dispatch(getAllTweets(userID));
  }, [userID]);

  useEffect(() => {
    if (isFocused) {
      setTweet(getTweets);
      dispatch(getAllTweets(userID));
    }
  }, [isFocused]);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: 'blue'}}>
          <Image
            source={require('../assests/twitter-icon.png')}
            resizeMode="contain"
            style={{
              backgroundColor: 'white',
              width: wp(15),
              height: hp(8),
            }}
          />
        </View>
        <View style={{flex: 1, paddingLeft: wp(4)}}>
          <Text>{username}</Text>
          <Text>{item.text}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: hp(5),
          backgroundColor: '#d4d4dc',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18}}>MY TWEETS {username}</Text>
      </View>
      <FlatList
        data={tweet.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default tweetScreen;
