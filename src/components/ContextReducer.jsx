import React, { createContext, useContext, useReducer } from "react";

const cardStateContext = createContext();
const cardDispachContext = createContext();
const reducer = (state , action)=>{
    switch (action.type) {
        case "ADD":
            let temp = [...state , {id:action.id , name: action.name , qtn : action.qnt , size : action.size , price:action.price}];
            console.log(temp)
            return temp;
        default:
            console.log("error in reducer")
    }
    // if(action.type === "ADD"){
    //     return [...state , {id:action.id , name: action.name , qtn : action.qnt , size : action.size}];
    // }
    // return state;
}

export const CardProvider = ({children})=>{
    const [state , dispatch] = useReducer(reducer , []);
    return(
        <cardDispachContext.Provider value={dispatch}>
            <cardStateContext.Provider value={state}>
                {children}
            </cardStateContext.Provider>
        </cardDispachContext.Provider>
    )
}

export const useCart = ()=>useContext(cardStateContext);
export const useDispatchCart = () =>useContext(cardDispachContext)