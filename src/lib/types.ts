export interface Products{
    first:number;
    prev: number | null; // previous page
    next: number | null; // next page
    last: number | null; // last item
    pages: number | null; // number of pages
    items: number | null; // total items
    data : Product[] | undefined;
}

export interface Product{

    id: number,
    title : string,
    price : number,
    currency: string,
    image: string,
    rating: number,
    description: string,
}

export interface TGetData{
    data: Product[] | undefined,
    error: any,
    loading: boolean,
}