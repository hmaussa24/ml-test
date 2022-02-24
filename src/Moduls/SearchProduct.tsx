import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import ResulProductComponet from "../Componets/ResultProductComponent";
import { useQuery } from "../Hooks/useQuery";


const SearchProduct = () => {
    let query = useQuery();

    return (
        <div className="bck--color7 contenedor-detalles">
             {/* {query.get("search")} */}
             <ResulProductComponet />

        </div>
    )
}


export default SearchProduct;