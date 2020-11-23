import merge from 'deepmerge'

export interface FetchRequestOptions {
  prefix: string
  headers: Record<string, string>
  params: Record<string, string | number | boolean>
}
export default class FetchRequest{
    private readonly defaultOptions: FetchRequestOptions = {
        prefix: '',
        headers: {},
        params: {},
    }

    private readonly options: FetchRequestOptions

    constructor (options: Partial<FetchRequestOptions> = {}) {
        this.options = merge(this.defaultOptions, options)
    }
}

