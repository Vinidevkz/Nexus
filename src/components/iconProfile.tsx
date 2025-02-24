import {View, Image} from 'react-native'

interface IconProfileProps{
    img: string,
    width: number,
    height: number
}

const IconProfile: React.FC<IconProfileProps> = ({img, width, height}) => {
    return(
        <View style={{width: width, height: height, borderRadius: 50, overflow: 'hidden'}}>
            <Image
                source={{uri: img}}
                style={{width: '100%', height: '100%'}}
                resizeMode='cover'
            />
        </View>
    )
}

export default IconProfile