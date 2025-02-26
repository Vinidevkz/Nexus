import React, { useContext, useEffect, useState } from "react";

import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
  StyleSheet,
  Pressable,
  TouchableOpacity
} from "react-native";
import { useAuth } from "@/src/services/context";


//format date
import { format } from "date-fns";

import {Entypo, Octicons, MaterialCommunityIcons} from '@expo/vector-icons'
import styles from "@/src/styles/styles";
import colors from "@/src/styles/colors";

import IconProfile from "@/src/components/iconProfile";
import Button from "@/src/components/button";
import Routes from "@/src/services/routes";


export default function Home() {
  const { user, token } = useAuth();

  const [filter, setFilter] = useState<string>("Postagens");
  const [isSelected, setIsSelected] = useState();
  const [top10Posts, setTop10Posts] = useState<any>([])

  const Posts = [
    {
      _id: "1",
      userId: "1",
      userName: "Jonas Ribeiro",
      userUserName: "jonasrib2025",
      description:
        "Entrar no mundo da programação pode ser tanto desafiador quanto incrivelmente recompensador. Para muitos, o primeiro contato com códigos, algoritmos e linguagens de programação parece intimidador, mas é importante lembrar que todo programador, em algum momento, já foi um iniciante. A jornada na programação começa com curiosidade, persistência e a vontade de aprender.",
      area: "Postagens",
      likes: 26,
      comments: 56,
      crystals: 19,
      createdAt: "2025-02-23T23:10:44.453Z",
    },
    {
      _id: "2",
      userId: "2",
      userName: "Ricardo Almeida",
      userUserName: "rickalmeida2025",
      description:
        "Entrar no mundo da programação pode ser tanto desafiador quanto incrivelmente recompensador. Para muitos, o primeiro contato com códigos, algoritmos e linguagens de programação parece intimidador, mas é importante lembrar que todo programador, em algum momento, já foi um iniciante. A jornada na programação começa com curiosidade, persistência e a vontade de aprender.",
      area: "Postagens",
      likes: 26,
      comments: 56,
      crystals: 19,
      createdAt: "2025-02-23T23:10:44.453Z",
    },
  ];

  const Filters = [
    {
      id: 1,
      title: "Postagens",
    },
    {
      id: 2,
      title: "Educação",
    },
    {
      id: 3,
      title: "Projetos",
    },
    {
      id: 4,
      title: "Notícias",
    },
  ];

  useEffect(() => {
    const getTop10Posts = async () => {
      const url = Routes.top10Posts
      console.log("Url da requisição top 10: ", url)

      try {
        const request = await fetch(url, {
          method: 'GET',
          headers: new Headers({
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          })
        });

        console.log("Headers enviados:", request.headers);

        const response = await request.json()

        if(request){
          console.log('Top 10 posts do mês: ', response)
          setTop10Posts(response)
        }else{
          console.log('Erro ao pegar os top 10 do mês: ', response.message || "Erro desconhecido")
        }
      } catch (error) {
        console.log("Não foi possivel pegar os top 10 do mês: ", error)
      }
    }

    getTop10Posts()
  }, [])

  return (
    <SafeAreaView style={s.safeArea}>
      <StatusBar backgroundColor={colors.defaultBlack} />

      <View style={styles.header}>
        <Image source={require("@/assets/images/icon.png")} style={s.img} />

        <Text style={[styles.text, { width: "70%" }]} numberOfLines={1}>
          Bem-Vindo(a), {user.name ? user.name : user.userResponse.name}
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
        <View style={s.headerCont}>
          <Text
            style={[styles.title, { alignSelf: "flex-start", fontSize: 25 }]}
          >
            🔥Top 10
          </Text>
        </View>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Filters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <Pressable onPress={() => setFilter(item.title)}>
                <View
                  style={[
                    s.tagCont,
                    {
                      backgroundColor:
                        filter === item.title ? colors.purple : undefined,
                    },
                  ]}
                >
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              </Pressable>
            );
          }}
        />

        <FlatList
          style={{alignSelf: 'center'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Posts}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={s.postCont}>
                <View style={s.postHeader}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <IconProfile
                      img={
                        "https://i.pinimg.com/736x/fc/5f/4c/fc5f4c8ffd0440244ed9797efa5e0efa.jpg"
                      }
                      width={50}
                      height={50}
                    />
                    <View>
                      <Text style={styles.subtitle}>{item.userName}</Text>
                      <Text style={[styles.text, {color: colors.gray}]}>@{item.userUserName}</Text>
                    </View>
                    
                  </View>

                  <Pressable style={{padding: 10}}>
                    <Entypo name="dots-three-vertical" size={24} color={colors.defaultWhite} />
                  </Pressable>
                </View>

                <View style={s.postBody}>
                    <Text style={[styles.text, {color: colors.gray, fontSize: 13,}]}>
                      {format(new Date(item.createdAt), "dd/MM/yyyy - HH:mm")}
                    </Text>
                    <Text style={styles.descText}>{item.description}</Text>
                </View>

                <View style={s.postFooter}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                      <View style={s.actionBoxes}>
                      <TouchableOpacity>
                       <Octicons name="heart" size={24} color={colors.purple} />
                      </TouchableOpacity>
                      <Text style={styles.text}>{item.likes}</Text>
                      </View>

                      <View style={s.actionBoxes}>
                      <TouchableOpacity>
                      <Octicons name="comment-discussion" size={24} color={colors.defaultWhite} />
                      </TouchableOpacity>
                      <Text style={styles.text}>{item.comments}</Text>
                      </View>

                    </View>

                    <View style={s.actionBoxes}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="cards-diamond-outline" size={30} color={colors.purple} />
                    </TouchableOpacity>

                    <Text style={styles.text}>{item.crystals}</Text>
                    </View>

                </View>

                <View style={s.commentBox}>
                  <View style={s.postHeader}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <IconProfile
                      img={
                        "https://i.pinimg.com/736x/fc/5f/4c/fc5f4c8ffd0440244ed9797efa5e0efa.jpg"
                      }
                      width={40}
                      height={40}
                    />
                    <View>
                      <Text style={[styles.subtitle, {fontSize: 15}]}>{item.userName}</Text>
                      <Text style={[styles.text, {color: colors.gray}]}>@{item.userUserName}</Text>
                    </View>
                    
                  </View>

                  </View>

                  <Text style={styles.legend} numberOfLines={2}>
                    Ótimo texto! bom para motivas iniciantes na área! dkajsdhajshdasjaddasdhkasjdhkajsdh
                  </Text>
                </View>
              </View>
            );
          }}
        />
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
    justifyContent: "center",
    width: "100%",

    gap: 10,
    marginTop: styles.header.height + 20,
  },

  headerCont: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },

  img: {
    width: 50,
    height: 50,
  },

  tagCont: {
    backgroundColor: colors.fullBlack,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.purple,
    height: 40,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  postCont: {
    padding: 10,
    justifyContent: "center",
    width: 350,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: colors.fullBlack,
    borderRadius: 15,

  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  postBody: {
    marginVertical: 15,
  },

  postFooter: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5
  },

  actionBoxes: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },

  commentBox: {
    gap: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 20,
  },
});
