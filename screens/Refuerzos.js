import { View,Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from "react-native";
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Background from "../components/Background";
import { colors } from "../components/constants";
import ScreenLogo from "../components/ScreenLogo";
import { useDispatch, useSelector } from 'react-redux';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

function Refuerzos () {
    const navigation = useNavigation();

    const [esButtomColor, setEsButtonColor] = useState('#cfa9ca');
    const [enButtomColor, setEnButtonColor] = useState('white');

    const [originaColor, setOriginColor] = useState('#cfa9ca');
    const [bnColor, setBNColor] = useState('white');
    const [daltoColor, setdaltColor] = useState('white');
    const [espeColor, setEspeColor] = useState('white');

    function ChangeLanButtonColor (idioma){
        if (idioma === 'es'){
            setEsButtonColor('#cfa9ca')
            setEnButtonColor('white')
        }
        if(idioma === 'en'){
            setEsButtonColor('white')
            setEnButtonColor('#cfa9ca')
        }
    }

    function ChangeColorButtonColor (button){
        if (button === 'original'){
            setOriginColor('#cfa9ca')
            setBNColor('white')
            setdaltColor('white')
            setEspeColor('white')
        }
        if (button === 'bn'){
            setOriginColor('white')
            setBNColor('#cfa9ca')
            setdaltColor('white')
            setEspeColor('white')
        }
        if (button === 'dalt'){
            setOriginColor('white')
            setBNColor('white')
            setdaltColor('#cfa9ca')
            setEspeColor('white')
        }
        if (button === 'espe'){
            setOriginColor('white')
            setBNColor('white')
            setdaltColor('white')
            setEspeColor('#cfa9ca')
        }
    }

    const [textUser, onChangeTextUser] = useState('');
    const [textPass, onChangeTextPass] = useState('');

    const custodioNum = useSelector(state => state.counter.custodioNum);
    const amigoNum = useSelector(state => state.counter.amigoNum);

    
    return (
        <Background Color={'white'}>
            <ScreenLogo Title='Refuerzos' Color={'white'} TextColor = 'black' Top = {-0.65} Left = {0.4} Size = {25}/>

            <Text style={[styles.text,{top:Height*0.15, left:Width *0.1}]}>Contacto de Custodio</Text>
            <TouchableOpacity style={[styles.input,{top: Height*0.16,}]} onChangeText={onChangeTextUser} value={textUser}>
                <Text style={styles.numText}>{custodioNum}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("CambiarNumero",{id: "custodio"})}}>
                <Text style={[styles.text, {left:(Width*0.3)*0.15, top:(Height*0.07)*0.1, fontSize:20}]}>Cambiar Numero</Text>
            </TouchableOpacity>

            <Text style={[styles.text,{top:Height*0.2, left:Width *0.1}]}>Contacto de amigo</Text>
            <TouchableOpacity style={[styles.input,{top: Height*0.21,}]} onChangeText={onChangeTextUser} value={textUser}>
                <Text style={styles.numText}>{amigoNum}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{top:Height*0.22}]} onPress={()=>{navigation.navigate("CambiarNumero",{id: "amigo"})}}>
                <Text style={[styles.text, {left:(Width*0.3)*0.15, top:(Height*0.07)*0.1, fontSize:20}]}>Cambiar Numero</Text>
            </TouchableOpacity>

            <Text style={[styles.text,{top:Height*0.25, left:Width *0.1}]}>Contacto de Linea Paz</Text>
            <TouchableOpacity style={[styles.input,{top: Height*0.26,}]} onChangeText={onChangeTextUser} value={textUser}>
                <Text style={styles.numText}>988</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('Menu')}}>
                <Image style={styles.iconImage} source={require('../assets/Home.png')}/>
            </TouchableOpacity>

            
        </Background>
    )
}

export default Refuerzos;

const styles = StyleSheet.create({
    numText:{
        fontWeight: 500,
        fontSize: 20,
        color: 'black',
        top: (Height*0.05)*0.15,
        left: (Width*0.74)*0.04
    },

    text:{
        fontWeight: 700,
        fontSize: 25,
        color: 'black',
        left: Width*0.35,
        top: Height*0.2
    },
    button:{
        height: Height*0.07,
        borderRadius:10,
        left: Width *0.53,
        width: Width*0.3,
        top: Height*0.17,
        backgroundColor: colors.limegreen_3,
    },
    buttonText:{
        fontWeight: 600,
        fontSize: 20,
        color: 'black',
        left: (Width*0.3)*0.15,
        top: (Height*0.07)*0.25
    },
    iconImage:{
        width: Width*0.22,
        height: Height*0.1,
        left: Width *0.39,
        top: Height*0.3
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
  });
