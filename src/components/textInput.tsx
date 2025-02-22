import {View, TextInput} from 'react-native'

import styles from '../styles/styles'
import colors from '../styles/colors'

interface TextInputProps {
    placeholder?: string,
    backgroundColor?: string,
    borderWidth?: number,
    borderColor?: string,
    borderRadius?: number,
    icon?: any,
    iconLib?: any,
    numberOfLines?: number,
    multiline?: boolean,
    textAlign?: string,
}

const TextInputComp: React.FC<TextInputProps> = ({placeholder, backgroundColor, borderWidth, borderColor, borderRadius, icon, iconLib: IconLib, numberOfLines, multiline, textAlign}) => {
    return(
        <TextInput
            placeholder={placeholder}
            numberOfLines={numberOfLines}
            multiline={multiline}
            textAlignVertical={textAlign}
            style={[styles.text, {
                backgroundColor: backgroundColor,
                borderWidth: borderWidth,
                borderColor: borderColor,
                borderRadius: borderRadius,
                color: colors.defaultWhite,
                paddingHorizontal: 10
            }]}
        >

            {IconLib && icon && <IconLib name={icon} size={20} color="#f4f4f4" />}
        </TextInput>
    )
}

export default TextInputComp