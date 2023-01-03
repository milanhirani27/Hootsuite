import {createNativeStackNavigator} from '@react-navigation/native-stack';
import authNavigator from './authNavigation';
import bottomTabNavigation from './bottomTabNavigation';
const Stack = createNativeStackNavigator();

const appNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={authNavigator} />
      <Stack.Screen name="BottomTab" component={bottomTabNavigation} />
    </Stack.Navigator>
  );
};

export default appNavigator;
