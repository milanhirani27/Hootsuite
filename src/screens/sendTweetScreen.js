import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
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
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [userID, setUserID] = useState('');
  const [username, setUsername] = useState('');

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
    debugger
    const postTweetPayLoad = {
      status,
    };
    debugger
    dispatch(postTweets(JSON.stringify(postTweetPayLoad)));
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
        <Text style={{fontSize: 18}}>MY POST TWEETS {username}</Text>
      </View>
      <Text style={styles.label}>Send Tweet:</Text>
      <TextInput
        style={styles.input}
        id="status"
        label="Tweet"
        required
        onChangeText={setStatus}
        autoCapitalize="none"
        errorText="Please enter a valid tweet."
        initialValue=""
      />
      <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>
        {message ? getMessage() : null}
      </Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => postTweetsPress}>
        <Text style={{color: 'black', fontSize: 18}}>Send Tweet</Text>
      </TouchableOpacity>
      {/*<View style={styles.buttonsignup}>*/}
      {/*  <Button title='Send Tweet' color='black'*/}
      {/*          onPress={onSubmitHandler}*/}
      {/*  />*/}
      {/*</View>*/}
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
