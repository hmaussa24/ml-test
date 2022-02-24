import NumberFormat from "react-number-format";
import { IDetail } from "../Shared/Models/DetailInterface";

const DetailComponet = (props: IDetail) => {
    const {titulo, subTitle, price} =  props
    return (
        <div className="mg--top-32 conten-detail">
            <div className="text--size-14 mg--button-16">
                {subTitle}
            </div>
            <div className="text--size-24 mg--button-32 fw">
                {titulo}
            </div>
            <div className="text--size-46 mg--button-32">
                <NumberFormat 
                 value={price}
                 prefix={"$"}
                 displayType={'text'}
                 thousandSeparator={true}
                />
            </div>
            <div>
            <button type="button" className="btn btn-primary boton">Comprar</button>
            </div>
        </div>
    )
}

export default DetailComponet;