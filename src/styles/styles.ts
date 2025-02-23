
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
        alignItems: "center",
        justifyContent: "space-around",
    }
})



export default styles