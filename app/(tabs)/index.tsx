import React, {useContext} from 'react'
import {View, Text} from 'react-native'
import { useAuth } from '@/src/services/context';

export default function Home(){
    const {user} = useAuth()

    return(
        <View>
            <Text>Homepage</Text>
            <Text>Nome: {user.newUser.name}</Text>
        </View>
    )
}