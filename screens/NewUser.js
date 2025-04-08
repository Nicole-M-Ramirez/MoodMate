import {Text, View, TouchableOpacity, StyleSheet, Dimensions, Image,TextInput, Alert} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {addUser} from '../redux/slices/counterSlice';
import Background from '../components/Background';
import { colors } from '../components/constants';
import ScreenLogo from '../components/ScreenLogo';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

function NewUser () {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [textUser, onChangeTextUser] = useState('');
    const [textEdad, setTextEdad] = useState('')
    const [textGenero, setTextGenero] = useState('')
    const [textPass, onChangeTextPass] = useState('');
    const [confirmPass, onChangeConfirmPass] = useState('');

    const AlertEmpty = () =>
        Alert.alert('Casilla Vacia', 'Porfavor llenar cada casilla', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    const AlertPass = () =>
        Alert.alert('Contraseñas Distintas', 'Porfavor hacegurese que ambas contraseñas sean iguales', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    function InputValidation(){
        // if(textUser === '' || textPass === '' || confirmPass === ''){
        //     AlertEmpty()
        // }
        // else if(textPass != confirmPass){
        //     AlertPass()
        // }
        // else{
        //     dispatch(addUser({"user": textUser, "pass": confirmPass}));
        //     navigation.navigate("Login")
        // }
        navigation.navigate("Login")
    }
    return (
        <Background Color = {colors.ligthgrey_7}>
            <ScreenLogo Title={"Crear Cuenta"}/>
            <Text style={[styles.text,{top:Height*0.15, left:Width *0.1}]}>Ingrese Nombre de Usuario</Text>
            <TextInput style={[styles.input,{top: Height*0.16,}]} onChangeText={onChangeTextUser} value={textUser}/>

            <Text style={[styles.text,{top:Height*0.2, left:Width *0.1}]}>Edad</Text>
            <TextInput style={[styles.input,{top: Height*0.21, width: Width*0.3}]} onChangeText={setTextEdad} value={textEdad} keyboardType="numeric"/>

             <Text style={[styles.text,{top:Height*0.125, left:Width *0.53}]}>Género</Text>
            <TextInput style={[styles.input,{left: Width*0.535,top: Height*0.135,width: Width*0.3}]} onChangeText={setTextGenero} value={textGenero}/>

            <Text style={[styles.text,{top:Height*0.17, left:Width *0.1}]}>Ingrese Contraseña</Text>
            <TextInput style={[styles.input,{top: Height*0.18,}]} onChangeText={onChangeTextPass} value={textPass} secureTextEntry={true}/>

            <Text style={[styles.text,{top:Height*0.21, left:Width *0.1}]}>Confirme Contraseña</Text>
            <TextInput style={[styles.input,{top: Height*0.23,}]} onChangeText={onChangeConfirmPass} value={confirmPass} secureTextEntry={true}/>
              
            <TouchableOpacity style={styles.button} onPress={()=>{InputValidation()}}>
                <Text style={[styles.text, {left:15, top:9}]} >Ingresar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>User Agreement</Text>
            </TouchableOpacity>
        </Background>
    )
}

export default NewUser;

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
        backgroundColor: "white"
      },
    button: {
        backgroundColor: 'white',
        width: Width*0.3,
        height: Height*0.07,
        borderRadius:25,
        left: Width *0.54,
        top: Height*0.25
    },
    buttonStyle:{
            top: Height*0.33,
            width: Width+5,
            height: Height*0.1,
            backgroundColor: 'white',
            borderColor:colors.greypurple_2,
            borderWidth:2
        },
        buttonText:{
            color:'black',
            fontWeight: '900',
            fontSize:25,
            top: (Height*0.1)*0.2,
            left: (Width)*0.22
        },
        cuadrado:{
            width: Width*0.05,
            Height: Height*0.5,
            backgroundColor: 'white'
        }
  });
  