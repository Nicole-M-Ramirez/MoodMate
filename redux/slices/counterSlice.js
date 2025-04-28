import { createSlice } from '@reduxjs/toolkit';
// import { timeNowAsInt } from '../../components/RioGlobalFuncs';
// import { toDate } from '../../components/RioGlobalFuncs';
// import { getMetaIdx } from '../../components/RioGlobalFuncs';
// import { startTransition } from 'react';

export const counterSlice = createSlice({
   name: 'counter',
   initialState: {
        usuarios:{
            "MoodMate":{password:"MoodMate"}
        },
        GAD7_Responce: [null,null,null,null,null,null,null],
        custodioNum: '0000000000',
        amigoNum:'0000000000',
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
        updateNumber:(state,action)=>{
            if(action.payload.id === "custodio"){
                state.custodioNum = action.payload.num
            }
            if(action.payload.id === "amigo"){
                state.amigoNum = action.payload.num
            }
        }
         
   },
});


export const {addUser,updateGAD,updateNumber} = counterSlice.actions;


export default counterSlice.reducer;