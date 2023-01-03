import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import Index from '../components/ImageComponent';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helper/responsiveScreen';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const getMessage = () => {
    const status = isError ? 'Error: ' : 'Success: ';
    return status + message;
  };

  return (
    <View>
      <Index />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: hp(1.5),
        }}>
        <Text style={{fontSize: 21}}>Sign up for Hootsuite account</Text>
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
        <View style={styles.buttonContainer}>
          <Button title="Sign up" color="black" />
        </View>
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
    backgroundColor: '#ffac1c',
  },
  signupContainer: {
    marginHorizontal: wp(10),
  },
});
export default AuthScreen;
