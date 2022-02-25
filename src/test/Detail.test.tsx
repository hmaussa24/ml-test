import React from "react";
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { IDetail } from "../Shared/Models/DetailInterface";
import DetailComponet from "../Componets/DetailComponet";

test("render detail componet", () => {
    const detail: IDetail = {
        titulo: "Phone",
    }
    const view = render(<DetailComponet price={detail.price} titulo={detail.titulo}/>)
    const boton =  view.container.querySelector("button")
    expect(boton).toBeInTheDocument()
    expect(view.container).toHaveTextContent("Phone")
})
