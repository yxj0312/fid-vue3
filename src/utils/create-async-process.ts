import { Ref, ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface CreateAsyncProcessReturn<T extends (...args: any[]) => any> {
  active: Ref<boolean>
  run: (...args: Parameters<T>) => Promise<ReturnType<T>>
}
