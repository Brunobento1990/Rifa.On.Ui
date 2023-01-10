import { useContext } from "react";
import { VendedorContext } from "../Context/VendedorContext";

export const useVendedorContext = () => {
    const {vendedor} = useContext(VendedorContext);

    return vendedor;
}