import React, {useContext} from 'react'
import {View, Text, SafeAreaView, ScrollView, FlatList, StyleSheet} from 'react-native'
import { useAuth } from '@/src/services/context';

import styles from '@/src/styles/styles'
import colors from '@/src/styles/colors';

export default function Home(){
    const {user} = useAuth()

    return(
        <SafeAreaView style={s.safeArea}>
            <View style={styles.header}>
                <Text style={styles.text} numberOfLines={1}>Bem-Vindo(a), {user.userResponse.name}</Text>
            </View>
        </SafeAreaView>
    )
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
        width: '100%',
        height: 200,
        gap: 10
      },
})