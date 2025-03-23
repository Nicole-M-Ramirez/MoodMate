import {Text, View, TouchableOpacity, StyleSheet, Dimensions, Image,TextInput, Alert} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {addUser} from '../redux/slices/counterSlice';
import Background from '../components/Background';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

function NewUser () {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [textUser, onChangeTextUser] = useState('');
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
        if(textUser === '' || textPass === '' || confirmPass === ''){
            AlertEmpty()
        }
        else if(textPass != confirmPass){
            AlertPass()
        }
        else{
            dispatch(addUser({"user": textUser, "pass": confirmPass}));
            navigation.navigate("Login")
        }
    }
    return (
        <Background>
            <Text style={[styles.text,{top:Height*0.15, left:Width *0.1}]}>Ingrese Usuario</Text>
            <TextInput style={[styles.input,{top: Height*0.16,}]} onChangeText={onChangeTextUser} value={textUser}/>
            <Text style={[styles.text,{top:Height*0.2, left:Width *0.1}]}>Ingrese Contraseña</Text>
            <TextInput style={[styles.input,{top: Height*0.21,}]} onChangeText={onChangeTextPass} value={textPass} secureTextEntry={true}/>
            <Text style={[styles.text,{top:Height*0.24, left:Width *0.1}]}>Confirme Contraseña</Text>
            <TextInput style={[styles.input,{top: Height*0.25,}]} onChangeText={onChangeConfirmPass} value={confirmPass} secureTextEntry={true}/>
              
            <TouchableOpacity style={styles.button} onPress={()=>{InputValidation()}}>
                <Text style={[styles.text, {left:15, top:9}]} >Ingresar</Text>
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
      },
    button: {
        backgroundColor: 'white',
        width: Width*0.3,
        height: Height*0.07,
        borderRadius:25,
        left: Width *0.54,
        top: Height*0.3
    }
  });
  