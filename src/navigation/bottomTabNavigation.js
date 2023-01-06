import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import tweetScreen from '../screens/tweetScreen';
import mentionTweetScreen from '../screens/mentionTweet';
import Ionicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Feather';
import LogOut from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import sendTweetScreen from '../screens/sendTweetScreen';
import PostTweet from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const bottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        headerRight: ({size, color}) => (
          <TouchableOpacity
            onPress={() => {
              console.log('logout');
            }}>
            <LogOut
              name={'logout'}
              style={{paddingRight: 10}}
              size={25}
              color={color}
            />
          </TouchableOpacity>
        ),
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route?.name === 'tweets') {
            iconName = focused ? 'twitter' : 'twitter';
            return <Icon name={iconName} size={size} color={color} />;
          } else if (route?.name === 'mTweets') {
            iconName = focused ? 'mention' : 'mention';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route?.name === 'sTweets') {
            iconName = focused ? 'post-add' : 'post-add';
            return <PostTweet name={iconName} size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen name="tweets" component={tweetScreen} />
      <Tab.Screen name="mTweets" component={mentionTweetScreen} />
      <Tab.Screen name={'sTweets'} component={sendTweetScreen} />
    </Tab.Navigator>
  );
};

export default bottomTabNavigator;
