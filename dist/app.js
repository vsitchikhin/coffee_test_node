"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./database/db");
const coffeMachines_1 = __importDefault(require("./routes/coffeMachines"));
dotenv_1.default.config();
const expressJSONBody = express_1.default.json();
exports.app = (0, express_1.default)();
exports.app.use(expressJSONBody);
exports.app.use('/machines', (0, coffeMachines_1.default)(db_1.db));
