import ic_shipping from "../Assets/img/ic_shipping.png"
const ResulProductComponet = () => {
    return (
        <div>
            <div className="p--32">
                <div className="row">
                    <div className="col-2">
                        <img className="img-result contenedor-detalles" src="https://http2.mlstatic.com/D_807931-MLA47035108334_082021-O.jpg" alt="D_848039-MLA47150751310_082021-I" />
                    </div>
                    <div className="col-6 mg--left-32">
                        <div className="text--size-24 tetx-color--2 mg--button-32">
                            <div className="row">
                                <div className="col-4">
                                    $ 10000
                                    <img className="mg--left-32" src={ic_shipping} alt="icon" />
                                </div>
                            </div>
                        </div>
                        <div className="text--size-18 tetx-color--2">Este es un nombre de producto</div>
                        <div className="text--size-18 tetx-color--2">subtitulo equipo</div>
                    </div>
                    <div className="col-3 text--size-12 tetx-color--4">
                        Monteria
                    </div>
                </div>
            </div>
            <div className="p--32">
                <div className="row">
                    <div className="col-2">
                        <img className="img-result contenedor-detalles" src="https://http2.mlstatic.com/D_807931-MLA47035108334_082021-O.jpg" alt="D_848039-MLA47150751310_082021-I" />
                    </div>
                    <div className="col-6 mg--left-32">
                        <div className="text--size-24 tetx-color--2 mg--button-32">$ 10000</div>
                        <div className="text--size-18 tetx-color--2">Este es un nombre de producto</div>
                        <div className="text--size-18 tetx-color--2">subtitulo equipo</div>
                    </div>
                    <div className="col-3 text--size-12 tetx-color--4">
                        Monteria
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResulProductComponet;