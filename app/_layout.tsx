import { Stack } from 'expo-router';
import { useFonts, Montserrat_300Light, Montserrat_500Medium, Montserrat_700Bold, Montserrat_800ExtraBold,  } from '@expo-google-fonts/montserrat';
import { View, ActivityIndicator } from 'react-native';

import colors from '@/src/styles/colors';

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  })

  if(!fontsLoaded){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.defaultBlack}}>
        <ActivityIndicator size={'small'} color={colors.purple}/>
      </View>
    )
  }

  return (
      <Stack initialRouteName='index'>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="signon" options={{ headerShown: false }} />
      </Stack>
  );
}
