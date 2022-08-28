import type { Storeable } from 'src/base/interface'
import { writable } from 'svelte/store'

class CountStore {
  private _count = writable(0)

  _increment() {
    this._count.update((n) => n + 1)
  }

  _decrement() {
    this._count.update((n) => n - 1)
  }

  _get() {
    let result: number
    this._count.subscribe((v) => (result = v))
    return result
  }
}
export const countStore = new CountStore()
