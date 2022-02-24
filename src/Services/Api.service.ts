import { AxiosResponse } from "axios";
import { ICategory, IDescription, IDetailProduct } from "../Shared/Models/DetailProduct.model";
import { ENDPOINTS } from "./EndPoints";
import { httpGet } from "./HttpService";

export const ProductsDataApi = {
    getProduct: (id: String): Promise<AxiosResponse<IDetailProduct>> => {
        return httpGet<IDetailProduct>(`${ENDPOINTS.items}${id}`);
    },
    getDescription: (id: string): Promise<AxiosResponse<IDescription>> => {
        return httpGet<IDescription>(`${ENDPOINTS.items}${id}${ENDPOINTS.description}`);
    },
    getCategories: (id: string): Promise<AxiosResponse<ICategory>> => {
        return httpGet<ICategory>(`${ENDPOINTS.categories}${id}`);
    }
}