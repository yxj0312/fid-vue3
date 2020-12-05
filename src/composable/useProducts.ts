import { computed, ComputedRef, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import createAsyncProcess from '../utils/create-async-process'

import { getProducts } from '../services/product/getProducts'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export function useProducts () {
  const products = ref<Product[]>([])

  async function fetchProducts (): Promise<void> {
    products.value = []
    let responsePromise: null | Promise<ProductsResponse> = null

    responsePromise = getProducts()

    if (responsePromise !== null) {
      const response = await responsePromise
      products.value = response
    } else {
      throw new Error('Product type not supported')
    }
  }

  const { active: articlesDownloading, run: runWrappedFetchArticles } = createAsyncProcess(fetchProducts)

  return {
    fetchProducts: runWrappedFetchArticles,
    articlesDownloading,
    products,
  }
}
