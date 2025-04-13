import { View,Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Background from "../components/Background";
import { colors } from "../components/constants";
import ScreenLogo from "../components/ScreenLogo";

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

function Configuracion () {
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
    
    return (
        <Background Color={colors.purple_5}>
            <ScreenLogo Title='Configuracion' Color={colors.purple_5} TextColor = 'white'/>

            <Text style={styles.text}>Idioma</Text>
            <TouchableOpacity style={[styles.button,{backgroundColor:esButtomColor}]} onPress={()=>{ChangeLanButtonColor('es')}}>
                <Text style={styles.buttonText}>Español</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button,{left: Width *0.6,top: Height*0.15,backgroundColor:enButtomColor}]} onPress={()=>{ChangeLanButtonColor('en')}}>
                <Text style={styles.buttonText}>English</Text>
            </TouchableOpacity>

            <Text style={[styles.text,{left:Width*0.4}]}>Color</Text>
            <TouchableOpacity style={[styles.button,{backgroundColor:originaColor}]} onPress={()=>{ChangeColorButtonColor('original')}}>
                <Text style={styles.buttonText}>Original</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button,{left: Width *0.6,top: Height*0.15,backgroundColor:bnColor}]} onPress={()=>{ChangeColorButtonColor('bn')}}>
                <Text style={[styles.buttonText,{top: (Height*0.07)*0.1}]}>Blanco y negro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor:daltoColor}]} onPress={()=>{ChangeColorButtonColor('dalt')}}>
                <Text style={[styles.buttonText,{left: (Width*0.3)*0.05}]}>Daltonismo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button,{left: Width *0.6,top: Height*0.15,backgroundColor:espeColor}]} onPress={()=>{ChangeColorButtonColor('espe')}}>
                <Text style={styles.buttonText}>Especial</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('Menu')}}>
                <Image style={styles.iconImage} source={require('../assets/Home.png')}/>
            </TouchableOpacity>
        </Background>
    )
}

export default Configuracion;

const styles = StyleSheet.create({
    text:{
        fontWeight: 700,
        fontSize: 30,
        color: 'white',
        left: Width*0.35,
        top: Height*0.2
    },
    button:{
        height: Height*0.07,
        borderRadius:10,
        left: Width *0.1,
        width: Width*0.3,
        top: Height*0.22
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
        top: Height*0.2
    },
  });
