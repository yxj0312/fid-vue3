
import FetchRequest, { FetchRequestOptions } from 'src/utils/request'
import mockFetch from 'src/utils/test/mock-fetch'
import { Either, fail, isEither, success } from 'src/utils/either'

import { NetworkError } from 'src/types/error'

beforeEach(() => {
  mockFetch({ type: 'body' })
})

afterEach(() => {
  jest.clearAllMocks()
})

const PREFIX = '/prefix'
const SUB_PREFIX = '/sub-prefix'
const PATH = '/path'
const PARAMS = { q1: 'q1', q2: 'q2' }

type SafeMethod = 'get' | 'delete' | 'checkableGet' | 'checkableDelete'
type UnsafeMethod = 'post' | 'put' | 'patch' | 'checkablePost' | 'checkablePut' | 'checkablePatch'
type Method = SafeMethod | UnsafeMethod

type CheckableSafeMethod = 'checkableGet' | 'checkableDelete'
type CheckableUnsafeMethod = 'checkablePost' | 'checkablePut' | 'checkablePatch'
type CheckableMethod = CheckableSafeMethod | CheckableUnsafeMethod

function isSafe (method: Method): method is SafeMethod {
  return ['get', 'delete'].includes(method)
}

function isCheckableSafe (method: CheckableMethod): method is CheckableSafeMethod {
  return ['checkableGet', 'checkableDelete'].includes(method)
}

function isCheckable (method: CheckableMethod | Method): method is CheckableMethod {
  return ['checkableGet', 'checkableDelete', 'checkablePost', 'checkablePut', 'checkablePatch'].includes(method)
}

async function triggerMethod<T = unknown> (request: FetchRequest, method: Method | CheckableMethod, options?: Partial<FetchRequestOptions>): Promise<T | Either<NetworkError, T>> {
  if (isCheckable(method)) {
    let response: Either<NetworkError, T>
    if (isCheckableSafe(method)) response = await request[method]<T>(PATH, options)
    else response = await request[method]<T>(PATH, {}, options)
    return response.isOk() ? success(response.value) : fail(response.value)
  } else {
    let body: T
    if (isSafe(method)) body = await request[method]<T>(PATH, options)
    else body = await request[method]<T>(PATH, {}, options)
    return body
  }
}
