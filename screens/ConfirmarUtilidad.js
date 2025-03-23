import {Text, View, TouchableOpacity, StyleSheet, Dimensions, Image,TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../components/Background';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


function ConfirmarUtilidad () {
    const navigation = useNavigation();

    function GuardarRespuesta (){
        navigation.navigate("Menu")
    }
    return (
        <Background>
            <View style={{width: Width*0.8,left: Width*0.1,top: Height*0.2}}>
                <Text style={styles.text}>La experiencia con el chatbot fue beneficiosa para usted?</Text>
            </View> 

            <TouchableOpacity style={[styles.button, {backgroundColor: '#af9dcf', top:Height*0.25,left:Width*0.34}]} onPress={()=>{GuardarRespuesta()}}>
                <Text style={[styles.text, {left:45, top:11, color: 'white', fontSize: 20}]}>Si</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor:'#9dbacf', top:Height*0.3,left:Width*0.34}]} onPress={()=>{GuardarRespuesta()}}>
                <Text style={[styles.text, {left:45, top:11,color: 'white', fontSize: 20}]}>No</Text>
            </TouchableOpacity> 
            
        </Background>
    )
}

export default ConfirmarUtilidad;

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