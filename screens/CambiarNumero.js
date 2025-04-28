import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import {useState} from 'react';
import Background from "../components/Background";
import ScreenLogo from "../components/ScreenLogo";
import { colors } from "../components/constants";
import { useDispatch, useSelector } from 'react-redux';
import {updateNumber} from '../redux/slices/counterSlice';
import {useNavigation} from '@react-navigation/native';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

function CambiarNumero(props){
    const {id} = props.route.params;

    const navigation = useNavigation();

    const dispatch = useDispatch();
    const [num, setNum] = useState('');

    function ConfirmarNumero(){
        dispatch(updateNumber({"id": id, "num": num}));
        navigation.navigate("Refuerzos")
    }

    return (
        <View>
             <Background Color={'white'}>
                <ScreenLogo Title='Cambiar Numero' Color={'white'} TextColor = 'black' Top = {-0.8} Left = {0.4} Size = {27}/>

                <Text style={[styles.text,{top:Height*0.15, left:Width *0.1}]}>Ingrese Numero de Telefono</Text>
                <TextInput style={[styles.input,{top: Height*0.16,}]} onChangeText={setNum} value={num} maxLength={10}/>

                <TouchableOpacity style={[styles.button,{top:Height*0.18}]} onPress={()=>{ConfirmarNumero()}}>
                    <Text style={[styles.text, {left:(Width*0.35)*0.15, top:(Height*0.07)*0.3, fontSize:20}]}>Confirmar</Text>
                </TouchableOpacity>
             </Background>
        </View>
    )
}

export default CambiarNumero;

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
        width: Width*0.35,
        height: Height*0.07,
        borderRadius:10,
        left: Width *0.49,
        top: Height*0.25,
        backgroundColor: colors.limegreen_3
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
  