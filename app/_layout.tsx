import { Stack } from 'expo-router';
import { useFonts, Montserrat_300Light, Montserrat_500Medium, Montserrat_700Bold, Montserrat_800ExtraBold,  } from '@expo-google-fonts/montserrat';
import { View, ActivityIndicator, StatusBar } from 'react-native';

import { AuthProvider } from "@/src/services/context";

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

        
<StatusBar
          barStyle={"light-content"}
          backgroundColor={colors.defaultBlack}
        />

        <ActivityIndicator size={'small'} color={colors.purple}/>
      </View>
    )
  }

  return (
    <AuthProvider>
      <Stack initialRouteName='index'>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="signon" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}
