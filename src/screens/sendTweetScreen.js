import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {postTweets} from '../redux/Action/twitter';
import {useDispatch} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';

const sendTweetScreen = () => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [userID, setUserID] = useState('');
  const [username, setUsername] = useState('');
  const [tweetText, setTweetText] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('TwitterData').then(res => {
      const userId = JSON.parse(res).userID;
      const userName = JSON.parse(res).userName;
      setUserID(userId);
      setUsername(userName);
    });
  }, [userID]);

  const getMessage = () => {
    const status = isError ? 'Error: ' : 'Success: ';
    return status + message;
  };

  const postTweetsPress = () => {
    const postTweetPayLoad = {
      status: tweetText,
    };
    dispatch(postTweets(postTweetPayLoad));
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: hp(5),
          backgroundColor: '#d4d4dc',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>MY POST TWEETS {username}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, height: 2, backgroundColor: 'black'}} />
      </View>
      <Text style={styles.label}>Send Tweet:</Text>
      <TextInput
        style={styles.input}
        id="status"
        label="Tweet"
        required
        onChangeText={val => setTweetText(val)}
        autoCapitalize="none"
        errorText="Please enter a valid tweet."
        value={tweetText}
      />
      <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>
        {message ? getMessage() : null}
      </Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          postTweetsPress();
          setTweetText('');
        }}>
        <Text style={{color: 'black', fontSize: 18}}>Send Tweet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: wp(3),
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    marginHorizontal: '10%',
  },
  buttonContainer: {
    backgroundColor: '#fba919',
    marginHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(4),
    marginVertical: hp(1),
  },
  label: {
    marginHorizontal: wp(10),
    paddingTop: hp(4),
  },
});

export default sendTweetScreen;
