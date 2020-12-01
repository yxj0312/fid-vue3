import { isRef } from 'vue'
import createAsyncProcess from './create-async-process'

describe('# Create async process', function () {
  const someProcess = (): Promise<null> => Promise.resolve(null)

  it('should expect active as Vue Ref type', function () {
    const { active } = createAsyncProcess(someProcess)

    expect(isRef(active)).toBe(true)
  })
})
