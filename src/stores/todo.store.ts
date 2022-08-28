import type { Storeable, TodoParams } from 'src/base/interface'
import { writable } from 'svelte/store'

class TodoStore implements Storeable<TodoParams[], TodoParams> {
  private _todos = writable([])

  _update?(param?: TodoParams) {
    this._todos.update((todolist) => [...todolist, param])
  }

  _get?(): TodoParams[] {
    let result
    this._todos.subscribe((v) => (result = v))
    return result
  }

  _reset(): void {
    this._todos.set([])
  }
}

export const todoStore = new TodoStore()
