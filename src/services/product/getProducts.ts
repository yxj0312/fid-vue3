import { request } from '../index'

export function getProducts (): Promise<ProductsResponse> {
  // const params = { limit, offset: (page - 1) * limit }
  //   const params = null
  return request.get<ProductsResponse>('/fid-task-4-ffront-products.json')
}
