import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {


  return <RootLayoutNav />;
}

function RootLayoutNav() {


  return (
      <Stack initialRouteName='index'>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
}
