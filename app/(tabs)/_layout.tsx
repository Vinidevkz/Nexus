import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {
return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
      <Stack>
        <Stack.Screen name="Home" options={{ headerShown: false }} />
      </Stack>
  );
}
