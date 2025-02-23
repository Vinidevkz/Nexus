import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import Routes from "@/src/services/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/src/services/context";

import styles from "@/src/styles/styles";
import colors from "@/src/styles/colors";

import TextInputComp from "@/src/components/textInput";
import Button from "@/src/components/button";
import { FontAwesome } from "@expo/vector-icons";

export default function Signin() {
  const route = useRouter();

  const [isLoading, setIsLoading] = useState(false)

  const {setUser} = useAuth()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signinUser() {
    const url = Routes.signinUser;
    const body = JSON.stringify({ email, password });

    console.log('URL de requisição: ', url)

    setIsLoading(true)

    try {
        const request = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body
        })

        console.log(body)

        const response = await request.json()

        if(request.ok){
            const {token, userResponse} = response
            await AsyncStorage.setItem('token', response.token)
            await AsyncStorage.setItem('user', JSON.stringify(userResponse))
            setUser({token, userResponse})
            route.push('/(tabs)')
        }else{
          Alert.alert('Não foi possível realizar o login.', response.message)
          console.log('Erro ao realizar login: ', response)
        }
    } catch (error) {
        console.log('Erro ao realizar login: ', error)
    }finally{
        setIsLoading(false)
    }
  }

  return (
    <SafeAreaView style={s.areaView}>
      <View style={s.header}>
        <Button
          icon="arrow-left"
          iconLib={FontAwesome}
          borderWidth={2}
          borderColor={colors.purple}
          borderRadius={10}
          onPress={route.back}
        />
        <Text style={styles.title}>Fazer Login</Text>
      </View>

      <View style={s.container}>
        <View style={s.cadCont}>
          <Text style={styles.subtitle}>Email:</Text>
          <TextInputComp
            borderWidth={1}
            borderColor={colors.gray}
            borderRadius={10}
            maxLen={50}
            onChange={setEmail}
          />
        </View>

        <View style={s.cadCont}>
          <Text style={styles.subtitle}>Senha:</Text>
          <TextInputComp
            borderWidth={1}
            borderColor={colors.gray}
            borderRadius={10}
            security={true}
            maxLen={30}
            onChange={setPassword}
          />
        </View>
      </View>

      <Button
                title='Login'
                backgroundColor={colors.purple}
                borderRadius={10}
                onPress={signinUser}
                isLoading={isLoading}
                icon="arrow-right"
                iconLib={FontAwesome}
            />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: colors.defaultBlack,
    padding: 15,
  },

  container: {
    padding: 15,
    gap: 15,
  },

  cadCont: {},

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,

    width: "100%",
  },
});
