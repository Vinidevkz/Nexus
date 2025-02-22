import { SafeAreaView, StatusBar, View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { useRouter } from "expo-router";

//styles
import colors from "@/src/styles/colors";
import styles from "@/src/styles/styles";

//components
import Button from "@/src/components/button";
import { AntDesign } from "@expo/vector-icons";

export default function Index() {

  const route = useRouter()

  return (
    <SafeAreaView style={s.safeArea}>

      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.defaultBlack}
      />

      <View style={s.container}>
        <Image source={require('../src/img/logo.png')} resizeMode="contain" style={{width: '100%', height: '100%'}}/>
        <Text style={[styles.subtitle, {color: colors.defaultWhite}]}>Crie. Compartilhe. <Text style={{color: colors.purple}}>Evolua.</Text> </Text>
      </View>

      <View style={s.container}>
        <Image source={require('../src/img/imgbglogin.png')} resizeMode="contain" style={{width: '100%', height: '100%'}}/>
      </View>

      <View style={s.container}>
        <Button title="Fazer Login" width={'90%'} borderWidth={3} borderColor={colors.purple} borderRadius={10}/>
        <Button title="Cadastre-se" width={'90%'} borderWidth={3} borderColor={colors.purple} borderRadius={10} onPress={() => route.push('./signon')}/>
        <Button title="Entrar com o GitHub" width={'90%'} borderWidth={3} borderColor={colors.defaultWhite} borderRadius={10} icon="github" iconLib={AntDesign}/>

        <View>
            <Text style={[styles.legend, {color: colors.defaultWhite, textAlign:'center'}]}>© 2025 Criado e desenvolvido por Vinicius Eduardo.{'\n'} Todos os direitos reservados.</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.defaultBlack,
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height: 200,
    gap: 10
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
