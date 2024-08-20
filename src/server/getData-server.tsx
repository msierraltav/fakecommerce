// server render aproach
import { Product } from "@/lib/types";
import Products from "../app/components/Products";

export async function GetDataServer() {

    const URL = "https://my-json-server.typicode.com/msierraltav/fakecommerce/products"
    let data : Product[] = [];
    let error: any = "";
    let loading : boolean = true;        
        try {
          const response  = await fetch(URL);
          const result =  await response.json()
            data = result;
        } catch (e) {
          console.error(e);
          error = e;
        } finally{
          loading = false;
        }

        return (<Products data={data} error={error} loading={loading} />)
}