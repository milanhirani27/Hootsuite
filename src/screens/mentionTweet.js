import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {getMentionTweets} from '../redux/Action/twitter';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';

const mentionTweetScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const mentionTweets = useSelector(state => state.getTweets.mentionTweets.data);
  const [userID, setUserID] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    console.log('--------mention tweet', mentionTweets.data);
    AsyncStorage.getItem('TwitterData').then(res => {
      const userId = JSON.parse(res).userID;
      const userName = JSON.parse(res).userName;
      setUserID(userId);
      setUsername(userName);
    });
    dispatch(getMentionTweets(userID));
  }, [userID]);

  const renderItem = ({item}) => {
    console.log('item--------render', item);
    return (
      <View
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // backgroundColor:'green',
          // marginVertical:3
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
        <Text style={{fontSize: 18}}>MY MENTION TWEETS {username}</Text>
      </View>
      <FlatList
        data={mentionTweets.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default mentionTweetScreen;
