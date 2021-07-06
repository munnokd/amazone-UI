import { createContext,useContext,useReducer } from "react";

// THis is data layer
export const stateContext=createContext();

// Build provider
export const StateProvider=({reducer,initialState,children})=>(
    <stateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </stateContext.Provider>
)
export const useStateValue=()=>useContext(stateContext);
