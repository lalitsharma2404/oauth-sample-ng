export interface GenericDto<T> {
  code: number;
  readonly desc: string;
  payload: T;
}
