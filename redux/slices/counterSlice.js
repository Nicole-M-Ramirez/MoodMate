import { createSlice } from '@reduxjs/toolkit';
// import { timeNowAsInt } from '../../components/RioGlobalFuncs';
// import { toDate } from '../../components/RioGlobalFuncs';
// import { getMetaIdx } from '../../components/RioGlobalFuncs';
// import { startTransition } from 'react';

export const counterSlice = createSlice({
   name: 'counter',
   initialState: {
        // usuarios: [
        //     {user: "MoodMate", password: "MoodMate"},
        // ],
        // usuarios:["MoodMate"],
        // contraseñas:["MoodMate"],
        usuarios:{
            "MoodMate":{password:"MoodMate"}
        },
        GAD7_Responce: [null,null,null,null,null,null,null],
    },

    reducers: {
        updateGAD :(state,action) =>{
            state.GAD7_Responce = action.payload.responces
            console.log(state.GAD7_Responce)
        },
        addUser: (state,action) => {
            console.log("User: ", action.payload.user)
            console.log("Password: ", action.payload.pass)

            state.usuarios[action.payload.user] = { password: action.payload.pass };

            console.log(state.usuarios)
            // console.log("User: ", action.payload.user)
            // console.log("Password: ", action.payload.pass)

            // state.usuarios.push({user: action.payload.user, password: action.payload.pass})
        },
         
   },
});


export const {addUser,updateGAD} = counterSlice.actions;


export default counterSlice.reducer;