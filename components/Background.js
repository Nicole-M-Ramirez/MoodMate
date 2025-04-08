import {Text, View, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import { PointerType } from 'react-native-gesture-handler';
import { colors } from './constants';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function Background (props) {
    return(
        // <ImageBackground source={require('../assets/background.jpeg')} resizeMode="stretch" style={styles.img}>
        //     {props.children}
        // </ImageBackground>
        <View style={{backgroundColor: props.Color, height:screenHeight}}>
          {props.children}
        </View>
    )
}

export default Background;

const styles = StyleSheet.create({
    img: {
      height: screenHeight,
      width: screenWidth,
      //justifyContent: 'center',
      //alignItems: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 2,
      padding: 10,
    },
  });