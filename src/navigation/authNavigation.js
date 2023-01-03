import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CarouselScreen from '../screens/carouselScreen';
import AuthScreen from '../screens/authScreen';
import SocialAuth from '../screens/socialAuthScreen';

const Stack = createNativeStackNavigator();

const authNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Carousel" component={CarouselScreen} />
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="SocialAuth" component={SocialAuth} />
    </Stack.Navigator>
  );
};

export default authNavigator;
