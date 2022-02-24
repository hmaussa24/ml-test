import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Description from "../Componets/DescriptionComponet"
import DetailComponet from "../Componets/DetailComponet"
import { useAppDispachs } from "../Redux/hooks/hooks"
import { setBreadCrub } from "../Redux/slices/BreadCrumb.slice"
import { ProductsDataApi } from "../Services/Api.service"
import { IDetailProduct, IDescription } from "../Shared/Models/DetailProduct.model"

const DetalleProducto = () => {

    const { id } = useParams();
    const [product, setProduct] = useState<IDetailProduct>()
    const [description, setDescription] = useState<IDescription>()
    const history = useNavigate();

    const dispatcher = useAppDispachs();

    const getCategory = useCallback((id: string) => {
        ProductsDataApi.getCategories(id)
            .then(result => {
                dispatcher(setBreadCrub(result.data.path_from_root))
            })
            .catch(error => {
               
            })
    }, [dispatcher])
    const getProductDetail = useCallback((id: string) => {
        ProductsDataApi.getProduct(id)
            .then(result => {
                setProduct(result.data)
                getCategory(result.data.category_id)
            })
            .catch(error => {
                history("NotFoud")

            })
    }, [getCategory, history])

    const getDescriptionProduct = (id: string) => {
        ProductsDataApi.getDescription(id)
            .then(result => {
                setDescription(result.data)
            })
            .catch(error => {

            })
    }


    useEffect(() => {
        if (id) {
            getProductDetail(id);
            getDescriptionProduct(id)
        }
    }, [id, getProductDetail])
    return (
        <div className="bck--color7 contenedor-detalles">
            <div className="row">
                <div className="col-8 image-product">
                    <img className="mg--top-32" src={product?.pictures[0].url} alt={product?.id} />
                </div>
                <div className="col-4">
                    <DetailComponet titulo={product?.title} subTitle={`${product?.condition} - ${product?.sold_quantity} Vendidos`} price={product?.price} />
                </div>
            </div>
            <div className="description">
                <Description titulo={product?.title} body={description?.plain_text} />
            </div>
        </div>
    )
}

export default DetalleProducto