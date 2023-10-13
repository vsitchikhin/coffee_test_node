"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function getCoffeeMachinesRouter(db) {
    const router = express_1.default.Router();
    // Получение списка всех кофе машин добавленных в хранилище
    router.get('/', async (req, res) => {
        const data = req.body.json();
        res.json(`this is machines page`);
    });
    // Получение списка всех параметров кофе машин
    router.get('/parameters', async (req, res) => {
        res.json('machines');
    });
    // Удаление кофе машины из списка добавленных
    router.delete('/:id(^[0-9]+&)', async (req, res) => {
        res.json(`delete machine ${req.params.id}`);
    });
    // Обновление данных о добавленной кофе машине
    router.patch('/:id(^[0-9]+&)', async (req, res) => {
        res.json('patch');
    });
    // Добавление кофе машины в хранилище
    router.post('/', async (req, res) => {
        res.json('post');
    });
    return router;
}
exports.default = getCoffeeMachinesRouter;
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
