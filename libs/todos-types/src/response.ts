export namespace IResponse {
  export enum Codes {
    // 200
    SUCCESS = '200:SUCCESS',
    // 400
    INVALID_FORMAT = '400:INVALID_FORMAT',
    REQUIRED = '400:REQUIRED',
    // 401
    AUTH = '401:NOT_AUTHORIZED',
    TOKEN_EXPIRED = '401:TOKEN_EXPIRED',
    INVALID_TOKEN = '401:INVALID_TOKEN',
    // 403
    BLOCKED = '403:RESOURCE_IS_BLOCKED',
    DENIED = '403:FORBIDDEN',
    // 404
    NOT_FOUND = '404:NOT_FOUND',
    // 500
    SERVER_ERROR = '500:SERVER_ERROR',
    // и другие...
  }

  export interface Error {
    type?: string;
    message: string;
    field?: string;
  }

  export type Errors = Array<Error>;

  export interface ErrorResponse {
    code: Codes;
    error?: string;
    errors?: Errors;
  }

  export type ResponseSuccess<P> = {
    code: Codes;
    payload: P;
  }

  export type Response<P> = ErrorResponse | ResponseSuccess<P>;
}