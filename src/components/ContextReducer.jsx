import React, { createContext, useContext, useReducer } from "react";

const cardStateContext = createContext();
const cardDispachContext = createContext();
const reducer = (state , action)=>{
    switch (action.type) {
        case "ADD":
            let temp = [...state , {id:action.id , name: action.name , qtn : action.qnt , size : action.size , price:action.price}];
            return temp;
        case "REMOVE":
            let ind = action.index
            let newState = state.filter((item , index)=> index !== ind)
            return newState;
        case "UPDATE":
            let arr = [...state];
            arr.find((food , index)=>{
                if(food.id === action.id){
                    arr[index] = {...food , qtn: parseInt(action.qnt)+parseInt(food.qtn), price: action.price + food.price}
                }
                return arr
            })
            return arr
        default:
            console.log("error in reducer")
    }

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