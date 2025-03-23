import {Text, View, TouchableOpacity, StyleSheet, Dimensions, Image,TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../components/Background';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


function Menu () {
    const navigation = useNavigation();

    return (
        <Background>
            <View style={{width: Width*0.8,left: Width*0.1,top: Height*0.2}}>
                <Text style={styles.text}>Si desea hablar con el chatbot oprima el boton</Text>
            </View> 

            <TouchableOpacity style={[styles.button, {top:Height*0.25,left:Width*0.34}]} onPress={()=>{navigation.navigate("GAD7")}}>
                <Text style={[styles.text, {left:20, top:11, fontSize: 20}]}>Chatbot</Text>
            </TouchableOpacity> 
            
        </Background>
    )
}

export default Menu;

const styles = StyleSheet.create({
    text:{
        //fontWeight: 700,
        fontSize: 17,
         color: '#4f545c',
    },
    button: {
        backgroundColor: 'white',
        width: Width*0.3,
        height: Height*0.07,
        borderRadius:25,
        left: Width *0.5,
        top: Height*0.08
    },
  });