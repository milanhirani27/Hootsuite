import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import Index from '../components/ImageComponent';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';

const AuthScreen = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const {isLogin} = route.params;

  const getMessage = () => {
    const status = isError ? 'Error: ' : 'Success: ';
    return status + message;
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Index />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: hp(1.5),
        }}>
        <Text style={{fontSize: 21}}>{isLogin ? "Sign in" :"Sign up"} for Hootsuite account</Text>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          id="email"
          label="Email"
          keyboardType="email-address"
          required
          email
          onChangeText={setEmail}
          autoCapitalize="none"
          errorText="Please enter a valid email address."
          initialValue=""
        />
        <Text style={[styles.label, {marginTop: hp(1)}]}>Password</Text>
        <TextInput
          style={styles.input}
          id="password"
          label="Password"
          keyboardType="default"
          secureTextEntry
          required
          onChangeText={setPassword}
          minLength={5}
          autoCapitalize="none"
          errorText="Please enter a valid password."
          initialValue=""
        />
        <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>
          {message ? getMessage() : null}
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('SocialAuth');
          }}>
          <Text style={{fontSize: 18}}> {isLogin ? 'Sign in' : 'Sign up'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: wp(1),
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  label: {
    paddingVertical: 4,
  },
  buttonContainer: {
    marginTop: hp(2),
    backgroundColor: '#fba919',
    width: '100%',
    marginBottom: wp(3),
    alignItems: 'center',
    height: hp(4),
    justifyContent: 'center',
  },
  signupContainer: {
    marginHorizontal: wp(10),
  },
});
export default AuthScreen;
