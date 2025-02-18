import { type Nothing } from '@template/shared/src/core/Nothing';

export type Result<T, E> = Ok<T, E> | Err<T, E>;

export class Ok<T, E> {
  private readonly _value: T;

  constructor(value: T) {
    this._value = value;
    Object.freeze(this);
  }

  get value() {
    return this._value;
  }

  isOk(): this is Ok<T, E> {
    return true;
  }

  isErr(): this is Err<T, E> {
    return false;
  }

  unwrapValue(): T {
    return this._value;
  }

  unwrapError(): never {
    throw new Error(`Can't unwrap the error of an Ok. Use 'unwrapValue' method instead.`);
  }
}

export class Err<T, E> {
  private readonly _error: E;

  constructor(error: E) {
    this._error = error;
    Object.freeze(this);
  }

  get error() {
    return this._error;
  }

  isOk(): this is Ok<T, E> {
    return false;
  }

  isErr(): this is Err<T, E> {
    return true;
  }

  unwrapValue(): never {
    throw new Error(`Can't unwrap the value of an Err. Use 'unwrapError' method instead.`);
  }

  unwrapError(): E {
    return this._error;
  }
}

export const ok = <T, E>(value: T): Result<T, E> => new Ok<T, E>(value);
export const err = <T, E>(error: E): Result<T, E> => new Err<T, E>(error);

export namespace Result {
  export function combine<E>(results: Result<unknown, E>[]): Result<Nothing, E> {
    for (const result of results) {
      if (result.isErr()) return result as Err<Nothing, E>;
    }

    return ok(null);
  }
}
