import express from 'express';
import { PrismaClient } from '@prisma/client';
import useMachinesController from "../controllers/machines/MachinesController";
import {seed} from "../dbseed";



export default function getCoffeeMachinesRouter(db: PrismaClient) {
  const router = express.Router();

  // Получение списка всех кофе машин добавленных в хранилище
  router.get('/', async (req, res) => {
    const response = await useMachinesController(db).getAllRegisteredMachines();
    res.json(response)
  })

  // Получение списка всех параметров кофе машин
  router.get('/parameters', async (req, res) => {
    const response = await useMachinesController(db).getAllParameters();
    res.json(response)
  })

  // Удаление кофе машины из списка добавленных
  router.delete('/:id(^[0-9]+&)', async (req, res) => {
    const response = await useMachinesController(db).deleteMachine(req.params.id);
    res.json(response);
  })

  // Обновление данных о добавленной кофе машине
  router.patch('/:id(^[0-9]+&)', async (req, res) => {
    const response = await useMachinesController(db).patchMachine(req.params.id, req.body);
    res.json(response)
  })

  // Добавление кофе машины в хранилище
  router.post('/', async(req, res) => {
    const response = await useMachinesController(db).addMachineToBucket(req.body);
    res.json(response)
  })

  // Посев данных в базу. Выполняет заполнение базы параметрами
  router.post('/seed', async (req, res) => {
    await seed(db);
    res.json('Посев прошел успешно');
  })

  return router;
}
