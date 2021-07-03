import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import HomeScreen from '_screens/HomeScreen';
import LoadingScreen from '_screens/LoadingScreen';
import LoginScreen from '_screens/LoginScreen';
import { LoginContext } from '_utils/LoginProvider';

const Stack = createStackNavigator();
export default function AppStack() {
  const { user, isLoading } = useContext(LoginContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="loading"
            options={{ headerShown: false }}
            component={LoadingScreen}
          />
        ) : user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="signin" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
