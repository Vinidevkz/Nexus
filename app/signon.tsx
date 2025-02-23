import {View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, Alert} from 'react-native'
import { useState } from 'react';
import { useRouter } from "expo-router";

import Routes from '@/src/services/routes'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '@/src/services/context';

import styles from '@/src/styles/styles'
import colors from '@/src/styles/colors'

import TextInputComp from '@/src/components/textInput'
import Button from '@/src/components/button'
import { FontAwesome } from '@expo/vector-icons'

export default function Signon() {

    const route = useRouter()

    const {setUser} = useAuth()

    const [isLoading, setIsLoading] = useState(false)

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [area, setArea] = useState('')
    const [bio, setBio] = useState('')

    async function registerUser() {
        const url = Routes.signonUser
        const body = JSON.stringify({name, userName, email, password, age, area, bio})

        //console.log('Url da requisição: ', url)
        //console.log("Corpo da requisição: ", body)

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
                Alert.alert('Erro ao se cadastrar: ', response.message)
                console.log('Resposta do servidor: ', response)
            }
        } catch (error) {
            Alert.alert('Erro ao se cadastrar.', 'Houve um erro interno. Tente novamente mais tarde.')
            console.log('Erro:', error)
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <SafeAreaView style={s.areaView}>
            <View style={s.header}>
                <Button
                icon='arrow-left'
                iconLib={FontAwesome}
                borderWidth={2}
                borderColor={colors.purple}
                borderRadius={10}
                onPress={route.back}
                />
                <Text style={styles.title}>
                    Faça seu Cadastro
                </Text>
            </View>

            <ScrollView>
                <View style={s.container}>
                    <View style={s.cadCont}>
                        <Text style={styles.subtitle}>
                            Nome:
                        </Text>
                        <TextInputComp
                        borderWidth={1}
                        borderColor={colors.gray}
                        borderRadius={10}
                        maxLen={50}
                        onChange={setName}
                        />
                    </View>

                    <View style={s.cadCont}>
                        <Text style={styles.subtitle}>
                            Nome de usuário:
                        </Text>
                        <TextInputComp
                        borderWidth={1}
                        borderColor={colors.gray}
                        borderRadius={10}
                        maxLen={20}
                        onChange={setUserName}
                        />
                    </View>

                    <View style={s.cadCont}>
                        <Text style={styles.subtitle}>
                            Email:
                        </Text>
                        <TextInputComp
                        borderWidth={1}
                        borderColor={colors.gray}
                        borderRadius={10}
                        maxLen={50}
                        onChange={setEmail}
                        />
                    </View>

                    <View style={s.cadCont}>
                        <Text style={styles.subtitle}>
                            Senha:
                        </Text>
                        <TextInputComp
                        borderWidth={1}
                        borderColor={colors.gray}
                        borderRadius={10}
                        security={true}
                        maxLen={30}
                        onChange={setPassword}
                        />
                    </View>

                    <View style={s.cadCont}>
                        <Text style={styles.subtitle}>
                            Data de Nascimento:
                        </Text>
                        <TextInputComp
                        borderWidth={1}
                        borderColor={colors.gray}
                        borderRadius={10}
                        onChange={setAge}
                        />
                    </View>

                    <View style={s.cadCont}>
                        <Text style={styles.subtitle}>
                            Área de atuação:
                        </Text>
                        <TextInputComp
                        borderWidth={1}
                        borderColor={colors.gray}
                        borderRadius={10}
                        onChange={setArea}
                        />
                    </View>

                    <View style={s.cadCont}>
                        <Text style={styles.subtitle}>
                            Biografia:
                        </Text>
                        <TextInputComp
                        borderWidth={1}
                        borderColor={colors.gray}
                        borderRadius={10}
                        numberOfLines={5}
                        maxLen={200}
                        multiline={true}
                        textAlign='top'
                        onChange={setBio}
                        />
                    </View>
                </View>
            </ScrollView>

            <Button
                title='Cadastrar-se'
                backgroundColor={colors.purple}
                borderRadius={10}
                onPress={registerUser}
                isLoading={isLoading}
                icon='check'
                iconLib={FontAwesome}
            />
        </SafeAreaView>
    )
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

    cadCont: {

    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 10,

        width: '100%',
    },
})