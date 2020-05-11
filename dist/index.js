"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TelegramBot = require("node-telegram-bot-api");
const ROBOHASH_URL = process.env.ROBOHASH_URL;
const TG_TOKEN = process.env.TG_TOKEN;
function handleRobo(req, res) {
    const chat = req.body.message.chat;
    const bot = new TelegramBot(TG_TOKEN);
    bot.sendPhoto(chat.id, ROBOHASH_URL + "/" + req.body.message.text);
    res
        .status(200)
        .type('application/json')
        .send("OK telegram")
        .end;
}
exports.handleRobo = handleRobo;
