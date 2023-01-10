import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {getAllTweets, getMentionTweets} from '../redux/Action/twitter';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';
import {useIsFocused} from '@react-navigation/native';
import LikeTweet from 'react-native-vector-icons/EvilIcons';

const mentionTweetScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const mentionTweets = useSelector(
    state => state.getTweets.mentionTweets.data,
  );
  const [userID, setUserID] = useState('');
  const [username, setUsername] = useState('');
  const [mTweet, setMTweet] = useState(mentionTweets);

  useEffect(() => {
    AsyncStorage.getItem('TwitterData').then(res => {
      const userId = JSON.parse(res).userID;
      const userName = JSON.parse(res).userName;
      setUserID(userId);
      setUsername(userName);
    });
    dispatch(getMentionTweets(userID));
  }, [userID]);

  useEffect(() => {
    setMTweet(mentionTweets);
    dispatch(getMentionTweets(userID));
  }, [isFocused]);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 15,
          flexDirection: 'row',
          alignItems: 'flex-start',
          // justifyContent: 'center',
          margin: wp(1),
        }}>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: hp(2),
            justifyContent: 'center',
          }}>
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
        <View style={{flexDirection: 'column'}}>
          <View style={{flex: 1, paddingVertical: hp(1.5), paddingLeft: wp(4)}}>
            <Text
              style={{fontSize: 19, paddingBottom: hp(1), fontWeight: '600'}}>
              {username}
            </Text>
            <Text style={{fontSize: 16}}>{item.text}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              paddingLeft: wp(4),
            }}>
            <TouchableOpacity style={{paddingHorizontal: wp(2)}}>
              <LikeTweet name={'like'} size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: wp(2)}}>
              <LikeTweet name={'retweet'} size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: wp(2)}}>
              <LikeTweet name={'share-apple'} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: hp(5),
          backgroundColor: '#d4d4dc',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>
          MY MENTION TWEETS {username}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, height: 2, backgroundColor: 'black'}} />
      </View>
      <FlatList
        data={mTweet?.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>There isn't any mention tweets.</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default mentionTweetScreen;
