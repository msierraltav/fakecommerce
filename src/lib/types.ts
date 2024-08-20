export interface Products{
    products : Product[];
}

export interface Product{

    id: number,
    title : string,
    price : number,
    currency: string,
    image: string,
    rating: number,
}

export interface TGetData{
    data: Product[] | undefined,
    error: any,
    loading: boolean,
}