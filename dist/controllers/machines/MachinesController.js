"use strict";
/*
import { IResponse, UserFullApi, UserShortApi, UserDto } from "types/api/api.types";
import { Users } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import { ErrorsTypesEnum } from "../../types/errorsTypesEnum";


export async function signIn(payload: UserFullApi, salt: string, db: PrismaClient) {
  const password = await bcrypt.hash(payload.password, salt);

  await db.$connect();

  const userResponse: UserDto = {
    id: payload.id,
    name: payload.name,
    surname: payload.surname,
    login: payload.login || payload.email || '',
    password: password,
    accounts: [],
  }

  if (!userResponse.login) {
    return {
      payload: {},
      error: true,
      errorCode: ErrorsTypesEnum.invalidData,
      msg: 'Email or login required!',
    } as IResponse;
  }

  const response = await db.users.create({
    include: {
      accounts: {
        include: {
          user: true,
        }
      }
    },
    data: {
      name: userResponse.name,
      surname: userResponse.surname,
      login: userResponse.login,
      password: userResponse.password,
      accounts: undefined,
    }
  })

  await db.$disconnect();

  return {
    payload: response,
    error: false,
    errorCode: ErrorsTypesEnum.ok,
    msg: '',
  } as IResponse;
}

export async function signUp(payload: UserShortApi, salt: string, db: PrismaClient) {
  const password = await bcrypt.hash(payload.password, salt);

  await db.$connect();

  const response = await db.users.findUnique({
    where: {
      login: payload.login,
    }
  })

  await db.$disconnect();

  if (!response) {
    return {
      payload: {},
      error: true,
      errorCode: ErrorsTypesEnum.invalidData,
      msg: 'This user is not exists',
    } as IResponse;
  }

  if (response.password !== password) {
    return {
      payload: {},
      error: true,
      errorCode: ErrorsTypesEnum.invalidPassword,
      msg: 'Invalid password',
    } as IResponse;
  }

  return {
    payload: response,
    error: false,
    errorCode: ErrorsTypesEnum.ok,
    msg: '',
  } as IResponse;
}
*/ 
