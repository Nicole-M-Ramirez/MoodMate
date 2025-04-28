import {Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, Alert, Image} from 'react-native';
import Background from '../components/Background';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';
import {updateGAD} from '../redux/slices/counterSlice';
import { colors } from "../components/constants";
import ScreenLogo from '../components/ScreenLogo';
import GAD_Exp from '../components/GAD-Exp';
//import { ScrollView } from 'react-native-gesture-handler';


const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

function GAD7 () {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [uno, setUno] = useState('');
    const [dos, setDos] = useState('');
    const [tres, setTres] = useState('');
    const [cuatro, setCuatro] = useState('');
    const [cinco, setCinco] = useState('');
    const [seis, setSeis] = useState('');
    const [siete, setSiete] = useState('');

    const AlertMessage = () =>
        Alert.alert('Numero no valido', 'Porfavor elija un numero de 0 a 3', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);


    return (
        <View>
            <Background Color={colors.ligthgrey_7}>
                 <Image style={styles.image} source={require('../assets/SerenaiLogo.png')}/>

                 <View style={styles.box}>
                    <Text style={styles.text}>Por favor llene el siguien te formulario para personalizar su respuesta</Text>
                 </View>

                 <ScrollView>
                        <GAD_Exp Texto={"1. Se ha sentido nervioso(a), ansioso(a), o con los nervios de punta"} Top={0.15} MargenT ={0.01}/>
                        <GAD_Exp Texto={"2. No ha sido capaz de parar o controlar su preocupacion"} Top={0.15} MargenT ={-0.08} MargenC={-0.085}/>
                        <GAD_Exp Texto={"3. Se ha preocupado demaciado por motivos diferentes"} Top={0.15}  MargenT ={-0.16} MargenC={-0.16}/>
                        <GAD_Exp Texto={"4. Ha tenido dificultad para relajarse"} Top={0.15} MargenT ={-0.24} MargenC={-0.24}/>
                        <GAD_Exp Texto={"5. Se ha sentido tan in quieto(a) que no ha podido quedarse quieto(a)"} Top={0.15} MargenT ={-0.32} MargenC={-0.32}/>
                        <GAD_Exp Texto={"6. Se ha molestado o irritado facilmente"} Top={0.15} MargenT ={-0.40} MargenC={-0.40}/>
                        <GAD_Exp Texto={"7. Ha tenido miedo de que algo terrible fuera a pasar"} Top={0.15} MargenT ={-0.48} MargenC={-0.48}/>

                        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Chatbot")}}>
                            <Text style={[styles.text, {left:15, top:16}]}>Continuar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button,{left: Width *0.1,top: Height*-0.62}]} onPress={()=>{navigation.navigate("Menu")}}>
                            <Text style={[styles.text, {left:15, top:16}]}>Volver</Text>
                        </TouchableOpacity>
                </ScrollView>

                 

                {/* <View style={{width: Width*0.8,left: Width*0.1,top: Height*0.1}}>
                    <Text style={styles.text}>Porfavor llene el para poder personalizar su experiencia con el chatbot. Para cada pregunta, seleccione un numero del 0 al 3 por nivel de intensidad</Text>
                </View>

                <View style={[styles.box]}>
                    <ScrollView>
                        <View style={{top:(Height*0.55)*0.05, left:(Width*0.8)*0.05}}>
                            <Text style={[styles.text,{marginBottom:5, width:(Width*0.8)*0.9}]}>1. Se ha sentido nervioso(a), ansioso(a), o con los nervios de punta</Text>
                            <TextInput style={[styles.input,{top: Height*0,}]} onChangeText={setUno} value={uno} keyboardType="numeric" />
                            <Text style={[styles.text,{marginBottom:5, width:(Width*0.8)*0.9}]}>2. No ha sido capaz de parar o controlar su preocupacion</Text>
                            <TextInput style={[styles.input,{top: Height*0,}]} onChangeText={setDos} value={dos} keyboardType="numeric" />
                            <Text style={[styles.text,{marginBottom:5, width:(Width*0.8)*0.9}]}>3. Se ha preocupado demaciado por motivos diferentes</Text>
                            <TextInput style={[styles.input,{top: Height*0,}]} onChangeText={setTres} value={tres} keyboardType="numeric" />
                            <Text style={[styles.text,{marginBottom:5, width:(Width*0.8)*0.9}]}>4. Ha tenido dificultad para relajarse</Text>
                            <TextInput style={[styles.input,{top: Height*0,}]} onChangeText={setCuatro} value={cuatro} keyboardType="numeric" />
                            <Text style={[styles.text,{marginBottom:5, width:(Width*0.8)*0.9}]}>5. Se ha sentido tan in quieto(a) que no ha podido quedarse quieto(a)</Text>
                            <TextInput style={[styles.input,{top: Height*0,}]} onChangeText={setCinco} value={cinco} keyboardType="numeric" />
                            <Text style={[styles.text,{marginBottom:5, width:(Width*0.8)*0.9}]}>6. Se ha molestado o irritado facilmente</Text>
                            <TextInput style={[styles.input,{top: Height*0,}]} onChangeText={setSeis} value={seis} keyboardType="numeric" />
                            <Text style={[styles.text,{marginBottom:5, width:(Width*0.8)*0.9}]}>7. Ha tenido miedo de que algo terrible fuera a pasar</Text>
                            <TextInput style={[styles.input,{top: Height*0,}]} onChangeText={setSiete} value={siete} keyboardType="numeric" />
                        </View>
                        <Text></Text>
                    </ScrollView>
                    <TouchableOpacity style={styles.button} onPress={()=>{InputValidation()}}>
                        <Text style={[styles.text, {left:20, top:13}]}>Continuar</Text>
                    </TouchableOpacity>
                </View> */}
            </Background>
        </View>
    )
}

export default GAD7;

const styles = StyleSheet.create({
    image:{
        width: Width*0.22,
        height: Height*0.1,
        left: Width *0.1,
        top: Height*0.1
    },

    text:{
        left:(Width*0.34)*0.05,
        top: (Height*0.2)*0.1,
        fontWeight: 500,
        fontSize: 20,
         //color: '#4f545c',
    },
    box:{
        width: Width*0.5,
        borderColor: '#4f545c',
        borderWidth: 2,
        height: Height*0.2,
        backgroundColor: "white",
        borderRadius: 10,
        left: Width*0.34,
        top: Height*0,
    },
    scrollView:{
        width: Width*0.7,
        height: Height*0.5,
        backgroundColor: "pink"
    },
    button: {
        backgroundColor: 'white',
        width: Width*0.3,
        height: Height*0.07,
        borderRadius:25,
        left: Width *0.5,
        top: Height*-0.55
    },
    input: {
        height:(Height*0.5)*0.09,
        borderWidth: 1,
        borderColor: '#4f545c',
        borderRadius:10,
        left: Width *0,
        width: Width*0.74,
        marginBottom:5
      },
  });
  