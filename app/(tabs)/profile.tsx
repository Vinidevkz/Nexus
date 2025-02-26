import {View, Text, Pressable} from 'react-native'
import { useRouter } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile(){

    const route = useRouter();

    const logout = async () => {
        await AsyncStorage.removeItem('user')
        await AsyncStorage.removeItem('token')
        route.push('/')
    }

    return(
        <View>
            <Text>Perfil</Text>

            <Pressable style={{padding: 30, borderWidth: 1, borderColor: 'red'}} onPress={logout}>
                <Text>Sair do perfil</Text>
            </Pressable>
        </View>
    )
}