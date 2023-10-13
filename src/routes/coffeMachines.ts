import express from 'express';
import { PrismaClient } from '@prisma/client';
import useMachinesController from "../controllers/machines/MachinesController";
import {seed} from "../dbseed";



export default function getCoffeeMachinesRouter(db: PrismaClient) {
  const router = express.Router();

  // Получение списка всех кофе машин добавленных в хранилище
  router.get('/', async (req, res) => {

    const data = await useMachinesController(db).getAllRegisteredMachines();
    res.json(data)
  })

  router.post('/seed', async (req, res) => {
    await seed(db);
    res.json('it was seed');
  })

  // Получение списка всех параметров кофе машин
  router.get('/parameters', async (req, res) => {
    res.json('machines')
  })

  // Удаление кофе машины из списка добавленных
  router.delete('/:id(^[0-9]+&)', async (req, res) => {
    res.json(`delete machine ${req.params.id}`)
  })

  // Обновление данных о добавленной кофе машине
  router.patch('/:id(^[0-9]+&)', async (req, res) => {
    res.json('patch')
  })

  // Добавление кофе машины в хранилище
  router.post('/', async(req, res) => {
    res.json('post')
  })

  return router;
}

/*
пример роутера
import express from 'express';
import { PrismaClient } from "@prisma/client";
import { signIn, signUp } from "../controllers/auth/AuthController";
import { salt } from "../app";

export default function getAuthRouter(db: PrismaClient) {
    const router = express.Router();

    router.post('/signin', async (req, res) => {
        const data = req.body;

        const response = await signIn(data, salt, db);

        console.log(response);
        res.json(response);
    });

    router.post('/signup', async (req, res) => {
        const data = req.body;

        const response = await signUp(data, salt, db);

        res.json(response);
    });

    return router;
}
*/