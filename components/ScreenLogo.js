import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { colors } from "./constants";

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

function ScreenLogo ({Title, Color, TextColor }) {
    return(
        <View style={[styles.view, {backgroundColor: Color}]}>
            <Image style={styles.image} source={require('../assets/SerenaiLogo.png')}/>
            <View style={{width:(Width*0.74)*0.6}}>
                <Text style={[styles.text,{color: TextColor}]}>{Title}</Text>
            </View>
        </View>
    )
}

export default ScreenLogo;

const styles = StyleSheet.create({
    image:{
        width: (Width*0.74)*0.39,
        height: (Height*0.13)*1,
        left: -4,
        top: -3
    },
    view:{
        top: Height*0.1,
        left: Width *0.1, 
        width: Width*0.74,
        height: Height*0.13,
        borderRadius: 70,
        backgroundColor: colors.greypurple_2,
        borderColor: colors.deepgreen_9,
        borderWidth:3
    },
    text:{
        fontWeight: 700,
        fontSize: 20,
        color: '#4f545c',
        left: (Width*0.74)*0.4,
        top: (Height*0.13)*-0.85
    }
  });