import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Slot } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
import { useEffect } from "react";
// import { registerForPushNotifications } from "../utils/notifications/notifications";



// useEffect(() => {
//   registerForPushNotifications();
// }, []);


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
   
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
       <AuthProvider>
      <Stack>
  <Stack.Screen
    name="index"
    options={{ headerShown: false }}
  />

  <Stack.Screen
    name="Loginpage"
    options={{ headerShown: false }}
  />

  <Stack.Screen
    name="(tabs)"
    options={{ headerShown: false }}
  />

  <Stack.Screen
    name="modal"
    options={{
      presentation: 'modal',
      title: 'Modal',
    }}
  />
</Stack>
    
      
      <StatusBar style="auto" />
      </AuthProvider>
    </ThemeProvider>
    
  );
}
