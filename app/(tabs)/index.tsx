import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import { useAuth } from "@/src/services/context";

import styles from "@/src/styles/styles";
import colors from "@/src/styles/colors";

import IconProfile from "@/src/components/iconProfile";
import Button from "@/src/components/button";

export default function Home() {
  const { user } = useAuth();

  return (
    <SafeAreaView style={s.safeArea}>
      <View style={styles.header}>
        <Image
            source={require('@/assets/images/icon.png')}
            style={s.img}
        />
        <Text style={[styles.text, {width: '70%'}]} numberOfLines={1}>
          Bem-Vindo(a), {user.name? user.name : user.userResponse.name}
        </Text>
        <IconProfile
          img={
            "https://i.pinimg.com/736x/fc/5f/4c/fc5f4c8ffd0440244ed9797efa5e0efa.jpg"
          }
          width={50}
          height={50}
        />
      </View>

      <View style={s.container}>
        <Text style={[styles.title, { alignSelf: "flex-start", fontSize: 25, }]}>
          🔥Top 10
        </Text>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.defaultBlack,
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 15,
    gap: 10,
    marginTop: styles.header.height,
  },

  img: {
    width: 50,
    height: 50
  }
});
