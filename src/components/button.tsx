import { TouchableOpacity, Text, StyleSheet, ActivityIndicator} from "react-native";
import { MaterialIcons, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";

import styles from "../styles/styles";
import colors from "../styles/colors";

interface ButtonProps {
    title?: string,
    icon?: string,
    iconLib?: any,
    width?: any,
    backgroundColor?: string,
    borderWidth?: number,
    borderColor?: string,
    borderRadius?: number,
    textColor?: any,
    isLoading?: boolean,
    onPress?: () => void,
}

const Button: React.FC<ButtonProps> = ({title, icon, iconLib: IconLib, width, backgroundColor, borderWidth, borderColor, borderRadius, textColor, isLoading, onPress = () => {}}) => {

    return (
        <TouchableOpacity style={[s.button, {width: width, backgroundColor: backgroundColor, borderWidth: borderWidth, borderColor: borderColor, borderRadius: borderRadius}]} onPress={onPress}>

                {isLoading ? (
                    <ActivityIndicator size={'small'} color={colors.defaultWhite}/>
                ) : (
                    title && <Text style={[styles.text, { color: textColor ? textColor : colors.fullWhite }]}>{title}</Text>
                )}


            {IconLib && icon && <IconLib name={icon} size={20} color="#f4f4f4" />}
        </TouchableOpacity>
    )

}

const s = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        padding: 10
    }
})

export default Button