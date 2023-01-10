import { createContext, useState } from "react";

export const VendedorContext = createContext();

export const VendedorContextProvider = ({children}) => {

    const [vendedor,setVendedor] = useState();

    return(
        <VendedorContext.Provider value={{vendedor,setVendedor}}>
            {children}
        </VendedorContext.Provider>
    )
}