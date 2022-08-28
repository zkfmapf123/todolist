export interface TodoParams {
  txt: string
  isComplete: boolean
}

export interface Storeable<T, K> {
  _update?(param?: K): void
  _get?(): T
  _delete?(id: number): void
  _reset(): void
}
