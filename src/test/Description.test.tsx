import React from "react";
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { IDescription } from "../Shared/Models/DescriptionInterface";
import Description from "../Componets/DescriptionComponet";

test("render componet", () => {
    const descricion: IDescription = {
        titulo: "Televisor",
        body: "Este es el cuerpo de una descripcion"
    }
    const view = render(<Description body={descricion.body} titulo={descricion.titulo}/>)
    expect(view.container).toHaveTextContent("Televisor")
    expect(view.container).toHaveTextContent("Este es el cuerpo de una descripcion")
})
