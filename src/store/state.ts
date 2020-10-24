export interface Product {
    id: string
    brand: string
    description: string
    priceO: number
    priceR: number
    url:string
    images: Array<string>
    sizes:Array<string>
}

export interface State {
    loading: boolean,
    data: Array<Product>
}

export const state:State = {
    loading: false,
    data: [{id: "0", brand: "", description: "", priceO: 0 , priceR: 0, url: "", images: [], sizes: []}]
}

