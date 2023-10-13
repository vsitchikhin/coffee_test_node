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
  size: ParameterDto;
  drinksQty: ParameterDto;
}