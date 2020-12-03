declare interface Product {
  id: string
  brand: string
  description: string
  priceO: number
  priceR: number | undefined
  url: string
  images: string[]
  sizes: string[]
}
