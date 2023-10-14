import {IResponse} from "../types/api/api.types";

export function useErrorResponse(e: any): IResponse<null> {
  return {
    payload: null,
    error: true,
    errorCode: e.code,
    msg: e.msg,
  }
}

export function useResponseBuilder<T>(payload: T): IResponse<T> {
  return {
    payload,
    error: true,
    errorCode: '',
    msg: '',
  }
}
