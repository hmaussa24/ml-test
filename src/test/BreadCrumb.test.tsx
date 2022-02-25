import React from "react";
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { BreadCrumInterface } from "../Shared/Models/BreadCrumbInterface";
import BreadcrumbComponent from "../Componets/BreadCrumbComponent"


test("render componet", () => {
    const BreadCrumb: BreadCrumInterface = {
        items: [
            {
                id: "ML123",
                name: "Phone Iphone",
            }, 
            {
                id: "ML321",
                name: "Televisor LG",
            }
        ]
    }
    const view = render(<BreadcrumbComponent items={BreadCrumb.items}/>)
    expect(view.container).toHaveTextContent(BreadCrumb.items[0].name)
    expect(view.container).toHaveTextContent(BreadCrumb.items[1].name)
})
