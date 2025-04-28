import {Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, Alert, Image} from 'react-native';
import Background from './Background';
import { colors } from "./constants";
import {useState} from 'react';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

function GAD_Exp ({Texto, Top, MargenT,MargenC}){
    const [uno, setUno] = useState('');
    const [dos, setDos] = useState('');
    const [tres, setTres] = useState('');

    function OnPress(boton){
        if(boton === 'uno'){
            setUno(colors.greypurple_2)
            setDos('')
            setTres('')
        }
        if(boton === 'dos'){
            setUno('')
            setDos(colors.greypurple_2)
            setTres('')
        }
        if(boton === 'tres'){
            setUno('')
            setDos('')
            setTres(colors.greypurple_2)
        }
        
    }

    return(
        <>
            <View style={{backgroundColor:'white', borderWidth:2, borderColor:'#4f545c', borderRadius:10, width: Width*0.74, left:Width*0.1, height:Height*0.07, top: Height*MargenT, marginBottom:Height*0.02 }}>
                <Text style={{fontWeight: '600', left: Width*0.05, width:Width*0.65, top: (Height*0.07)*Top}}>{Texto}</Text>
            </View>
            
            <View style={{top: Height* MargenC}} >
                <TouchableOpacity style={{backgroundColor:uno, borderWidth:2, borderColor:'#4f545c', borderRadius:100, height:Height*0.05, width: Width*0.11, left:Width*0.2}} onPress={()=>{OnPress("uno")}}>
                    <Text style={{fontWeight: '500',fontSize:20, left:(Width*0.05)*0.65, top: (Height*0.05)*0.15 }}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:dos, borderWidth:2, borderColor:'#4f545c', borderRadius:100, height:Height*0.05, width: Width*0.11, left:Width*0.4,top:Height*-0.048}} onPress={()=>{OnPress("dos")}}>
                    <Text style={{fontWeight: '500',fontSize:20, left:(Width*0.05)*0.65, top: (Height*0.05)*0.15 }}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:tres, borderWidth:2, borderColor:'#4f545c', borderRadius:100, height:Height*0.05, width: Width*0.11, left:Width*0.6,top:Height*-0.097}} onPress={()=>{OnPress("tres")}}>
                    <Text style={{fontWeight: '500',fontSize:20, left:(Width*0.05)*0.65, top: (Height*0.05)*0.15 }}>3</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default GAD_Exp;

// const styles = StyleSheet.create({

// })