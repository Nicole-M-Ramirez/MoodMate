import {Text, View, TouchableOpacity, StyleSheet, Dimensions, Image,TextInput, Alert} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../components/Background';
import {colors} from '../components/constants';

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
        // if(textUser in Usuarios){
        //     if(Usuarios[textUser].password === textPass){
        //         navigation.navigate("GAD7")
        //     }
        //     else{
        //         AlertPass()
        //     }
        // }
        // else{
        //     AlertUser()
        // }

        navigation.navigate("Menu")
    }

    return (
        <View >
            <Background Color = {colors.limegreen_3}>
                <Image style={styles.image} source={require('../assets/SerenaiLogo.png')}/>
                

                <Text style={[styles.text,{top:Height*0.15, left:Width *0.1}]}>Usuario</Text>
                <TextInput style={[styles.input,{top: Height*0.16,}]} onChangeText={onChangeTextUser} value={textUser}/>
                <Text style={[styles.text,{top:Height*0.2, left:Width *0.1}]}>Contraseña</Text>
                <TextInput style={[styles.input,{top: Height*0.21,}]} onChangeText={onChangeTextPass} value={textPass} secureTextEntry={true}/>

                <TouchableOpacity style={styles.button} onPress={()=>{ValidarUsuario()}}>
                    <Text style={[styles.text, {left:(Width*0.3)*0.15, top:(Height*0.07)*0.3}]} >Ingresar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate("NewUser")}}>
                    <Text style={styles.buttonText}>Crear nuevo usuario</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={{backgroundColor:'white',width:Width*0.45, height:Height*0.1, borderRadius:30, top:Height*0.4, left:Width*0.25}} onPress={()=>{navigation.navigate("NewUser")}}>
                    <Text style={{fontSize:17, top:21, left:7}}>Crear cuenta nueva</Text>
                </TouchableOpacity> */}
            </Background>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    image:{
        width: Width*0.43,
        height: Height*0.2,
        left: Width *0.28,
        top: Height*0.1
    },
    titleView:{
        backgroundColor: colors.limegreen_3,
        borderRadius:50,
        width: Width*0.6,
        height:Height*0.1,
        top: Height*0.15,
        left: Width*0.19
    },
    titleText:{
        color:'white',
        fontWeight: '900',
        fontSize:45,
        top: (Height*0.1)*0.2,
        left: (Width*0.19)*0.25
    },
    text:{
        fontWeight: 700,
        fontSize: 20,
         color: '#4f545c'
    },
    input: {
        height: Height*0.05,
        borderWidth: 2,
        borderColor: '#4f545c',
        borderRadius:10,
        left: Width *0.1,
        width: Width*0.74,
        backgroundColor:'white'
      },
    button: {
        backgroundColor: 'white',
        width: Width*0.3,
        height: Height*0.07,
        borderRadius:30,
        left: Width *0.54,
        top: Height*0.25
    },
    // buttonStyle:{
            
    //         top: Height*0.399,
    //         width: Width,
    //         height: Height*0.1,
    //         backgroundColor: 'white',
    //         borderColor:colors.greypurple_2,
    //         borderWidth:2
    //     },
    //     buttonText:{
    //         color:'#4f545c',
    //         fontWeight: '900',
    //         fontSize:25,
    //         top: (Height*0.1)*0.3,
    //         left: (Width)*0.2
    //     },
    buttonStyle:{
        borderRadius:10,
        top: Height*0.399,
        width: Width*0.5,
        height: Height*0.05,
        backgroundColor: colors.limegreen_3,
        borderColor:colors.purple_5,
        width: Width*0.74,
        borderWidth:2,
        left: Width *0.1
    },
    buttonText:{
        color:'#4f545c',
        fontWeight: '900',
        fontSize:25,
        fontSize: 20,
        fontWeight: 700,
        top: (Height*0.1)*0.08,
        left: (Width)*0.12
    },
  });
  