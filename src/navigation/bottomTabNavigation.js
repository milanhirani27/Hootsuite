import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import tweetScreen from '../screens/tweetScreen';

const Tab = createBottomTabNavigator();

const bottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="tweets" component={tweetScreen} />
      <Tab.Screen name="mTweets" component={tweetScreen} />
    </Tab.Navigator>
  );
};

export default bottomTabNavigator;
