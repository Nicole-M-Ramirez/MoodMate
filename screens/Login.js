import {Text, View, TouchableOpacity, StyleSheet, Dimensions, Image,TextInput, Alert} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../components/Background';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

function Login () {
    const navigation = useNavigation();

    const [textUser, onChangeTextUser] = useState('');
    const [textPass, onChangeTextPass] = useState('');

    const Usuarios = useSelector(state => state.counter.usuarios);

    const AlertPass = () =>
        Alert.alert('Contraseña Incorrecta', 'Porfavor intente de ingresar su contraseña nuevamente', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    const AlertUser = () =>
        Alert.alert('Usuario no encontrado', 'Porfavor intente de ingresar su usuario nuevamente o crear una cuenta', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    function ValidarUsuario(){
        if(textUser in Usuarios){
            if(Usuarios[textUser].password === textPass){
                navigation.navigate("GAD7")
            }
            else{
                AlertPass()
            }
        }
        else{
            AlertUser()
        }

        //navigation.navigate("GAD7")
    }

    return (
        <View >
            <Background>
                <Image style={styles.image} source={require('../assets/MoodMateLogo.png')}/>

                <Text style={[styles.text,{top:Height*0.15, left:Width *0.1}]}>Usuario</Text>
                <TextInput style={[styles.input,{top: Height*0.16,}]} onChangeText={onChangeTextUser} value={textUser}/>
                <Text style={[styles.text,{top:Height*0.2, left:Width *0.1}]}>Contraseña</Text>
                <TextInput style={[styles.input,{top: Height*0.21,}]} onChangeText={onChangeTextPass} value={textPass} secureTextEntry={true}/>

                <TouchableOpacity style={styles.button} onPress={()=>{ValidarUsuario()}}>
                    <Text style={[styles.text, {left:15, top:9}]} >Ingresar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:'white',width:Width*0.45, height:Height*0.1, borderRadius:30, top:Height*0.4, left:Width*0.25}} onPress={()=>{navigation.navigate("NewUser")}}>
                    <Text style={{fontSize:17, top:21, left:7}}>Crear cuenta nueva</Text>
                </TouchableOpacity>
            </Background>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    image:{
        width: Width*0.8,
        height: Height*0.15,
        left: Width *0.1,
        top: Height*0.1
    },
    text:{
        fontWeight: 700,
        fontSize: 20,
         color: '#4f545c'
    },
    input: {
        height: 40,
        borderWidth: 2,
        borderColor: '#4f545c',
        borderRadius:10,
        left: Width *0.1,
        width: Width*0.74,
      },
    button: {
        backgroundColor: 'white',
        width: Width*0.3,
        height: Height*0.07,
        borderRadius:25,
        left: Width *0.54,
        top: Height*0.25
    }
  });
  