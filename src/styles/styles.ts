
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
    descText: {
        fontSize: 15,
        fontFamily: 'Montserrat_300Light',
        color: colors.defaultWhite
    },
    legend: {
        fontSize: 13,
        fontFamily: 'Montserrat_300Light',
        color: colors.defaultWhite
    },

    header: {
        width: '95%',
        height: 80,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        elevation: 15,
        borderRadius: 50,
        margin: 5,
        zIndex: 1,
        position: 'absolute',
        backgroundColor: colors.fullBlack
    }
})

export default styles