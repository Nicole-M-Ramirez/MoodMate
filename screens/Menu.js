import {Text, View, TouchableOpacity, StyleSheet, Dimensions, Image,TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../components/Background';
import { colors } from '../components/constants';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const mensajes = [`Wepa, ${"SerenAi"}, como estamos hoy?`]
const random = Math.floor(Math.random() * mensajes.length);

function Menu () {
    const navigation = useNavigation();

    return (
        <Background Color = {colors.limegreen_3}>
            <View style={styles.messageStyle}>
                <Text style={styles.messageText}>{mensajes[random]}</Text>
            </View>

            <Image style={styles.image} source={require('../assets/SerenaiLogo.png')}/>
            
        </Background>
    )
}

export default Menu;

const styles = StyleSheet.create({
    image:{
        width: Width*0.43,
        height: Height*0.2,
        left: Width *0.28,
        top: Height*0.15
    },
    messageStyle:{
        //top: Height*0.33,
        width: Width+5,
        height: Height*0.17,
        backgroundColor: 'white',
        borderColor:colors.greypurple_2,
        borderWidth:2
    },
    messageText:{
        color:'black',
        fontWeight: '700',
        fontSize:25,
        top: (Height*0.17)*0.4,
        left: (Width)*0.1,
        width: Width*0.8,
    },
  });