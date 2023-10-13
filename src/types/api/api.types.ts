export interface ParameterDto {
  id: number;
  name: string
  value: string;
  code: string;
  image?: string;
}

export interface CoffeeMachineDto {
  id: number;
  name: string;
  count: number;
  size: Required<ParameterDto>;
  drinksQty: ParameterDto;
}

export interface IResponse<T> {
  payload: T;
  error: boolean;
  errorCode: string;
  msg: string;
}

export enum ParameterTypesEnum {
  qty = 'DRINKS_QTY',
  size = 'SIZE',
}
