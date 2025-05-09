//import { createStackNavigator } from "@react-navigation/stack";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { useSelector } from "react-redux";

import UserAgreement from '../screens/UserAgreement';
import Login from "../screens/Login";
import GAD7 from '../screens/GAD7';
import Menu from '../screens/Menu';
import Chatbot from '../screens/Chatbot';
import ConfirmarUtilidad from '../screens/ConfirmarUtilidad';
import NewUser from '../screens/NewUser';
import Configuracion from '../screens/Configuracion';
import Refuerzos from '../screens/Refuerzos';
import CambiarNumero from '../screens/CambiarNumero';

const Stack = createNativeStackNavigator();

const StackComp = (props) => {

  // const registered = useSelector(state => state.counter.registered);
  // console.log("Registered-----: " + registered);
  return (
    <Stack.Navigator>
    
    <Stack.Screen
        name='Login'
        component={Login}
        // independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
    />
    <Stack.Screen
        name='NewUser'
        component={NewUser}
        // independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
    />
    <Stack.Screen
        name='GAD7'
        component={GAD7}
        // independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
    />
    <Stack.Screen
        name='Menu'
        component={Menu}
        // independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
    />
    <Stack.Screen
        name='Configuracion'
        component={Configuracion}
        // independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
    />
     <Stack.Screen
        name='Refuerzos'
        component={Refuerzos}
        // independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
    />
    <Stack.Screen
        name='Chatbot'
        component={Chatbot}
        // independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
    />
    <Stack.Screen
        name='ConfirmarUtilidad'
        component={ConfirmarUtilidad}
        // independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
    />
    <Stack.Screen
        name='CambiarNumero'
        component={CambiarNumero}
        // independent ={true}
        options={{
          headerTitle: "",
          headerShown: false,
        }}
    />

</Stack.Navigator>
)

};


export default StackComp;