import { request } from '../index'

export function getProducts (page = 1): Promise<ProductResponse> {
  // const params = { limit, offset: (page - 1) * limit }
  //   const params = null
  return request.get<ProductResponse>('/fid-task-4-ffront-products.json')
}
