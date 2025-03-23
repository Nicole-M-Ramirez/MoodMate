import {Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../components/Background';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

function Chatbot () {
    const navigation = useNavigation();

    return (
        <Background>
            <View style={[styles.box]}>
                <ScrollView>
                    <View style={{top:(Height*0.55)*0.05, left:(Width*0.8)*0.05}}>
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("ConfirmarUtilidad")}}>
                <Text style={[styles.text, {left:28, top:13}]}>finalizar</Text>
            </TouchableOpacity>
        </Background>
    )
}

export default Chatbot;

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
        top: Height*0.07,
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
        left: Width *0.6,
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