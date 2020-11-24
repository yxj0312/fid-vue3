  
import FetchRequest, { FetchRequestOptions } from 'src/utils/request'
import mockFetch from 'src/utils/test/mock-fetch'

beforeEach(() => {
  mockFetch({ type: 'body' })
})

afterEach(() => {
  jest.clearAllMocks()
}