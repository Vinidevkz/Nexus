import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

// styles
import colors from "@/src/styles/colors";
import styles from "@/src/styles/styles";

// components
import Button from "@/src/components/button";
import { AntDesign } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/src/services/context";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const route = useRouter();
  const { setUser } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        const token = await AsyncStorage.getItem("token");

        if (userData && token) {
          const userResponse = JSON.parse(userData);
          console.log("Usuário do AsyncStorage:", userResponse);
          console.log("Token de autenticação:", token);

          if (userResponse._id) {
            setUser(userResponse);
            route.replace("/(tabs)");
            return;
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao recuperar os dados do usuário:", error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <View style={s.loadingContainer}>
        <StatusBar barStyle="light-content" backgroundColor={colors.defaultBlack} />
        <ActivityIndicator size="small" color={colors.purple} />
      </View>
    );
  }

  return (
    <SafeAreaView style={s.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.defaultBlack} />

      <View style={s.container}>
        <Image source={require("../src/img/logo.png")} resizeMode="contain" style={s.image} />
        <Text style={[styles.subtitle, { color: colors.defaultWhite }]}>
          Crie. Compartilhe. <Text style={{ color: colors.purple }}>Evolua.</Text>
        </Text>
      </View>

      <View style={s.container}>
        <Image source={require("../src/img/imgbglogin.png")} resizeMode="contain" style={s.image} />
      </View>

      <View style={s.container}>
        <Button
          title="Fazer Login"
          width="90%"
          borderWidth={3}
          borderColor={colors.purple}
          borderRadius={10}
          onPress={() => route.push("/signin")}
        />
        <Button
          title="Cadastre-se"
          width="90%"
          borderWidth={3}
          borderColor={colors.purple}
          borderRadius={10}
          onPress={() => route.push("/signon")}
        />
        <Button
          title="Entrar com o GitHub"
          width="90%"
          borderWidth={3}
          borderColor={colors.defaultWhite}
          borderRadius={10}
          icon="github"
          iconLib={AntDesign}
        />

        <View>
          <Text style={[styles.legend, { color: colors.defaultWhite, textAlign: "center" }]}>
            © 2025 Criado e desenvolvido por Vinicius Eduardo.{"\n"}Todos os direitos reservados.
          </Text>
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
    width: "100%",
    height: 200,
    gap: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.defaultBlack,
  },
});
