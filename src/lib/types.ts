export interface TProducts{
    first:number;
    prev: number | null; // previous page
    next: number | null; // next page
    last: number | null; // last item
    pages: number | null; // number of pages
    items: number | null; // total items
    data : TProduct[] | undefined;
}

export interface TProduct{

    id: number,
    title : string,
    price : number,
    currency: string,
    image: string,
    rating: number,
    description: string,
}

export interface TGetData{
    data: TProduct[] | undefined,
    error: any,
    loading: boolean,
}