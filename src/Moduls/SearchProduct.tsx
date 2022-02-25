import { useEffect, useState } from "react";
import ResulProductComponet from "../Componets/ResultProductComponent";
import { useQuery } from "../Hooks/useQuery";
import { useAppDispachs } from "../Redux/hooks/hooks";
import { setBreadCrub } from "../Redux/slices/BreadCrumb.slice";
import { ProductsDataApi } from "../Services/Api.service";
import { ISearch } from "../Shared/Models/DetailProduct.model";

const SearchProduct = () => {
    let query = useQuery();
    const [products, setProducts] = useState<ISearch>();
    const dispatcher = useAppDispachs();
    useEffect(() => {
        if (query.get("search")) {
            ProductsDataApi.getSearch(query.get("search") || "")
                .then(result => {
                    setProducts(result.data)
                    if (result.data.filters.length > 0) {
                        dispatcher(setBreadCrub(result.data.filters[0].values[0].path_from_root))
                    }else{
                        dispatcher(setBreadCrub([{
                            id: "1",
                            name: query.get("search") || "" 
                        }]))
                    }
                })
                .catch(error => {
                    dispatcher(setBreadCrub([]))
                })

        }
    }, [query, dispatcher])

    return (
        <div className="bck--color7 contenedor-detalles">
            {/* {query.get("search")} */}
            <ResulProductComponet results={products?.results || []} />

        </div>
    )
}


export default SearchProduct;