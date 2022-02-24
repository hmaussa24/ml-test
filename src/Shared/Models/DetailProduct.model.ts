export interface IDetailProduct {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    pictures: pictures[];
    condition: string;
    sold_quantity: number;
    category_id: string;
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