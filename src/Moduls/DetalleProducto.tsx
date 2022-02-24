import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Description from "../Componets/DescriptionComponet"
import DetailComponet from "../Componets/DetailComponet"

const DetalleProducto = () => {

    const { id } = useParams();

    useEffect(() => {

    }, [])
    return (
        <div className="bck--color7 contenedor-detalles">
            <div className="row">
                <div className="col-8">
                    <img className="image-product" src="https://http2.mlstatic.com/D_848039-MLA47150751310_082021-I.jpg" alt="D_848039-MLA47150751310_082021-I" />
                </div>
                <div className="col-4">
                    <DetailComponet titulo="Deco Reverce Sombrero" subTitle="Nuevo- 234 Vendidos" price="12000" />
                </div>
            </div>
            <div className="description">
                <Description titulo="Este es un titulo" body="Esta es una descripcion larga gruesa y mojosa Esta es una descripcion Esta es una descripcion larga gruesa y mojosa Esta es una descripcion Esta es una descripcion larga gruesa y mojosa Esta es una descripcion Esta es una descripcion larga gruesa y mojosa Esta es una descripcion larga gruesa y mojosa Esta es una descripcion larga gruesa y mojosa " />
            </div>
        </div>
    )
}

export default DetalleProducto