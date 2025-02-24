
import { StyleSheet } from "react-native"
import colors from "./colors"

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontFamily: 'Montserrat_700Bold',
        color: colors.defaultWhite
    },

    subtitle: {
        fontSize: 18,
        fontFamily: 'Montserrat_500Medium',
        color: colors.defaultWhite
    },

    text: {
        fontSize: 15,
        fontFamily: 'Montserrat_500Medium',
        color: colors.defaultWhite
    },
    legend: {
        fontSize: 13,
        fontFamily: 'Montserrat_300Light',
        color: colors.defaultWhite
    },

    header: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        borderBottomWidth: 2,
        borderColor: colors.gray,
        zIndex: 1,
        position: 'absolute'
    }
})



export default styles