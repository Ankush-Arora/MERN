import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
    switch(action.type)
    {
        case "ADD":
            return[...state,{id:action.id,name:action.name,quantity:action.quantity,
              description:action.description,totalPrice:action.totalPrice,img:action.img}]
        case "REMOVE":
               let newArray= [...state]
               newArray.splice(action.idx,1)
               return newArray;
        case "DROP":
                let emptyArray=[]
                return emptyArray

        default: console.log('Error in reducer')
    }

}

export const CartProvider = ({children}) => {

    const [state,dispatch]=useReducer(reducer,[])

  return (
    <CartDispatchContext.Provider value={dispatch}>
       <CartStateContext.Provider value={state}>
      {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

 export const useCart=()=>useContext(CartStateContext);
 export const useDispatchCart=()=>useContext(CartDispatchContext);
