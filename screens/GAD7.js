import {Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, Alert} from 'react-native';
import Background from '../components/Background';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';
import {updateGAD} from '../redux/slices/counterSlice';
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

    function InputValidation(){
        if(uno < 0 || uno > 3 || uno === ''){
            AlertMessage()
        }
        else if (dos < 0 || dos > 3 || dos === ''){
            AlertMessage()
        }
        else if (tres < 0 || tres > 3 || tres === ''){
            AlertMessage()
        }
        else if (cuatro < 0 || cuatro > 3 || cuatro === ''){
            AlertMessage()
        }
        else if (cinco < 0 || cinco > 3 || cinco === ''){
            AlertMessage()
        }
        else if (seis < 0 || seis > 3 || seis === ''){
            AlertMessage()
        }
        else if (siete < 0 || siete > 3 || siete === ''){
            AlertMessage()
        }
        else{
            navigation.navigate("Chatbot")
            dispatch(updateGAD({"responces":[uno,dos,tres,cuatro,cinco,seis,siete]}));
        }
        navigation.navigate("Chatbot")
    }

    return (
        <View>
            <Background>

                <View style={{width: Width*0.8,left: Width*0.1,top: Height*0.1}}>
                    <Text style={styles.text}>El siguientes cuestionario representa el GAD-7, utilizado para poder medir niveles de ansiedad en el usuario. Porfavor llene el para poder personalizar su experiencia con el chatbot. Para cada pregunta, seleccione un numero del 0 al 3 por nivel de intensidad</Text>
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
                </View>
            </Background>
        </View>
    )
}

export default GAD7;

const styles = StyleSheet.create({
    text:{
        //fontWeight: 700,
        fontSize: 17,
         color: '#4f545c',
    },
    box:{
        width: Width*0.8,
        height: Height*0.5,
        backgroundColor: "white",
        borderRadius: 10,
        left: Width*0.1,
        top: Height*0.12,
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
        top: Height*0.08
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
  