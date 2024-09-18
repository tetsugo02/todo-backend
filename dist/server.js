"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb://localhost:27017/express-mongo");
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
