export interface IDetailProduct  {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    pictures: pictures[];
    condition: string;
    sold_quantity: number;
    category_id: string;
    shipping: {
        free_shipping: boolean;
    }
    address?:{
        city_name: string;
    }
}

export interface  IBreadCrumSearch{
    filters: [
        {
            values: [
                {
                    path_from_root: IPathFromRoot[]
                }
            ]
        }
    ]
}

export interface ISearch extends IBreadCrumSearch{
    results: IDetailProduct[];
    
}
export interface ISearchComponent{
    results: IDetailProduct[];
    
}

interface pictures {
    url: string;
    id: string;
}

export interface IDescription {
    text: string;
    plain_text: string;
}

export interface ICategory {
    id: string;
    name: string;
    path_from_root: IPathFromRoot[]
}

export interface IPathFromRoot {
    id: string;
    name: string;
}