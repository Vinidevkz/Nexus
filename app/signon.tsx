import {View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native'

import { useRouter } from "expo-router";

import styles from '@/src/styles/styles'
import colors from '@/src/styles/colors'

import TextInputComp from '@/src/components/textInput'
import Button from '@/src/components/button'
import { FontAwesome } from '@expo/vector-icons'

export default function Signon() {

    const route = useRouter()

    return(
        <SafeAreaView style={s.areaView}>
            <StatusBar
                barStyle={"light-content"}
                backgroundColor={colors.defaultBlack}
            />
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
                     multiline={true}
                     textAlign='top'
                    />
                </View>
            </View>
            </ScrollView>

            <Button
            title='Cadastrar-se'
            backgroundColor={colors.purple}
            borderRadius={10}
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