import NumberFormat from "react-number-format";
import { useNavigate } from "react-router-dom";
import ic_shipping from "../Assets/img/ic_shipping.png"
import { ISearchComponent } from "../Shared/Models/DetailProduct.model";
const ResulProductComponet = (props: ISearchComponent) => {
    const navigate = useNavigate()
    return (
        <div>
            {props.results.map(result => (
                <div className="p--32">
                    <div className="row">
                        <div className="col-2">
                            <img className="img-result contenedor-detalles cp" src={result.thumbnail} alt={result.id} onClick={() => navigate(`/items/${result.id}`)}/>
                        </div>
                        <div className="col-6 mg--left-32">
                            <div className="text--size-24 tetx-color--2 mg--button-32">
                                <div className="row">
                                    <div className="col-4">
                                        <NumberFormat
                                            value={result.price}
                                            prefix={"$"}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        />
                                        { result.shipping.free_shipping ?? <img className="mg--left-32" src={ic_shipping} alt="icon" />}
                                    </div>
                                </div>
                            </div>
                            <div className="text--size-18 tetx-color--2 title-search cp" onClick={() => navigate(`/items/${result.id}`)}>{result.title}</div>
                            {/* <div className="text--size-18 tetx-color--2">subtitulo equipo</div> */}
                        </div>
                        <div className="col-3 text--size-12 tetx-color--4">
                            {result.address?.city_name}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ResulProductComponet;